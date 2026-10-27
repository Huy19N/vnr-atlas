import {useEffect,useMemo,useRef,useState} from 'react'
import {ArrowDown,ArrowRight,SkipForward,VolumeX} from 'lucide-react'
import type {HistoryEvent} from '../types'
import {introYearAt} from '../lib'
// Prefer larger original photographs, with a documented date in the displayed year.
const posterIds:Record<number,string>={1968:'A0110',1969:'A0045',1970:'A0020',1971:'K08',1972:'A0136',1973:'A0132',1974:'A0158',1975:'A0010'}
export default function Intro({events,onStart,reduced}:{events:HistoryEvent[];onStart:()=>void;reduced:boolean}){
 const [phase,setPhase]=useState<'idle'|'rewind'|'ready'>('idle'),[year,setYear]=useState(2026)
 const started=useRef(0)
 useEffect(()=>{if(phase!=='rewind')return;let raf=0;const animate=(now:number)=>{if(!started.current)started.current=now;const t=Math.min(1,(now-started.current)/(reduced?1100:12500));setYear(introYearAt(t));if(t<1)raf=requestAnimationFrame(animate);else setPhase('ready')};raf=requestAnimationFrame(animate);return()=>cancelAnimationFrame(raf)},[phase,reduced])
 const posters=useMemo(()=>Object.fromEntries(Object.entries(posterIds).map(([y,id])=>{
  const images=events.filter(e=>e.year===Number(y)).flatMap(e=>e.media.filter(m=>m.type==='image'&&m.local))
  return [y,images.find(m=>m.id===id)||images.find(m=>m.date.includes(y))]
 })),[events])
 useEffect(()=>{for(const photo of Object.values(posters)){if(photo?.local){const image=new Image();image.decoding='async';image.src=photo.local}}},[posters])
 const photo=posters[year]
 const movie=year===1969?'/media/V003-preview.mp4':year===1971?'/media/V006-preview.mp4':undefined
 return <main className={`intro intro-${phase}`} onClick={e=>{if(phase==='idle'&&!(e.target as HTMLElement).closest('button'))setPhase('rewind')}}>
  <div className="intro-archive" aria-hidden="true">
   {photo&&<img key={year} className="intro-photo" src={photo.local} decoding="async" fetchPriority="high" alt=""/>}
   {movie&&<video className="intro-film" key={movie} src={movie} poster={photo?.local} autoPlay muted loop playsInline/>}
   {(year===1975||year===1968)&&<img className={`intro-cutout ${year===1968?'intro-artillery':''}`} src={`/layers/${year===1975?'tank-1975':'artillery-1968'}-gpt.png`} alt=""/>}
  </div>
  <div className="intro-shade"/>
  <header className="intro-header"><span className="brand"><span className="brand-mark">V</span> VIỆT NAM <span className="brand-divider"/> HỒ SƠ LỊCH SỬ</span><button className="quiet-button" onClick={onStart}><span>Bỏ qua mở đầu</span><SkipForward size={15}/></button></header>
  <section className="intro-center">
   <p className="eyebrow intro-kicker">{phase==='idle'?'CÓ NHỮNG NĂM THÁNG KHÔNG BAO GIỜ LÙI XA':phase==='rewind'?'ĐI QUA THỜI GIAN. TRỞ VỀ LỊCH SỬ.':'VIỆT NAM & THẾ GIỚI'}</p>
   <button className="year-trigger" disabled={phase!=='idle'} onClick={()=>setPhase('rewind')} aria-label="Nhấn để quay ngược thời gian từ 2026 về 1968"><span className="intro-year">{year}</span></button>
   <div className="intro-under">
   {phase==='idle'?<button className="intro-cue" onClick={()=>setPhase('rewind')}><span className="click-ring"><ArrowDown size={17}/></span><span>CHẠM ĐỂ QUAY NGƯỢC THỜI GIAN</span></button>:phase==='ready'?<><p className="intro-ready-line">Một năm bước ngoặt. Một hành trình để hiểu.</p><button className="start-button" onClick={onStart}>Bắt đầu <ArrowRight size={19}/></button></>:<><div className="rewind-progress"><i style={{width:`${(2026-year)/58*100}%`}}/></div><span className="intro-range">2026 <span>TRỞ VỀ</span> 1968</span></>}
   </div>
  </section>
  <footer className="intro-footer"><span>1968 — 1975 <i/> TÁM NĂM TRONG DÒNG CHẢY LỊCH SỬ</span><span className="intro-footnote">{photo?`Tư liệu ${year} · Lớp ảnh tách nền bằng GPT có ghi nguồn`:'Ảnh và phim tư liệu trong phạm vi 1968–1975'}</span><VolumeX size={16} aria-label="Mặc định không phát âm thanh"/></footer>
 </main>
}
