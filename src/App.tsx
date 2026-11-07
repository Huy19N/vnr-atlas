import {lazy,Suspense,useCallback,useEffect,useMemo,useRef,useState} from 'react'
import {ArrowRight,BookOpen,ChevronDown,Clock3,Focus,MoveUpRight,Search,Settings2} from 'lucide-react'
import Intro from './components/Intro'
import AtlasMap from './components/AtlasMap'
import Timeline from './components/Timeline'
import {categories,firstImage,sidesFor,yearNotes,YEARS} from './lib'
import type {HistoryData,HistoryEvent} from './types'
const EventModal=lazy(()=>import('./components/EventModal'))
const ArchivePanel=lazy(()=>import('./components/ArchivePanel'))
export default function App(){
 const [data,setData]=useState<HistoryData|null>(null),[error,setError]=useState(''),[entered,setEntered]=useState(false),[year,setYear]=useState(1968),[selectedId,setSelectedId]=useState<string|null>(null),[playing,setPlaying]=useState(false),[speed,setSpeed]=useState(1),[progress,setProgress]=useState(0),[world,setWorld]=useState(false),[flash,setFlash]=useState<number|null>(null),[detail,setDetail]=useState(false),[panel,setPanel]=useState<'index'|'about'|null>(null),[reduced,setReduced]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches),[controls,setControls]=useState(false)
 const resumeAfterModal=useRef(false),lastYear=useRef(1968)
 useEffect(()=>{const abort=new AbortController();fetch('/data/history.json',{signal:abort.signal}).then(r=>{if(!r.ok)throw Error('Không đọc được dữ liệu timeline.');return r.json()}).then(setData).catch(e=>{if(e.name!=='AbortError')setError(e.message)});return()=>abort.abort()},[])
 const events=useMemo(()=>data?.events.filter(e=>e.year===year)||[],[data,year])
 const active=useMemo(()=>data?.events.find(e=>e.id===selectedId)||null,[data,selectedId])
 const activeIndex=data?.events.findIndex(e=>e.id===selectedId)??-1
 const hero=useMemo(()=>events.find(e=>['E003','E054','E071','E087','E135','E143','E183','E223'].includes(e.id))||events.find(e=>firstImage(e)),[events])
 useEffect(()=>{if(entered&&(year!==lastYear.current)){setFlash(year);lastYear.current=year}},[year,entered])
 useEffect(()=>{if(flash===null)return;const t=setTimeout(()=>setFlash(null),reduced?350:1600);return()=>clearTimeout(t)},[flash,reduced])
 const select=useCallback((e:HistoryEvent)=>{setPlaying(false);setYear(e.year);setSelectedId(e.id);setProgress(e.progress);setWorld(false);setPanel(null)},[])
 const move=useCallback((delta:number,auto=false)=>{if(!data)return;const current=selectedId?data.events.findIndex(e=>e.id===selectedId):data.events.findIndex(e=>e.year===year)-(delta>0?1:-1);const next=data.events[Math.max(0,Math.min(data.events.length-1,current+delta))];if(!next)return;if(!auto)setPlaying(false);setYear(next.year);setSelectedId(next.id);setProgress(next.progress);setWorld(false);if(auto&&current>=data.events.length-1)setPlaying(false)},[data,selectedId,year])
 const play=useCallback(()=>{if(!selectedId&&events[0]){setSelectedId(events[0].id);setProgress(events[0].progress)}if(activeIndex===((data?.events.length||0)-1)&&!playing){setYear(1968);setSelectedId(data!.events[0].id);setProgress(0)}setPlaying(p=>!p)},[selectedId,events,activeIndex,data,playing])
 const openActive=useCallback(()=>{resumeAfterModal.current=playing;setPlaying(false);setDetail(true)},[playing])
 const closeDetail=useCallback(()=>{setDetail(false);if(resumeAfterModal.current){setPlaying(true);resumeAfterModal.current=false}},[])
 useEffect(()=>{if(!playing||!active||flash!==null||detail||panel)return;const duration=6500/speed,start=performance.now(),next=data?.events[activeIndex+1];const p2=next?.year===year?next.progress:1;let frame=0,lastPaint=0;const animate=(now:number)=>{const t=Math.min(1,(now-start)/duration);if(now-lastPaint>=33||t>=1){setProgress(active.progress+(p2-active.progress)*t);lastPaint=now}if(t>=1){move(1,true);return}frame=requestAnimationFrame(animate)};frame=requestAnimationFrame(animate);return()=>cancelAnimationFrame(frame)},[playing,active,activeIndex,data,speed,year,move,detail,panel,flash])
 useEffect(()=>{const listener=(e:KeyboardEvent)=>{if(!entered||detail||panel||['INPUT','SELECT','TEXTAREA','BUTTON','SUMMARY'].includes((e.target as HTMLElement).tagName))return;if(e.code==='Space'){e.preventDefault();play()}if(e.code==='ArrowRight'){e.preventDefault();move(1)}if(e.code==='ArrowLeft'){e.preventDefault();move(-1)}};window.addEventListener('keydown',listener);return()=>window.removeEventListener('keydown',listener)},[entered,detail,panel,play,move])
 const changeYear=useCallback((next:number)=>{const y=Math.max(1968,Math.min(1975,next));setPlaying(false);setSelectedId(null);setYear(y);setProgress(0);setWorld(false)},[])
 const changeYearBy=useCallback((delta:number)=>changeYear(year+delta),[changeYear,year])
 const changeSpeed=useCallback(()=>setSpeed(s=>s===1?2:s===2?4:s===4?8:1),[])
 if(error)return <main className="app-error"><h1>Chưa tải được hồ sơ.</h1><p>{error}</p><button className="start-button" onClick={()=>location.reload()}>Thử lại</button></main>
 if(!data)return <main className="app-loading"><span className="brand-mark">V</span><p>ĐANG MỞ HỒ SƠ LỊCH SỬ</p><div className="loading-line"/></main>
 if(!entered)return <Intro events={data.events} reduced={reduced} onStart={()=>{setEntered(true);setFlash(1968)}}/>
 return <main className={`atlas-app ${reduced?'reduced-motion':''}`}>
  <header className="app-header"><button className="brand brand-home" onClick={()=>{setPlaying(false);setEntered(false);setSelectedId(null);setYear(1968);setProgress(0)}} aria-label="Trở về mở đầu"><span className="brand-mark">V</span><span>VIỆT NAM<small>DÒNG CHẢY LỊCH SỬ</small></span></button><nav className="year-navigation" aria-label="Chọn năm">{YEARS.map(y=><button key={y} className={y===year?'active':''} onClick={()=>changeYear(y)} aria-current={y===year?'page':undefined}>{y}</button>)}</nav><div className="header-actions"><button className="header-action" aria-label="Tra cứu sự kiện" onClick={()=>{setPanel('index');setPlaying(false)}}><Search size={17}/><span>Tra cứu</span></button><button className="header-action" aria-label="Tư liệu và nguồn" onClick={()=>{setPanel('about');setPlaying(false)}}><BookOpen size={16}/><span>Tư liệu & nguồn</span></button><div className="settings-wrap"><button className="icon-button" aria-label="Cài đặt trải nghiệm" aria-expanded={controls} onClick={()=>setControls(p=>!p)}><Settings2 size={17}/></button>{controls&&<div className="settings-popover"><label><input type="checkbox" checked={reduced} onChange={e=>setReduced(e.target.checked)}/> Giảm chuyển động</label><p>Hạn chế hiệu ứng và chuyển cảnh. Không phát âm thanh tự động.</p></div>}</div></div></header>
  <section className={`explorer ${active?'has-active':''}`} aria-label="Khám phá lịch sử trên bản đồ">
   <AtlasMap events={events} active={active} year={year} onSelect={select} onOpen={openActive} world={world} setWorld={setWorld} reduced={reduced} speed={speed}/>
   <div className="year-editorial"><p className="eyebrow"><span className="editorial-line"/> HỒ SƠ NĂM</p><div className="editorial-year">{year}</div><h1>{yearNotes[year].title}</h1><p className="year-subtitle">{yearNotes[year].subtitle}</p><span className="year-event-count"><Clock3 size={12}/>{events.length} dấu ấn lịch sử</span>{!active&&<><button className="editorial-cta" onClick={play}>Bắt đầu dòng thời gian <ArrowRight size={16}/></button>{hero&&firstImage(hero)&&<button className="featured-archive" onClick={()=>select(hero)}><div className="featured-photo"><img src={firstImage(hero)!.local} alt={firstImage(hero)!.title}/><span className="archive-corner">{year}</span></div><span className="eyebrow">MỘT LÁT CẮT THỜI GIAN</span><strong>{hero.title}</strong><MoveUpRight size={15}/></button>}</>}</div>
   {!active&&<div className="explorer-guide"><Focus size={21} strokeWidth={1}/><p>Lịch sử, nhìn từ bản đồ.</p><span>Chọn một dấu chấm.<br/>Mở ra một câu chuyện.</span><ChevronDown size={17}/></div>}
   <div className="map-legend" aria-label="Chú giải bản đồ">{(active?[active.category]:['battle','diplomacy','solidarity'] as const).map(k=><span key={k}><i style={{background:categories[k].color}}/>{categories[k].label}</span>)}{active?.category==='battle'?<span className="route-legend"><i style={{background:'#eaae70'}}/>{sidesFor(active)[0]} <i style={{background:'#91b4d1'}}/>{sidesFor(active)[1]}</span>:null}</div>
  </section>
  <Timeline events={events} active={active} playing={playing} progress={progress} speed={speed} onPlay={play} onSelect={select} onSpeed={changeSpeed} onMove={move} onYear={changeYearBy}/>
  {flash!==null&&<div key={flash} className="year-flash" aria-live="polite"><strong>{flash}</strong><p>{yearNotes[flash].title}</p></div>}
  {detail&&active&&<Suspense fallback={<div className="overlay-loading" role="status">ĐANG MỞ HỒ SƠ SỰ KIỆN…</div>}><EventModal event={active} sources={data.sources} onClose={closeDetail} onMove={d=>move(d)}/></Suspense>}
  {panel&&<Suspense fallback={<div className="overlay-loading" role="status">ĐANG MỞ TƯ LIỆU…</div>}><ArchivePanel data={data} kind={panel} onClose={()=>setPanel(null)} onSelect={select}/></Suspense>}
 </main>
}
