import fs from 'node:fs'
const events=JSON.parse(fs.readFileSync('../../tmp_research/media_timeline/events.json','utf8'))
for(const e of events.filter(e=>['E105','E128','E134','E138','E146','E150','E156','E157','E175','E176','E180','E193','E204'].includes(e.eid)))console.log(e.eid,e.label,e.text)
