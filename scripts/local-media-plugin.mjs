import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..')
export default function localMedia(){return{name:'local-history-video-library',configureServer(server){
 const inventory=JSON.parse(fs.readFileSync(path.join(root,'Kho_anh_video_Timeline_1968_1975/Du_lieu_doi_chieu/danh_muc_tu_lieu.json'),'utf8'))
 const videos=new Map(inventory.filter(x=>x.type==='video'&&x.status==='downloaded').map(x=>[x.aid,path.join(root,'Kho_anh_video_Timeline_1968_1975',x.local_file)]))
 server.middlewares.use('/__archive/',(req,res,next)=>{const id=decodeURIComponent((req.url||'').split('?')[0].replace(/^\//,'')),file=videos.get(id);if(!file)return next();const size=fs.statSync(file).size,range=req.headers.range;res.setHeader('Content-Type',file.endsWith('.mov')?'video/quicktime':'video/mp4');res.setHeader('Accept-Ranges','bytes');if(range){const m=/bytes=(\d+)-(\d*)/.exec(range);if(!m){res.statusCode=416;res.end();return}const start=Number(m[1]),end=m[2]?Math.min(Number(m[2]),size-1):size-1;if(start>=size||end<start){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return}res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${size}`,'Content-Length':end-start+1});if(req.method==='HEAD')res.end();else fs.createReadStream(file,{start,end}).pipe(res)}else{res.setHeader('Content-Length',size);if(req.method==='HEAD')res.end();else fs.createReadStream(file).pipe(res)}})
}}}
