import type {HistoryEvent} from '../types'

const ROOT='/soundeffect/'
const sound=(name:string)=>`${ROOT}${name}`

let countdownAudio:HTMLAudioElement|null=null
let introMusicAudio:HTMLAudioElement|null=null
let introOneShots:HTMLAudioElement[]=[]
let eventAudio:HTMLAudioElement[]=[]
const activeVfx=new Map<HTMLAudioElement,number>()
const volumeStorageKey='vnr-atlas-vfx-volume'
let vfxVolume=1
try{
 const stored=window.localStorage.getItem(volumeStorageKey)
 if(stored!==null){
  const saved=Number(stored)
  if(Number.isFinite(saved)&&saved>=0&&saved<=1)vfxVolume=saved
 }
}catch{}

function playAudio(src:string,volume:number,loop=false,playbackRate=1){
 const audio=new Audio(src)
 audio.preload='auto'
 audio.volume=volume
 audio.loop=loop
 audio.playbackRate=playbackRate
 void audio.play().catch(()=>{})
 return audio
}

function playVfxAudio(src:string,volume:number,playbackRate=1){
 const audio=playAudio(src,volume*vfxVolume,false,playbackRate)
 activeVfx.set(audio,volume)
 const forget=()=>activeVfx.delete(audio)
 audio.addEventListener('ended',forget,{once:true})
 audio.addEventListener('error',forget,{once:true})
 return audio
}

export function getVfxVolume(){return vfxVolume}

export function setVfxVolume(value:number){
 vfxVolume=Math.max(0,Math.min(1,value))
 try{window.localStorage.setItem(volumeStorageKey,String(vfxVolume))}catch{}
 for(const [audio,baseVolume] of activeVfx)audio.volume=baseVolume*vfxVolume
}

function playBombLayer(volume=.64){
 return [
  playVfxAudio(sound('bom_1.mp3'),volume,1.04),
  playVfxAudio(sound('bom_2.mp3'),volume*.82,1.04),
 ]
}

function playIntroAudio(src:string,volume:number,playbackRate=1){
 const audio=playVfxAudio(src,volume,playbackRate)
 introOneShots.push(audio)
 audio.addEventListener('ended',()=>{introOneShots=introOneShots.filter(item=>item!==audio)},{once:true})
}

export function startIntroCountdown(){
 stopIntroCountdown()
 countdownAudio=playAudio(sound('sound-effect-count-number.m4a'),.28,true,1.4)
}

export function setIntroCountdownRate(rate:number){
 if(countdownAudio)countdownAudio.playbackRate=Math.max(.45,Math.min(1.5,rate))
}

export function stopIntroCountdown(){
 if(!countdownAudio)return
 const audio=countdownAudio
 countdownAudio=null
 audio.pause()
 audio.currentTime=0
}

export function playIntroBattleOnce(){
 playIntroAudio(sound('gun_ak47.mp3'),.36,1.08)
 introOneShots.push(...playBombLayer(.41))
}

export function playIntroBombsOnce(){
 introOneShots.push(...playBombLayer(.44))
}

export function playIntroMusicOnce(){
 if(introMusicAudio&&!introMusicAudio.ended)return
 introMusicAudio=playAudio(sound('music_sound.m4a'),.58)
 introMusicAudio.addEventListener('ended',()=>{introMusicAudio=null},{once:true})
}

export function stopEventSounds(){
 for(const audio of eventAudio){audio.pause();audio.currentTime=0;activeVfx.delete(audio)}
 eventAudio=[]
}

export function playEventSounds(event:HistoryEvent){
 stopEventSounds()
 const text=`${event.title} ${event.description}`.toLocaleLowerCase('vi')
 const bombing=event.category==='airstrike'||/(ném bom|oanh tạc|không kích|thả bom|rải bom|bombing|airstrike)/i.test(text)
 const battlefield=event.category==='battle'
 if(!bombing&&!battlefield)return
 if(battlefield)eventAudio.push(playVfxAudio(sound('gun_ak47.mp3'),.34,1.08))
 if(bombing||battlefield)eventAudio.push(...playBombLayer(battlefield ? .42 : .5))
}
