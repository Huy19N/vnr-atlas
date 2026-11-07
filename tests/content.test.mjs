import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {categoryFor,placeFor} from '../scripts/geography.mjs'
import {feature} from 'topojson-client'
import {mapFeatureKey} from '../src/map-keys.ts'
const project=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const data=JSON.parse(fs.readFileSync(path.join(project,'public/data/history.json'),'utf8'))
test('Preserves all 238 events and every cited source',()=>{
 assert.equal(data.events.length,238);assert.equal(new Set(data.events.map(e=>e.id)).size,238)
 for(const e of data.events){assert.ok(e.description.length>30,e.id);assert.ok(e.sourceIds.length,e.id);for(const id of e.sourceIds)assert.ok(data.sources[id]?.URL,e.id+' '+id)}
})
test('Events remain chronological and annual-only events never become a fictitious month',()=>{
 let previous=0;for(const e of data.events){const value=e.year*10000+e.month*100+e.day;assert.ok(value>=previous,e.id);previous=value;assert.ok(e.month>=1&&e.month<=13);assert.ok(e.progress>=0&&e.progress<=1);if(e.month===13){assert.equal(e.day,0);assert.equal(e.progress,.985)}}
})
test('Every local photo and video file or video preview exists',()=>{
 const checked=new Set();for(const e of data.events)for(const m of e.media){if(checked.has(m.id))continue;checked.add(m.id);if(m.local){assert.ok(fs.existsSync(path.join(project,'public',decodeURI(m.local))),m.id);if(m.type==='video')assert.equal(m.status,'downloaded')}if(m.type==='video'&&m.status==='downloaded'&&!m.local)assert.ok(fs.statSync(path.join(project,'public/media',m.id+'-preview.mp4')).size>1000)}
 assert.equal(checked.size,187)
})
test('User documentary videos are attached to the requested events with the supplied YouTube source',()=>{
 const manifest=JSON.parse(fs.readFileSync(path.join(project,'scripts/documentary-videos.json'),'utf8')),source='https://www.youtube.com/watch?v=pcVky6f4xn4&list=WL&index=11'
 assert.equal(manifest.length,13)
 for(const item of manifest){const event=data.events.find(e=>e.id===item.eventId),media=event?.media.find(m=>m.id===item.id);assert.ok(media,item.id);assert.equal(media.type,'video');assert.equal(media.source,source);assert.equal(media.url,source);assert.equal(media.local,encodeURI('/media/video_tài_liệu/'+item.filename));assert.ok(fs.existsSync(path.join(project,'public',decodeURI(media.local))),item.filename)}
})
test('Geographic anchors are valid, and international events are not all placed in Vietnam',()=>{
 const foreign=data.events.filter(e=>!['Việt Nam','Biển Đông'].includes(e.place.country));assert.ok(foreign.length>50)
 for(const e of data.events){assert.ok(e.place.coordinates.every(Number.isFinite),e.id);assert.ok(Math.abs(e.place.coordinates[0])<=180,e.id);assert.ok(Math.abs(e.place.coordinates[1])<=90,e.id);assert.ok(e.locationNote.includes('minh họa'))}
 assert.equal(placeFor({eid:'E105'}).country,'Canada');assert.equal(placeFor({eid:'E146'}).country,'Việt Nam');assert.equal(placeFor({eid:'E150'}).country,'Việt Nam')
})
test('Civilian massacres and bombing cessation are not animated as two-sided active battles',()=>{
 assert.equal(categoryFor({eid:'E009',title:''}),'humanitarian');assert.equal(categoryFor({eid:'E225',title:''}),'humanitarian');assert.equal(categoryFor({eid:'E137',title:''}),'diplomacy');assert.equal(categoryFor({eid:'E157',title:''}),'diplomacy')
 assert.equal(data.events.find(e=>e.id==='E211').routes.length,0)
})
test('Every year contains all monthly positions and the monthly rail has non-overlapping ordered event positions',()=>{
 for(let year=1968;year<=1975;year++){const events=data.events.filter(e=>e.year===year&&e.month<13);let p=-1;for(const e of events){assert.ok(e.progress>p,e.id);assert.equal(Math.floor(e.progress*12)+1,e.month,e.id);p=e.progress}}
})
test('Every Natural Earth geographic shape keeps a unique stable rendering key even without an ISO ID',()=>{
 const topology=JSON.parse(fs.readFileSync(path.join(project,'public/data/world.json'),'utf8'))
 const features=feature(topology,topology.objects.countries).features
 assert.ok(features.length>200)
 const keys=features.map(mapFeatureKey)
 assert.equal(new Set(keys).size,features.length)
 assert.equal(features.filter(f=>f.id==='704').length,1)
})
