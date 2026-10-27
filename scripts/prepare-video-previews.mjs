import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {spawnSync} from 'node:child_process'
import ffmpeg from 'ffmpeg-static'
const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),root=path.resolve(project,'../..')
const media=JSON.parse(await fs.readFile(path.join(root,'Kho_anh_video_Timeline_1968_1975/Du_lieu_doi_chieu/danh_muc_tu_lieu.json'),'utf8'))
for(const m of media.filter(m=>m.type==='video'&&m.status==='downloaded')){
 const output=path.join(project,'public/media',m.aid+'-preview.mp4')
 try{await fs.access(output);continue}catch{}
 const result=spawnSync(ffmpeg,['-hide_banner','-loglevel','error','-y','-i',path.join(root,'Kho_anh_video_Timeline_1968_1975',m.local_file),'-t','24','-vf','scale=960:-2','-c:v','libx264','-preset','fast','-crf','29','-an','-movflags','+faststart',output],{encoding:'utf8'})
 if(result.status!==0)throw Error(result.stderr||'Không tạo được '+m.aid)
 console.log('Đã tạo bản xem trước 24 giây:',m.aid)
}
