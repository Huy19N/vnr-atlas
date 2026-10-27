import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import {categoryFor,placeFor,routesFor,mappedLocationIds} from './geography.mjs'
const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const root=path.resolve(project,'../..'),pub=path.join(project,'public')
const readJSON=async p=>JSON.parse(await fs.readFile(p,'utf8'))
const timeline=await fs.readFile(path.join(root,'Timeline_hop_nhat_Viet_Nam_The_gioi_1968_1975.md'),'utf8')
const cached=await readJSON(path.join(root,'tmp_research/media_timeline/events.json'))
const sources=await readJSON(path.join(root,'tmp_research/media_timeline/sources.json'))
const inventory=await readJSON(path.join(root,'Kho_anh_video_Timeline_1968_1975/Du_lieu_doi_chieu/danh_muc_tu_lieu.json'))
const mdEvents=[...timeline.matchAll(/^- \*\*(.*?) —\*\* (.+)$/gm)].map(x=>({label:x[1],text:x[2]}))
if(mdEvents.length!==238||cached.length!==238)throw new Error('Timeline phải có đủ 238 mục. Kiểm tra parser trước khi xây dựng.')
await fs.mkdir(path.join(pub,'media'),{recursive:true});await fs.mkdir(path.join(pub,'data'),{recursive:true});await fs.mkdir(path.join(pub,'documents'),{recursive:true})
const media=[]
for(const r of inventory){
 if(!['downloaded','link_only'].includes(r.status))continue
 const local=r.type==='image'&&r.status==='downloaded'?'/media/'+r.aid+path.extname(r.local_file):undefined
 if(local)await fs.copyFile(path.join(root,'Kho_anh_video_Timeline_1968_1975',r.local_file),path.join(pub,local.slice(1)))
 media.push({id:r.aid,type:r.type,title:r.title,date:r.date,description:r.description,kind:r.kind,rights:r.rights,source:r.source_url,url:r.url,local,status:r.status,width:r.image_size?.[0],height:r.image_size?.[1],duration:r.duration_measured_seconds||r.duration_seconds,origin:r.origin,eventIds:r.event_ids})
}
const missingLocations=cached.filter(e=>!mappedLocationIds.includes(e.eid)).map(e=>e.eid+' '+e.title)
if(missingLocations.length)throw new Error('Chưa gán địa điểm:\n'+missingLocations.join('\n'))
const events=cached.map((e,i)=>{
 const from=mdEvents[i];if(from.label!==e.label||from.text.trim()!==e.text.trim())throw new Error('Dữ liệu cache không khớp file Markdown tại '+e.eid)
 if(!mappedLocationIds.includes(e.eid))throw new Error('Chưa gán địa điểm cho '+e.eid)
 const month=e.month===13?13:e.month,day=e.day||15
 return {id:e.eid,year:e.year,month,day:e.day,dateLabel:e.label,title:e.title,description:from.text.replace(/\s*\[(S|N)\d+\]/g,'').trim(),sourceIds:e.sources,category:categoryFor(e),place:placeFor(e),media:media.filter(r=>r.eventIds.includes(e.eid)),routes:routesFor(e),locationNote:'Điểm đánh dấu là vị trí đại diện xấp xỉ. Các hướng, đường bay và hiệu ứng chỉ minh họa, không tái dựng chính xác đội hình, tỷ lệ hay giờ tác chiến.',progress:month===13?0.985:Math.min(0.955,((month-1)+(day-1)/31)/12)}
})
for(const event of events){if(event.month===13)continue;const siblings=events.filter(e=>e.year===event.year&&e.month===event.month);event.progress=((event.month-1)+(.15+(siblings.indexOf(event)+1)/(siblings.length+1)*.72))/12}
const output={events,sources,meta:{eventCount:events.length,mediaCount:media.length,generated:'2026-10-27',timelineHash:createHash('sha256').update(timeline).digest('hex'),title:'Việt Nam và thế giới · 1968–1975'}}
await fs.writeFile(path.join(pub,'data/history.json'),JSON.stringify(output))
await fs.copyFile(path.join(project,'node_modules/world-atlas/countries-50m.json'),path.join(pub,'data/world.json'))
await fs.writeFile(path.join(pub,'documents/Timeline_1968_1975.md'),timeline)
await fs.copyFile(path.join(root,'Nghien_cuu_chuyen_sau_Viet_Nam_1968_1975_SESSION.md'),path.join(pub,'documents/Ho_so_nghien_cuu.md'))
await fs.writeFile(path.join(project,'src/generated-meta.json'),JSON.stringify(output.meta))
console.log(`Đã nhập trực tiếp ${events.length} mục Markdown, ${media.length} tư liệu. ${events.filter(e=>e.media.some(m=>m.type==='image')).length} mốc có ảnh. Các video dùng URL bản số hóa gốc để giữ bản build nhẹ.`)
