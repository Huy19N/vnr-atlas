import type {ReactNode} from 'react'

const nounPhrases=[
 'Chiến dịch Đường 9 – Nam Lào','Chiến dịch Huế – Đà Nẵng','Chiến dịch Hồ Chí Minh','Chiến dịch Tây Nguyên','Chiến dịch Xuân Lộc',
 'Thành cổ Quảng Trị','Trận Khe Sanh','Tết Mậu Thân','Chiến dịch Đường 14 – Phước Long','Buôn Ma Thuột','Đường 9 – Nam Lào','Dinh Độc Lập','Dinh Thống Nhất','Đại sứ quán Mỹ','Hội nghị Trung ương','Hiệp định Paris','Đường Trường Sơn','Tổng tiến công Tết Mậu Thân',
 'Đảng Lao động Việt Nam','Bộ Chính trị','Quân ủy Trung ương','Mặt trận Dân tộc Giải phóng miền Nam Việt Nam','Chính phủ Cách mạng lâm thời','Việt Nam Cộng hòa','Việt Nam Dân chủ Cộng hòa','Đảng Nhân dân Cách mạng Lào','Đảng Cộng sản Liên Xô','Mặt trận Dân tộc Giải phóng',
 'Hiệp định Paris về Việt Nam','Phong trào phản chiến','Phong trào dân quyền','Đường mòn Hồ Chí Minh','Tuyến vận tải Trường Sơn','Hội nghị Paris','Đại sứ quán Hoa Kỳ','Đài phát thanh Sài Gòn','Bộ Tổng tham mưu','Sân bay Tân Sơn Nhất',
 'Sông Thạch Hãn','Thung lũng A Sầu','Đồi A Bia','Đắk Tô – Tân Cảnh','Đường 14 – Phước Long','Chiến dịch Nguyễn Huệ','Chiến dịch Lam Sơn 719','Chiến dịch Apache Snow','Chiến dịch Linebacker II','Chiến dịch Pocket Money',
 'Quần đảo Hoàng Sa','Quần đảo Trường Sa','Đảo Thổ Chu','Cửa Việt','Hải Phòng','Khe Sanh','Làng Vây','Sơn Tây','Xuân Lộc','Phước Long','Phú Quốc','Khmer Đỏ','Campuchia Dân chủ'
]
const phraseSet=new Set(nounPhrases)
const matcher=new RegExp(`(${nounPhrases.sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')})`,'gu')

export default function EventTitle({children}:{children:string}){
 const parts=children.split(matcher)
 return <>{parts.map((part,index):ReactNode=>phraseSet.has(part)?<span className="keep-phrase" key={`${part}-${index}`}>{part}</span>:part)}</>
}
