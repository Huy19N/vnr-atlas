import {ChevronLeft,ChevronRight,Pause,Play,SkipForward} from 'lucide-react'
import {memo,useEffect,useMemo,useState} from 'react'
import type {HistoryEvent} from '../types'
import {categories} from '../lib'
import EventTitle from './EventTitle'
const months=Array.from({length:12},(_,i)=>i+1)
function Timeline({events,active,playing,progress,speed,onPlay,onSelect,onSpeed,onMove,onYear}:{events:HistoryEvent[];active:HistoryEvent|null;playing:boolean;progress:number;speed:number;onPlay:()=>void;onSelect:(e:HistoryEvent)=>void;onSpeed:()=>void;onMove:(d:number)=>void;onYear:(d:number)=>void}){
 const annual=useMemo(()=>events.filter(e=>e.month===13),[events])
 const [monthOpen,setMonthOpen]=useState<number|null>(null)
 const byMonth=useMemo(()=>{const groups=new Map<number,HistoryEvent[]>();for(const event of events){if(event.month>=13)continue;const group=groups.get(event.month)||[];group.push(event);groups.set(event.month,group)}return groups},[events])
 const eventDots=useMemo(()=>[...byMonth.values()].flatMap(siblings=>siblings.map((e,index)=>{const lane=index%3;return <button key={e.id} className={`timeline-dot ${e.id===active?.id?'selected':''}`} style={{left:`${e.progress*100}%`,top:70+lane*13,color:categories[e.category].color}} aria-label={`${e.dateLabel}: ${e.title}`} aria-current={e.id===active?.id?'step':undefined} onClick={()=>{setMonthOpen(null);onSelect(e)}}><i/><span className="dot-tooltip" style={e.progress<.18?{left:0,transform:'none'}:e.progress>.82?{left:'auto',right:0,transform:'none'}:undefined}><em>{e.dateLabel} · {e.year}</em><strong><EventTitle>{e.title}</EventTitle></strong><small>{categories[e.category].label}</small></span></button>})),[byMonth,active?.id,onSelect])
 const monthEvents=useMemo(()=>monthOpen===null?[]:byMonth.get(monthOpen)||[],[byMonth,monthOpen])
 useEffect(()=>setMonthOpen(null),[events[0]?.year])
 useEffect(()=>{if(monthOpen===null)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setMonthOpen(null)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[monthOpen])
 return <footer className="timeline-panel">
  <div className="timeline-topline"><div className="eyebrow"><span className="live-dot"/> DÒNG THỜI GIAN <span className="timeline-count">{events.length} dấu ấn</span></div><span className="timeline-help">Di chuột để xem tên · Chọn mốc để khám phá</span><div className="timeline-year-nav"><button className="icon-button" onClick={()=>onYear(-1)} aria-label="Năm trước"><ChevronLeft size={15}/></button><span>{events[0]?.year}</span><button className="icon-button" onClick={()=>onYear(1)} aria-label="Năm tiếp theo"><ChevronRight size={15}/></button></div></div>
  <div className="timeline-scroll"><div className="timeline-track" role="group" aria-label="Các sự kiện theo tháng">
   <div className="track-line"/><div className="track-progress" style={{width:`${progress*100}%`}}/>
   {months.map(month=><div className={`month-cell ${active?.month===month?'active-month':''}`} key={month}><button className="month-heading" onClick={()=>setMonthOpen(m=>m===month?null:month)} aria-expanded={monthOpen===month} aria-label={`Xem danh sách sự kiện tháng ${month}`}><span className="month-number">{String(month).padStart(2,'0')}</span><span className="month-label">THÁNG {month}</span></button><i className="month-notch"/></div>)}
   {eventDots}
  </div></div>
  {monthOpen!==null&&<div className="month-event-list" style={{left:`clamp(14px, ${(monthOpen-1)/12*100}%, calc(100% - 320px))`}}><header><b>Tháng {String(monthOpen).padStart(2,'0')} / {events[0]?.year}</b><button onClick={()=>setMonthOpen(null)} aria-label="Đóng danh sách tháng">×</button></header>{monthEvents.map(e=><button key={e.id} onClick={()=>{onSelect(e);setMonthOpen(null)}}><small>{e.dateLabel}</small><span><EventTitle>{e.title}</EventTitle></span></button>)}{monthEvents.length===0&&<p>Chưa có mốc được đối chiếu cho tháng này trong niên biểu.</p>}</div>}
  <div className="timeline-bottom"><div className="playback"><button className="transport-step" aria-label="Sự kiện trước" onClick={()=>onMove(-1)}><ChevronLeft size={18}/></button><button className={`play-button ${playing?'is-playing':''}`} onClick={onPlay} aria-label={playing?'Tạm dừng dòng thời gian':'Bắt đầu dòng thời gian'}>{playing?<Pause size={16} fill="currentColor"/>:<Play size={16} fill="currentColor"/>}<span>{playing?'Tạm dừng':active?'Tiếp tục':'Bắt đầu'}</span></button><button className="transport-step" aria-label="Sự kiện tiếp theo" onClick={()=>onMove(1)}><SkipForward size={17}/></button><button className="speed-button" onClick={onSpeed} aria-label="Đổi tốc độ phát">{speed}×</button></div><span className="timeline-current">{active?active.title:'Từng dấu chấm là một câu chuyện. Bắt đầu từ đây.'}</span>{annual.length>0&&<details className="annual-events"><summary>Trong năm, chưa rõ tháng <span>{annual.length}</span></summary><div>{annual.map(e=><button key={e.id} onClick={()=>onSelect(e)}>{e.title}</button>)}</div></details>}<span className="keyboard-hint">SPACE <i/> PHÁT / DỪNG</span></div>
 </footer>
}
export default memo(Timeline)
