import type {HistoryEvent} from '../types'

const ROOT='/soundeffect/'
const sound=(name:string)=>`${ROOT}${name}`

let countdownAudio:HTMLAudioElement|null=null
let introMusicAudio:HTMLAudioElement|null=null
let introOneShots:HTMLAudioElement[]=[]
let eventAudio:HTMLAudioElement[]=[]

function playAudio(src:string,volume:number,loop=false,playbackRate=1){
 const audio=new Audio(src)
 audio.preload='auto'
 audio.volume=volume
 audio.loop=loop
 audio.playbackRate=playbackRate
 void audio.play().catch(()=>{})
 return audio
}

function playBombLayer(volume=.64){
 return [
  playAudio(sound('bom_1.mp3'),volume,false,1.04),
  playAudio(sound('bom_2.mp3'),volume*.82,false,1.04),
 ]
}

function playIntroAudio(src:string,volume:number,playbackRate=1){
 const audio=playAudio(src,volume,false,playbackRate)
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
 introOneShots.push(...playBombLayer(.52))
}

export function playIntroBombsOnce(){
 introOneShots.push(...playBombLayer(.56))
}

export function playIntroMusicOnce(){
 if(introMusicAudio&&!introMusicAudio.ended)return
 introMusicAudio=playAudio(sound('music_sound.m4a'),.58)
 introMusicAudio.addEventListener('ended',()=>{introMusicAudio=null},{once:true})
}

export function stopEventSounds(){
 for(const audio of eventAudio){audio.pause();audio.currentTime=0}
 eventAudio=[]
}

export function playEventSounds(event:HistoryEvent){
 stopEventSounds()
 const text=`${event.title} ${event.description}`.toLocaleLowerCase('vi')
 const bombing=event.category==='airstrike'||/(ném bom|oanh tạc|không kích|thả bom|rải bom|bombing|airstrike)/i.test(text)
 const battlefield=event.category==='battle'
 if(!bombing&&!battlefield)return
 if(battlefield)eventAudio.push(playAudio(sound('gun_ak47.mp3'),.34,false,1.08))
 if(bombing||battlefield)eventAudio.push(...playBombLayer(battlefield ? .54 : .66))
}
