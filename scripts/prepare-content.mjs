import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createHash} from 'node:crypto'
import {spawnSync} from 'node:child_process'
import ffmpeg from 'ffmpeg-static'
import {categoryFor,placeFor,routesFor,tacticalMapFor,mappedLocationIds} from './geography.mjs'
const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const root=path.resolve(project,'../..'),pub=path.join(project,'public')
const readJSON=async p=>JSON.parse(await fs.readFile(p,'utf8'))
const sourceInputs=[path.join(root,'Timeline_hop_nhat_Viet_Nam_The_gioi_1968_1975.md'),path.join(root,'tmp_research/media_timeline/events.json'),path.join(root,'tmp_research/media_timeline/sources.json'),path.join(root,'Kho_anh_video_Timeline_1968_1975/Du_lieu_doi_chieu/danh_muc_tu_lieu.json')]
const sourceAvailable=process.env.VERCEL!=='1'&&await Promise.all(sourceInputs.map(file=>fs.access(file).then(()=>true,()=>false))).then(states=>states.every(Boolean))
if(!sourceAvailable){
 const generated=[path.join(pub,'data/history.json'),path.join(pub,'data/world.json'),path.join(pub,'documents/Timeline_1968_1975.md'),path.join(pub,'documents/Ho_so_nghien_cuu.md'),path.join(project,'src/generated-meta.json')]
 const missing=[]
 for(const file of generated)try{await fs.access(file)}catch{missing.push(path.relative(project,file))}
 if(missing.length)throw new Error(`Không có kho nghiên cứu nguồn và thiếu dữ liệu đã sinh sẵn: ${missing.join(', ')}`)
 console.log('Dùng dữ liệu và tư liệu đã sinh sẵn trong repo (kho nghiên cứu gốc nằm ngoài thư mục deploy).')
 process.exit(0)
}
const timeline=await fs.readFile(path.join(root,'Timeline_hop_nhat_Viet_Nam_The_gioi_1968_1975.md'),'utf8')
const cached=await readJSON(path.join(root,'tmp_research/media_timeline/events.json'))
const sources=await readJSON(path.join(root,'tmp_research/media_timeline/sources.json'))
const inventory=await readJSON(path.join(root,'Kho_anh_video_Timeline_1968_1975/Du_lieu_doi_chieu/danh_muc_tu_lieu.json'))
const documentaryVideos=await readJSON(path.join(project,'scripts/documentary-videos.json'))
const documentaryVideoSource='https://www.youtube.com/watch?v=pcVky6f4xn4&list=WL&index=11'
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
for(const video of documentaryVideos){
 const file=path.join(pub,'media/video_tài_liệu',video.filename)
 await fs.access(file)
 media.push({id:video.id,type:'video',title:video.title,date:video.date,description:'Video tư liệu được bổ sung vào kho dự án. Nội dung từng cảnh chưa được đối chiếu độc lập.',kind:'video tư liệu',rights:'Tệp do người dùng bổ sung. Nguồn video: YouTube; quyền tái sử dụng phụ thuộc chủ sở hữu nội dung.',source:documentaryVideoSource,url:documentaryVideoSource,local:encodeURI('/media/video_tài_liệu/'+video.filename),status:'downloaded',origin:'user_supplied',eventIds:[video.eventId]})
}
const introPosterIds=['A0110','A0045','A0020','K08','A0136','A0132','A0158','A0010']
const introDir=path.join(pub,'media/intro')
await fs.mkdir(introDir,{recursive:true})
for(const id of introPosterIds){
 const source=inventory.find(r=>r.aid===id&&r.type==='image'&&r.status==='downloaded')
 if(!source)continue
 const output=path.join(introDir,id+'.jpg')
 const result=spawnSync(ffmpeg,['-hide_banner','-loglevel','error','-y','-i',path.join(root,'Kho_anh_video_Timeline_1968_1975',source.local_file),'-vf',"scale=w='min(2200,iw)':h='min(1800,ih)':force_original_aspect_ratio=decrease:force_divisible_by=2",'-frames:v','1','-q:v','4','-threads','2',output],{encoding:'utf8'})
 if(result.status!==0)throw Error(result.stderr||'Không tối ưu được ảnh mở đầu '+id)
}
const missingLocations=cached.filter(e=>!mappedLocationIds.includes(e.eid)).map(e=>e.eid+' '+e.title)
if(missingLocations.length)throw new Error('Chưa gán địa điểm:\n'+missingLocations.join('\n'))
const events=cached.map((e,i)=>{
 const from=mdEvents[i];if(from.label!==e.label||from.text.trim()!==e.text.trim())throw new Error('Dữ liệu cache không khớp file Markdown tại '+e.eid)
 if(!mappedLocationIds.includes(e.eid))throw new Error('Chưa gán địa điểm cho '+e.eid)
 const month=e.month===13?13:e.month,day=e.day||15
 return {id:e.eid,year:e.year,month,day:e.day,dateLabel:e.label,title:e.title,description:from.text.replace(/\s*\[(S|N)\d+\]/g,'').trim(),sourceIds:e.sources,category:categoryFor(e),place:placeFor(e),media:media.filter(r=>r.eventIds.includes(e.eid)),routes:routesFor(e),tacticalMap:tacticalMapFor(e),locationNote:'Điểm đánh dấu là vị trí đại diện xấp xỉ. Các hướng, đường bay và hiệu ứng chỉ minh họa, không tái dựng chính xác đội hình, tỷ lệ hay giờ tác chiến.',progress:month===13?0.985:Math.min(0.955,((month-1)+(day-1)/31)/12)}
})
for(const event of events){if(event.month===13)continue;const siblings=events.filter(e=>e.year===event.year&&e.month===event.month);event.progress=((event.month-1)+(.15+(siblings.indexOf(event)+1)/(siblings.length+1)*.72))/12}
const output={events,sources,meta:{eventCount:events.length,mediaCount:media.length,generated:'2026-10-27',timelineHash:createHash('sha256').update(timeline).digest('hex'),title:'Việt Nam và thế giới · 1968–1975'}}
await fs.writeFile(path.join(pub,'data/history.json'),JSON.stringify(output))
await fs.copyFile(path.join(project,'node_modules/world-atlas/countries-50m.json'),path.join(pub,'data/world.json'))
await fs.writeFile(path.join(pub,'documents/Timeline_1968_1975.md'),timeline)
await fs.copyFile(path.join(root,'Nghien_cuu_chuyen_sau_Viet_Nam_1968_1975_SESSION.md'),path.join(pub,'documents/Ho_so_nghien_cuu.md'))
await fs.writeFile(path.join(project,'src/generated-meta.json'),JSON.stringify(output.meta))
console.log(`Đã nhập trực tiếp ${events.length} mục Markdown, ${media.length} tư liệu. ${events.filter(e=>e.media.some(m=>m.type==='image')).length} mốc có ảnh. Video tư liệu mới phát từ thư mục local; các phim khác dùng liên kết nguồn.`)
