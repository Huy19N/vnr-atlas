export type Category = 'battle'|'airstrike'|'politics'|'diplomacy'|'solidarity'|'logistics'|'humanitarian'
export type Media = {id:string;type:'image'|'video';title:string;date:string;description:string;kind:string;rights:string;source:string;url:string;local?:string;status:string;width?:number;height?:number;duration?:number;origin:string;eventIds:string[]}
export type Place = {name:string;coordinates:[number,number];precision:string;country:string}
export type Route = {name:string;side:'revolution'|'allied'|'supply';points:[number,number][]}
export type HistoryEvent = {id:string;year:number;month:number;day:number;dateLabel:string;title:string;description:string;sourceIds:string[];category:Category;place:Place;media:Media[];routes:Route[];locationNote:string;progress:number}
export type Source = {ID?:string;Title:string;URL:string;Note?:string;Kind?:string}
export type HistoryData = {events:HistoryEvent[];sources:Record<string,Source>;meta:{eventCount:number;mediaCount:number;generated:string;timelineHash:string;title:string}}
export type Camera = {x:number;y:number;scale:number}
