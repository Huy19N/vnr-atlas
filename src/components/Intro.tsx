import {useEffect,useRef,useState} from 'react'
import {ArrowDown,ArrowRight,SkipForward,VolumeX} from 'lucide-react'
import type {HistoryEvent} from '../types'
import {introYearAt} from '../lib'
export default function Intro({events,onStart,reduced}:{events:HistoryEvent[];onStart:()=>void;reduced:boolean}){
 const [phase,setPhase]=useState<'idle'|'rewind'|'ready'>('idle'),[year,setYear]=useState(2026)
 const started=useRef(0)
 useEffect(()=>{if(phase!=='rewind')return;let raf=0;const animate=(now:number)=>{if(!started.current)started.current=now;const t=Math.min(1,(now-started.current)/(reduced?1100:12500));setYear(introYearAt(t));if(t<1)raf=requestAnimationFrame(animate);else setPhase('ready')};raf=requestAnimationFrame(animate);return()=>cancelAnimationFrame(raf)},[phase,reduced])
 const list=events.filter(e=>e.year===year),images=list.flatMap(e=>e.media.filter(m=>m.type==='image'&&m.local))
 const photo=images.find(m=>['K01','A0063','K07','K08','K09','A0068','A0156','K17'].includes(m.id))||images[0]
 const movie=year===1969?'/media/V003-preview.mp4':year===1971?'/media/V006-preview.mp4':undefined
 return <main className={`intro intro-${phase}`} onClick={e=>{if(phase==='idle'&&!(e.target as HTMLElement).closest('button'))setPhase('rewind')}}>
  <div className="intro-archive" aria-hidden="true">
   {photo&&<img key={year} className="intro-photo" src={photo.local} alt=""/>}
   {movie&&<video className="intro-film" key={movie} src={movie} autoPlay muted loop playsInline/>}
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
