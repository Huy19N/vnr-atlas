import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {spawnSync} from 'node:child_process'
import ffmpeg from 'ffmpeg-static'

const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const videoDir=path.join(project,'public/media/video_tài_liệu')
const backupDir=path.resolve(project,'../..','_source_media_backup/vnr-atlas/video_tai_lieu')
if(!ffmpeg)throw new Error('Không tìm thấy ffmpeg-static.')
await fs.mkdir(backupDir,{recursive:true})
const videos=(await fs.readdir(videoDir,{withFileTypes:true})).filter(entry=>entry.isFile()&&entry.name.toLowerCase().endsWith('.mp4')).map(entry=>entry.name).sort()
if(!videos.length)throw new Error('Không tìm thấy video tư liệu trong public/media/video_tài_liệu.')

for(const name of videos){
 const source=path.join(videoDir,name),backup=path.join(backupDir,name),temporary=path.join(videoDir,`.${name}.web.mp4`)
 const original=await fs.stat(source)
 try{
  const stored=await fs.stat(backup)
  if(stored.size!==original.size){console.log(`${name}: bỏ qua vì đã có bản gốc sao lưu riêng.`);continue}
 }catch(error){
  if(error?.code!=='ENOENT')throw error
  await fs.copyFile(source,backup)
 }
 const result=spawnSync(ffmpeg,['-hide_banner','-loglevel','error','-y','-i',source,'-map','0:v:0','-map','0:a?','-map_metadata','0','-c:v','libx264','-preset','medium','-crf','22','-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-movflags','+faststart','-threads','2',temporary],{encoding:'utf8',maxBuffer:4*1024*1024})
 if(result.status!==0){await fs.rm(temporary,{force:true});throw new Error(`Không mã hóa được ${name}: ${result.stderr||result.error?.message||'ffmpeg lỗi'}`)}
 const optimized=await fs.stat(temporary)
 if(optimized.size===0)throw new Error(`Video đã mã hóa bị rỗng: ${name}`)
 const validation=spawnSync(ffmpeg,['-hide_banner','-loglevel','error','-i',temporary,'-t','0.5','-f','null','-'],{encoding:'utf8',maxBuffer:1024*1024})
 if(validation.status!==0){await fs.rm(temporary,{force:true});throw new Error(`Không giải mã thử được ${name}: ${validation.stderr||'ffmpeg lỗi'}`)}
 await fs.copyFile(temporary,source)
 await fs.rm(temporary,{force:true})
 console.log(`${name}: ${(original.size/1024/1024).toFixed(1)} → ${(optimized.size/1024/1024).toFixed(1)} MiB (${Math.round((1-optimized.size/original.size)*100)}% nhẹ hơn)`)
}
console.log(`Đã giữ video gốc tại ${backupDir}`)
