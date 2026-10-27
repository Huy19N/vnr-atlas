# Lịch sử Việt Nam giai đoạn 1968–1975

## Hồ sơ nghiên cứu và bản lưu phiên làm việc

**Ngày biên soạn và đối chiếu nguồn:** 26/10/2026, múi giờ Việt Nam.  
**Phạm vi:** 01/01/1968–31/12/1975; sự kiện trước và sau chỉ được nhắc để giải thích bối cảnh.  
**Đầu vào:** toàn bộ tệp có trong thư mục `D:\FPT\Kì 9\VNR` khi bắt đầu phiên, bao gồm gói `Lich_su_Viet_Nam_1968_1975_Goi_nghien_cuu_anh_tu_lieu`.  
**Mục đích:** xây dựng một niên biểu có dẫn nguồn, giải thích cơ chế dẫn đến kết quả chiến tranh, tách riêng hoạt động của Đảng và đặt các diễn biến Việt Nam trong quan hệ quốc tế thời Chiến tranh Lạnh.

Đây là hồ sơ khảo cứu mở rộng có chọn lọc, **không phải tuyên bố đã tìm được mọi sự kiện của tám năm chiến tranh**. Những chi tiết địa phương chưa có bằng chứng đủ rõ không được điền bằng suy đoán. Cụm “ít được nhắc đến” trong tài liệu nghĩa là ít xuất hiện trong niên biểu phổ thông hoặc còn thiếu trong bộ tệp đầu vào, không hàm ý có một bí mật bị cố tình che giấu.

Nhận định tổng hợp của người biên soạn: thắng lợi của phía cách mạng năm 1975 hình thành từ sự kết hợp giữa tổ chức chính trị, chiến đấu và huy động trong nước, mạng hậu cần phát triển liên tục, viện trợ quốc tế, đấu tranh ngoại giao, những giới hạn chính trị của Hoa Kỳ và các quyết định chiến dịch của cả hai phía. Không yếu tố riêng lẻ nào giải thích đầy đủ toàn bộ chuỗi diễn biến. Các phần dưới cung cấp bằng chứng để đánh giá nhận định này.

### Cách tra cứu

- **Phần 1–2:** những gì đã đọc, phương pháp và tên gọi lịch sử.
- **Phần 3:** niên biểu từng năm; quân sự, ngoại giao, xã hội và quốc tế được đặt cạnh nhau.
- **Phần 4:** nhánh riêng về Đảng Lao động Việt Nam, tiền thân trực tiếp của tên gọi Đảng Cộng sản Việt Nam hiện nay.
- **Phần 5–6:** cách đọc các trận đánh và những cơ chế ít nổi bật trên bản đồ chiến sự.
- **Phần 7–8:** các nước, tổ chức và người dân nước ngoài; viện trợ, can thiệp, phản chiến và cứu trợ.
- **Phần 9–11:** các vấn đề tranh luận, điểm sửa so với hồ sơ cũ và nhật ký phiên nghiên cứu.
- **Phần 12:** danh mục nguồn. Mỗi mã nguồn trong nội dung mở trực tiếp tài liệu tương ứng.

## 1. Kết quả quét và đọc bộ tệp đầu vào

### 1.1. Danh mục kiểm kê

Ký hiệu **G/** dưới đây là thư mục `Lich_su_Viet_Nam_1968_1975_Goi_nghien_cuu_anh_tu_lieu/` nằm trong VNR. Mã kiểm tra là 12 ký tự đầu của SHA-256, chỉ để nhận diện phiên bản; bản kiểm kê kỹ thuật đầy đủ được giữ trong `tmp_research/inventory.json`.

| Tệp đầu vào | Dung lượng byte | SHA-256 rút gọn | Kết quả kiểm tra |
|---|---:|---|---|
| `Danh_muc_nguon_anh_lich_su_1968_1975.txt` | 9.496 | `0927c76abe97` | Đọc danh mục 17 tư liệu ảnh và xuất xứ được ghi trong tệp. |
| `Lich_su_Viet_Nam_1968_1975_Nghien_cuu_anh_tu_lieu.docx` | 126.034 | `abbe5d31683a` | Trích xuất toàn bộ văn bản và kiểm tra quan hệ ảnh. |
| `Lich_su_Viet_Nam_1968_1975_Nghien_cuu_anh_tu_lieu.pdf` | 737.752 | `63bf058d1cfd` | Đọc văn bản 48 trang; dựng ảnh thu nhỏ toàn bộ trang để kiểm tra cấu trúc. |
| `Thu_vien_anh_lich_su_1968_1975.html` | 26.455 | `42fd505c7085` | Đọc nội dung, chú thích và các liên kết ảnh ngoài. |
| `G/Danh_muc_nguon_anh_lich_su_1968_1975.txt` | 9.496 | `0927c76abe97` | Trùng hoàn toàn bản ở VNR. |
| `G/Danh_muc_nguon_va_duong_dan_noi_dung.txt` | 11.262 | `f6e69e316b80` | Đọc hệ thống mã nguồn Việt Nam, Hoa Kỳ và lưu trữ đại học. |
| `G/Lich_su_Viet_Nam_1968_1975_Nghien_cuu_anh_tu_lieu.docx` | 126.034 | `abbe5d31683a` | Trùng hoàn toàn bản DOCX ở VNR. |
| `G/Lich_su_Viet_Nam_1968_1975_Nghien_cuu_anh_tu_lieu.pdf` | 737.752 | `5f3da5b72fb1` | Khác mã byte với PDF ở VNR, nhưng văn bản trích xuất từ toàn bộ 48 trang giống hệt. |
| `G/Nien_bieu_hang_ngay_1968_1975.csv` | 577.648 | `22eb2c248a1f` | Đọc và phân loại toàn bộ 2.922 bản ghi ngày. |
| `G/README_Goi_nghien_cuu_anh_tu_lieu.txt` | 1.858 | `963be97935d5` | Đọc hướng dẫn, phạm vi và ghi chú quyền ảnh. |
| `G/Thu_vien_anh_lich_su_1968_1975.html` | 26.455 | `42fd505c7085` | Trùng hoàn toàn bản HTML ở VNR. |

Có **11 tệp đầu vào, 8 nội dung byte khác nhau**; trong đó hai PDF có cùng nội dung văn bản. Không phát hiện thêm tệp đầu vào nào khác trong lần quét đệ quy ban đầu. Các tệp trong `tmp_research/` và bản Markdown này được tạo sau khi quét nên không được tính vào 11 tệp.

### 1.2. Nội dung thực sự của niên biểu và bộ ảnh

CSV có 2.922 ngày, đúng với tám năm 1968–1975 gồm hai năm nhuận 1968 và 1972. Có **108 dòng được gắn `YES`**, còn **2.814 dòng là mục chờ `NO`**. Một dòng `YES` có thể gộp nhiều sự kiện, nên không đồng nhất 108 dòng với 108 sự kiện riêng biệt. Kiểm tra bằng chương trình xác nhận toàn bộ tiêu đề và nội dung chi tiết của các dòng `YES` đều đã có trong bản DOCX sau khi chuẩn hóa khoảng trắng. Vì vậy CSV không cung cấp thêm một kho diễn biến độc lập ngoài báo cáo cũ.

DOCX có **17 quan hệ ảnh liên kết ra ngoài**, cùng **một ảnh nội bộ làm khung thông báo**. Bản PDF hiển thị các khung thông báo ở phần ảnh thay vì nhúng đầy đủ 17 ảnh gốc. HTML cũng tham chiếu ảnh trên máy chủ ngoài. Do đó, đã đọc toàn bộ tệp cục bộ và các chú thích, nhưng **không coi bộ tệp này là bộ sưu tập 17 ảnh gốc đã được lưu ngoại tuyến hoặc đã thẩm định lại từng âm bản**. Việc một chú thích ghi “ảnh tư liệu” không tự chứng minh thời điểm chụp, quyền tái sử dụng hay mọi chi tiết của sự kiện.

### 1.3. Giá trị và giới hạn của bộ tài liệu cũ

Bộ cũ có cấu trúc tốt để định hướng: quân sự, ngoại giao, hậu cần, vai trò Đảng và bối cảnh quốc tế. Tuy nhiên, nhiều mục dùng nguồn tổng thuật rất rộng cho một ngày cụ thể; phần diễn biến và bảng niên biểu lặp lại đáng kể. Việc mở rộng trong phiên này tập trung vào bổ sung bằng chứng và sửa phạm vi dẫn nguồn, không cộng thêm các ngày trống để làm tăng cảm giác đầy đủ.

## 2. Phương pháp và tên gọi cần phân biệt

### 2.1. Chuẩn bằng chứng

1. **Văn kiện và hồ sơ đương thời:** nghị quyết, điện chỉ đạo, biên bản ngoại giao, văn bản hiệp định. Chúng cho biết chủ thể đã quyết định hoặc báo cáo điều gì; không tự động chứng minh mọi lời đánh giá trong đó là chính xác.
2. **Lưu trữ, bảo tàng, quân sử chính thức:** có ưu thế về hồ sơ và cơ cấu đơn vị, nhưng thường mang góc nhìn của cơ quan hoặc phía tham chiến.
3. **Nghiên cứu dựa trên hồ sơ nhiều nước:** giúp đọc quan hệ đồng minh và những điều nguồn một phía bỏ qua. Tên tác giả và nơi xuất bản được ghi rõ.
4. **Nhân chứng, hồi ức, báo chí kỷ niệm:** hữu ích cho chi tiết con người và cách tổ chức thực tế; không dùng riêng để chốt số thương vong hoặc động cơ bí mật của cả một nhà nước.

Trong hồ sơ này, “**phân tích**” là nhận định do người biên soạn rút ra từ những sự kiện đã dẫn nguồn; “**theo nguồn X**” là thông tin giữ nguyên sự quy thuộc. Khi không có cơ sở lượng hóa ảnh hưởng, chỉ mô tả cơ chế có thể quan sát, không gán một tỉ lệ đóng góp tưởng tượng cho một sự kiện.

### 2.2. Các chủ thể

| Tên gọi | Cách hiểu trong giai đoạn này |
|---|---|
| Đảng Lao động Việt Nam | Tên chính thức của Đảng trong 1968–1975. Đại hội IV tháng 12/1976 quyết định dùng tên Đảng Cộng sản Việt Nam. Lê Duẩn giữ chức Bí thư thứ nhất trong thời kỳ đang nghiên cứu. [S12] [S85] |
| Việt Nam Dân chủ Cộng hòa, VNDCCH | Nhà nước ở miền Bắc; tham chiến, tổ chức hậu phương và có đoàn đàm phán riêng. |
| Mặt trận Dân tộc Giải phóng miền Nam | Mặt trận chính trị của phía cách mạng miền Nam; không đồng nghĩa về tổ chức với mọi cơ quan nhà nước, đảng và quân đội ở miền Bắc. |
| Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam, CPCMLT hoặc PRG | Thành lập tháng 6/1969; có đoàn ngoại giao và ký Hiệp định Paris. Huỳnh Tấn Phát là Chủ tịch Chính phủ, Nguyễn Thị Bình là Bộ trưởng Ngoại giao. [S13] [S14] |
| Quân đội nhân dân Việt Nam; Quân Giải phóng miền Nam | Tên gọi cần đọc theo văn kiện, chiến trường và cơ cấu chỉ huy cụ thể; không quy mọi đơn vị thành lực lượng địa phương hoặc mọi đơn vị thành quân từ miền Bắc. |
| Việt Nam Cộng hòa, VNCH | Nhà nước tại miền Nam được Hoa Kỳ và nhiều đồng minh hỗ trợ; có quân lực, thiết chế và lợi ích riêng, đôi khi bất đồng với Washington. |
| Hoa Kỳ | Đồng thời phải phân biệt tổng thống, chính phủ, quân đội, Quốc hội, báo chí và người dân. Chính sách của Nhà Trắng không đại diện cho mọi người Mỹ. |

Trong sử liệu Việt Nam, giai đoạn này nằm trong kháng chiến chống Mỹ, cứu nước. Nguồn nước ngoài thường dùng Vietnam War hoặc Second Indochina War. Báo cáo tôn trọng các danh xưng lịch sử, đồng thời ghi nhận xã hội Việt Nam có những lựa chọn chính trị khác nhau và có dân thường chịu thiệt hại ở cả hai phía.

## 3. Niên biểu gắn Việt Nam với diễn biến quốc tế

### 3.1. Năm 1968 — Mậu Thân, tổn thất lớn và bước ngoặt chính trị

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| Tháng 1 | Trung ương 14 phê chuẩn tổng công kích kết hợp tổng khởi nghĩa, hướng tới thay đổi quyết định cục diện. Mục tiêu dự kiến khác với kết quả thực tế. [S06] |
| 21/1 và những tháng tiếp theo | Khe Sanh trở thành mặt trận bao vây lớn, thu hút lực lượng và hỏa lực Mỹ; mục tiêu quân sự và nghi binh cần được xét cùng nhau. [S02] |
| Đêm 29 rạng 30/1, rồi đêm 30 rạng 31/1 | Tiến công lan rộng tới đô thị, căn cứ và đầu mối chỉ huy. Thời điểm nổ súng và mức độ bất ngờ khác nhau theo địa bàn. [S01] |
| 31/1, Sài Gòn | Biệt động đánh nhiều mục tiêu, gồm khuôn viên Đại sứ quán Mỹ; không chiếm được tòa nhà chính. [S01] |
| Cuối tháng 1–tháng 2, Huế | Giao tranh đô thị kéo dài; quân Mỹ và VNCH giành lại thành phố. Dân thường chịu chết chóc, phá hủy và các vụ bắt giữ, hành quyết được ghi nhận trong nguồn quân sử Mỹ; không gộp mọi người chết vào một nguyên nhân. [S18] |
| Đêm 6 rạng 7/2 | Trận Làng Vây có xe tăng phối hợp bộ binh tiến công cứ điểm. Việc đưa xe tăng tới chiến trường này cho thấy năng lực vận chuyển, giữ bí mật và hiệp đồng đã thay đổi trước khi hình thức tác chiến quy ước trở nên áp đảo. [S17] |
| 27/2 | Cronkite bình luận về thế bế tắc, biểu hiện khủng hoảng niềm tin tại Mỹ; không coi riêng chương trình này quyết định toàn bộ chính sách Johnson. [S02] |
| 16/3, Sơn Mỹ–Mỹ Lai | Binh sĩ Mỹ sát hại dân thường. Vụ việc bị che giấu rồi phơi bày; điều tra về sau cho thấy vấn đề báo cáo, trách nhiệm chỉ huy và văn hóa đơn vị, vượt khỏi trách nhiệm một cá nhân. [S19] |
| 31/3 | Johnson hạn chế ném bom miền Bắc và không tái tranh cử, giữa tác động Mậu Thân cùng áp lực quân sự, tài chính và chính trị. [S01] |
| Tháng 5–6 | Đợt tiến công tiếp theo duy trì sức ép, nhưng gây thêm tổn thất cho lực lượng cách mạng. Không nên kể Mậu Thân chỉ như một đêm Tết rồi chuyển thẳng sang Paris. [S01] |
| 13/5, Paris | Phiên toàn thể chính thức đầu tiên giữa VNDCCH và Hoa Kỳ họp tại Hôtel Majestic. Xuân Thủy và Averell Harriman nêu các lập trường còn cách xa nhau; mở đàm phán chưa đồng nghĩa đã thỏa thuận rút quân. [S05] |
| 24/7, Đồng Lộc | Mười nữ thanh niên xung phong hy sinh khi làm nhiệm vụ bảo đảm giao thông. Tác động quân sự nằm ở cuộc giằng co liên tục để giữ tuyến chi viện qua các nút giao thông bị đánh phá. [S16] |
| Mùa hè–tháng 8 | Triển khai tuyến ống xăng dầu qua khu vực trọng điểm miền Trung. Một công trình kỹ thuật ít nổi bật trong bản đồ trận đánh bắt đầu giảm sự phụ thuộc vào chở nhiên liệu hoàn toàn bằng xe. [S15] [S16] |
| Tháng 8–9 | Đợt tiến công thứ ba của năm diễn ra; phía cách mạng chưa đạt mục tiêu khởi nghĩa rộng khắp và phải đối mặt bài toán phục hồi lực lượng. [S01] |
| 31/10–1/11 | Johnson công bố và thực hiện dừng ném bom miền Bắc. Chiến tranh tại miền Nam và các hoạt động trên chiến trường Đông Dương tiếp tục. [S02] |
| Cuối tháng 10–đầu tháng 11 | Hồ sơ Chennault ghi vận động Sài Gòn trì hoãn hòa đàm trước bầu cử Mỹ; chưa lượng hóa được việc này kéo dài chiến tranh bao lâu. [S02] |
| 5/11 | Nixon thắng cử. Sự chuyển giao quyền lực mở đường cho một chiến lược rút dần quân Mỹ kết hợp duy trì sức ép, thay vì kết thúc chiến tranh ngay. [S04] |

**Phân tích:** Mậu Thân phải được đánh giá ở hai cấp độ. Khả năng giữ đô thị và kỳ vọng nổi dậy của lực lượng tiến công không đạt mục tiêu tối đa; tác động lên nhận thức và lựa chọn chiến lược của Mỹ lại rất lớn. Thắng lợi cuối cùng năm 1975 không làm mất đi những tổn thất hay những đánh giá sai đã xảy ra năm 1968.

### 3.2. Năm 1969 — Việt Nam hóa và cuộc chiến về thời gian

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| 11/1 | Thụy Điển thiết lập quan hệ ngoại giao với VNDCCH. Mốc này cho thấy sự ủng hộ miền Bắc không chỉ nằm trong khối xã hội chủ nghĩa. [S63] |
| 20/1 | Nixon nhậm chức. Việt Nam hóa hướng tới giảm quân và thương vong Mỹ, tăng vai trò quân lực VNCH, duy trì viện trợ và hỏa lực hỗ trợ. [S04] |
| 25/1 | Đàm phán Paris chuyển sang phiên chính thức bốn bên. Vấn đề tư cách đại diện của các lực lượng miền Nam trở thành một phần thực chất của cuộc đấu tranh chính trị. [S31] |
| Tháng 2 và sau đó | Các đợt tiến công tiếp tục trong khi phía cách mạng phải bù đắp tổn thất và đối phó chương trình bình định. Rút quân Mỹ không có nghĩa mức độ bạo lực ở mọi địa phương giảm đồng đều. [S22] |
| Từ giữa tháng 3 | Mỹ mở ném bom bí mật Menu tại Campuchia, gây tranh luận về kiểm soát chiến tranh. [S03] |
| Tháng 5, A Sầu–Đông A Bia | Trận Hamburger Hill diễn ra ác liệt. Mỹ và VNCH chiếm điểm cao sau nhiều ngày; việc chiếm rồi không giữ lâu làm nổi bật tranh luận về giá trị quân sự so với giá phải trả. [S20] |
| 28/5, hồ sơ Washington | Bản ghi nhớ Phoenix–PRU mô tả bộ máy thu thập tin, xác định và đánh vào cơ sở đối phương, cùng chuyển giao quản lý CIA–MACV. Đây là cuộc chiến ở cấp xã, huyện, ít hiện trên bản đồ các sư đoàn. [S21] |
| 6/6; đại hội 6–8/6 | CPCMLT ra đời, tạo một cơ quan chính phủ cho phía cách mạng miền Nam. Ngày thành lập không nên bị thay bằng ngày kết thúc đại hội. [S14] |
| 8/6, Midway | Nixon công bố đợt rút quân Mỹ đầu tiên sau gặp Nguyễn Văn Thiệu. Chuyển giao trách nhiệm chiến đấu và giữ cam kết với Sài Gòn trở thành hai yêu cầu khó dung hòa. [S04] |
| Từ tháng 8 | Kênh gặp kín Kissinger–VNDCCH phát triển song song hội nghị công khai, trước giai đoạn thương lượng thực chất của Lê Đức Thọ. [S36] |
| 2/9 | Hồ Chí Minh qua đời; bộ máy lãnh đạo tập thể tiếp tục chỉ đạo chiến tranh và đàm phán. [S02] |
| Tháng 10 | Moratorium phản chiến làm tăng sức ép trong nước Mỹ; đồng thời Nixon dùng báo động lực lượng hạt nhân toàn cầu như tín hiệu cưỡng bức tới đối phương và Liên Xô. Báo động không phải bằng chứng đã có lệnh ném bom nguyên tử xuống Việt Nam. [S86] |
| Tháng 11 | Nixon vận động “đa số thầm lặng”; biểu tình lớn tiếp diễn, thể hiện xã hội Mỹ phân hóa. [S02] |
| Cuối năm | Mỹ Lai được biết đến rộng hơn qua điều tra và báo chí; Peers Inquiry xem xét cả cơ chế che giấu. Sự kiện xảy ra năm 1968 nhưng phần tác động công luận nổi bật xuất hiện năm 1969–1970. [S19] |

**Phân tích:** Đây không đơn giản là năm Mỹ bắt đầu “rời cuộc chiến”. Washington tìm cách thay đổi thành phần lực lượng mà vẫn định hình kết quả. Phía cách mạng vừa xây dựng địa vị ngoại giao, vừa chịu sức ép đáng kể ở nông thôn. Những khó khăn ấy giải thích vì sao chiến tranh còn kéo dài.

### 3.3. Năm 1970 — Chiến tranh lan mạnh sang Campuchia

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| 10/3 | Trung ương 18 phân tích Việt Nam hóa như một kế hoạch quân sự, chính trị và kinh tế; nhận diện bình định nông thôn là trọng điểm. Đối sách không thể chỉ là đánh một trận lớn. [S07] |
| 18/3, Phnom Penh | Sihanouk bị phế truất; Lon Nol nắm quyền, thay đổi môi trường căn cứ và tiếp vận. [S03] |
| Trong năm | VNCH triển khai cải cách “Người cày có ruộng”. Chuyển quyền sở hữu cho người trực tiếp canh tác là một nỗ lực giành cơ sở xã hội; hiệu quả chính trị tức thời không thể mặc định từ diện tích phân phối. [S22] |
| 29–30/4 | Quân VNCH và Mỹ tiến vào Campuchia, đánh căn cứ và thu vật tư; hoạt động làm tăng phản đối chiến tranh. [S71] |
| 4/5, Kent State | Vệ binh Quốc gia bắn chết bốn sinh viên, gây khủng hoảng công luận Mỹ. [S03] |
| Sau đảo chính Campuchia | Kênh chuyển ngoại tệ qua Phnom Penh bị gián đoạn; mạng tài chính cách mạng chuyển phương thức. Một thay đổi chế độ ở nước láng giềng tác động cả đến tiền mua hàng và tổ chức cơ sở miền Nam. [S80] |
| Giữa năm và sau đó | Việc rút lực lượng bộ chiến Mỹ khỏi Campuchia không chấm dứt nội chiến hay không kích. Quân VNCH, lực lượng cộng sản Việt Nam và các lực lượng Campuchia tiếp tục tác chiến trên không gian liên thông. [S71] |
| 10/12, Paris | Nguyễn Thị Bình đưa đề nghị ba điểm, gắn ngừng bắn với rút quân. Hoạt động công khai của đoàn miền Nam bổ sung cho thương lượng kín, vận động dư luận và đấu tranh trên chiến trường. [S31] |

**Phân tích:** Một căn cứ bị đánh phá có thể tạo tổn thất ngắn hạn nhưng chưa chắc xóa được hệ thống tiếp tế. Cần theo dõi khả năng mở tuyến thay thế, quan hệ với cư dân sở tại và những hệ quả chính trị ở nước bị mở rộng chiến tranh tới. Campuchia cũng có lịch sử và xung đột riêng, không chỉ là phần nền cho diễn biến Việt Nam.

### 3.4. Năm 1971 — Nam Lào, hậu cần và mở cửa Mỹ–Trung

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| Cuối tháng 1–tháng 3 | Đường 9–Nam Lào là cuộc đấu sức lớn nhằm đánh hoặc bảo vệ hành lang Trường Sơn. Phạm vi chiến dịch phản công Việt Nam–Lào rộng hơn riêng thời gian quân VNCH tác chiến trên đất Lào. [S23] |
| 8/2 | VNCH vượt sang Lào trong Lam Sơn 719, được Mỹ yểm trợ; bộ chiến Mỹ không trực tiếp đi cùng trên đất Lào. [S23] |
| 1/3 | Trung ương 19 ban hành nghị quyết về khôi phục, phát triển kinh tế miền Bắc. Nông nghiệp, công nghiệp, quản lý và đời sống là các điều kiện vật chất của khả năng tiếp tục chiến tranh. [S08] |
| Tháng 3 | Những trận quanh Bản Đông, các điểm cao và đường rút gây tổn thất nặng cho quân VNCH; hành lang tiếp tế không bị cắt bền vững. Kết quả cho thấy giới hạn phối hợp và ứng cứu trong Việt Nam hóa. [S23] |
| 13/6 | Công bố Pentagon Papers, làm sâu thêm tranh luận về tính trung thực của chính phủ và quyết sách chiến tranh. [S03] |
| Giữa năm | Bộ đội Trường Sơn ưu tiên đường K, tức đường kín, thay vì chỉ dựa vào đường hở và vận chuyển ban đêm. Khai thác địa hình, cây che phủ và ngụy trang là phản ứng kỹ thuật trước ưu thế trinh sát của Mỹ. [S28] |
| 1/7 | Nguyễn Thị Bình công bố sáng kiến bảy điểm tại Paris, nhấn mạnh rút quân Mỹ và giải pháp chính trị ở miền Nam. Ngoại giao công khai có nội dung đề xuất cụ thể, không chỉ là tuyên truyền. [S31] |
| Tháng 7 | Chuyến đi bí mật của Kissinger và thông báo Nixon sẽ thăm Trung Quốc làm thay đổi môi trường đối ngoại. Hà Nội phải xử lý việc đồng minh lớn đồng thời thương lượng với đối phương của mình. [S32] |
| Tháng 8 | Lũ lớn ở miền Bắc tạo thêm gánh nặng hộ đê, sơ tán và khắc phục sản xuất, bên cạnh nhiệm vụ chiến tranh. Thiên tai là biến số thực tế của năng lực hậu phương. [S29] |
| 6/9 | Đợt nhập ngũ của sinh viên các trường đại học miền Bắc cho thấy yêu cầu bổ sung nhân lực và cái giá về học tập, gia đình, đội ngũ chuyên môn. Hồi ức này không đại diện được cho trải nghiệm mọi sinh viên. [S30] |
| Cuối năm | New Zealand rút lực lượng chiến đấu, còn các đội huấn luyện tới năm 1972. Cần phân biệt thời điểm kết thúc từng thành phần hiện diện quân sự. [S72] |

**Phân tích:** Lam Sơn 719 kiểm nghiệm cả khả năng chiến đấu của quân VNCH lẫn năng lực phía cách mạng bảo vệ hệ thống hậu cần bằng lực lượng chủ lực và các binh chủng. Cùng năm, mở cửa Mỹ–Trung chứng tỏ quan hệ “cùng phe” không bảo đảm mọi ưu tiên đối ngoại trùng nhau.

### 3.5. Năm 1972 — Tiến công quy ước, không chiến và ngoại giao tam giác

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| 21–28/2, Trung Quốc | Nixon gặp Mao Trạch Đông và Chu Ân Lai; Thông cáo Thượng Hải đánh dấu bước hòa dịu. Mỹ tìm đòn bẩy đối với Hà Nội và Liên Xô; Trung Quốc theo đuổi lợi ích an ninh riêng. [S32] |
| 30/3 | Cuộc tiến công chiến lược 1972 mở đầu trên hướng Trị–Thiên, tiếp đến các hướng Tây Nguyên và Đông Nam Bộ. Xe tăng, pháo và đơn vị chủ lực lớn giữ vai trò nổi bật. [S24] |
| 4/4 | Trung ương 20 yêu cầu bảo đảm nhân lực, vật lực, vận chuyển và kế hoạch kinh tế năm 1972. Đây là cơ sở văn kiện cho quan hệ hậu phương–tiền tuyến, không phải toàn văn mệnh lệnh mở cuộc tiến công 30/3. [S09] |
| 5–7/4, Lộc Ninh | Lực lượng cách mạng chiếm chi khu Lộc Ninh trong Chiến dịch Nguyễn Huệ, mở rộng căn cứ và hành lang ở Đông Nam Bộ. [S91] |
| Từ 13/4, An Lộc–Bình Long | Các đợt tiến công không chiếm được thị xã như dự định. Quân VNCH giữ được vị trí với hỗ trợ hỏa lực, tiếp tế và cố vấn Mỹ. Không thể gọi mọi hướng của tiến công 1972 đều đạt kết quả như nhau. [S91] [S24] |
| 17/4, đánh giá CIA | Hồ sơ về viện trợ Liên Xô nhận định Hà Nội giữ quyền quyết định đáng kể, dù phụ thuộc vũ khí bên ngoài. Đây là ước tính tình báo có lời dè dặt của chính tác giả, không phải biên bản họp Bộ Chính trị Việt Nam. [S33] |
| 24/4, Đắk Tô–Tân Cảnh | Phòng tuyến quan trọng ở bắc Tây Nguyên bị đánh chiếm. Xe tăng, hỏa lực và lực lượng dẫn đường địa phương phối hợp trong một trận đánh vào căn cứ phòng ngự. [S92] |
| Đầu tháng 5, Quảng Trị | VNCH mất thị xã Quảng Trị trong đợt tiến công. Kết quả này tạo bàn đạp lớn nhưng chưa giải quyết xong cuộc chiến trên toàn hướng Trị–Thiên. [S25] |
| 8/5 giờ Mỹ, 9/5 giờ Việt Nam | Nixon công bố phong tỏa cảng; Mỹ rải mìn tại Hải Phòng. Khi lập niên biểu, phải tách ngày công bố quyết định ở Washington với ngày thực hiện trên thực địa. [S34] |
| Tháng 5 và sau đó | Linebacker đánh giao thông, kho tàng và tiếp vận miền Bắc. Hỏa lực không quân–hải quân Mỹ cũng góp phần ngăn các mũi tiến công ở miền Nam. [S24] |
| 22/5, Moskva | Nixon vẫn tới thượng đỉnh Liên Xô giữa lúc chiến tranh leo thang. Đàm phán kiểm soát vũ khí và quan hệ siêu cường tiếp tục có động lực riêng. [S94] |
| Cuối tháng 5–tháng 6, Kon Tum | VNCH giữ được Kon Tum với hỗ trợ Mỹ. Thắng lợi Đắk Tô–Tân Cảnh không tự động dẫn đến chiếm thành phố; đó là những mục tiêu và tình thế tác chiến khác nhau. [S24] |
| 28/6–16/9, Thành cổ Quảng Trị | Cuộc chiến giữ Thành cổ kéo dài 81 ngày đêm; lực lượng cách mạng rút khỏi Thành cổ khi VNCH tái chiếm. Giao tranh phòng ngự ở khu vực Quảng Trị còn tiếp diễn sau mốc này. [S25] |
| 4/10 và 8–10/10, đàm phán kín | Chỉ thị và thương lượng tiến tới công thức ngừng bắn, rút quân Mỹ và xử lý chính trị miền Nam. Nền tảng của Hiệp định Paris đã hình thành trước đợt ném bom tháng 12. [S93] |
| Cuối tháng 10 | Bất đồng của Nguyễn Văn Thiệu đối với dự thảo làm chậm thỏa thuận; Mỹ cũng gây sức ép lên đồng minh. Đàm phán không phải chỉ có hai bên đồng nhất và một bên thụ động. [S04] |
| Tháng 11 | Nixon tái đắc cử trong khi đàm phán chưa hoàn tất. [S03] |
| 18–29/12 | Linebacker II tập kích Hà Nội, Hải Phòng và các mục tiêu miền Bắc; phòng không Việt Nam chống trả. Nguồn Việt Nam gọi là 12 ngày đêm, trong khi quân sử Mỹ thường tính 11 ngày đánh do có ngày tạm ngừng dịp Giáng sinh. [S37] [S38] |
| Cuối tháng 12 | Không chiến dừng trước khi đàm phán nối lại tháng 1/1973. Những tổn thất, sức ép ngoại giao và quá trình thương lượng có trước phải được xét cùng nhau; không quy toàn bộ kết quả Paris cho một đợt đánh. [S36] [S93] |

**Phân tích:** Năm 1972 cho thấy rõ ba điều: lực lượng cách mạng có thể tiến công quy ước lớn; quân VNCH vẫn có khả năng chống giữ trên một số hướng với hỗ trợ mạnh; đồng minh lớn có thể tiếp tục viện trợ nhưng không đặt chiến tranh Việt Nam lên trên mọi ưu tiên khác. Mọi đánh giá năm 1975 phải lưu ý sự khác biệt rất lớn về khả năng sử dụng hỏa lực Mỹ so với năm 1972.

### 3.6. Năm 1973 — Paris thay đổi cấu trúc chiến tranh, chưa đem lại hòa bình bền vững

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| 8/1 | Đàm phán cấp cao nối lại để hoàn tất thỏa thuận. Các cuộc trao đổi còn xử lý những cách hiểu và cam kết kèm văn bản. [S36] |
| 23/1 | Lê Đức Thọ và Kissinger ký tắt thỏa thuận. Không nhầm bước ký tắt này với lễ ký chính thức bốn bên. [S36] |
| 27/1 | Bốn bên ký Hiệp định Paris. Các bộ trưởng ký gồm Nguyễn Duy Trinh, Nguyễn Thị Bình, William Rogers và Trần Văn Lắm; phân biệt với người thương lượng kín. [S31] |
| Sáng 28/1, giờ Việt Nam | Ngừng bắn có hiệu lực theo thời điểm quy định bằng GMT. Những lực lượng đối đầu vẫn hiện diện tại miền Nam. [S35] |
| 28–31/1, Cửa Việt | Giao tranh tiếp tục ngay sau thời điểm ngừng bắn; phía cách mạng giữ lại khu cảng sau phản công. Mốc này trực tiếp bác cách kể ngày ký Paris cũng là ngày mọi tiếng súng tại Việt Nam chấm dứt. [S39] |
| Tháng 2–3 | Trao trả tù binh và rút quân Mỹ diễn ra. Cơ quan viện trợ, nhân viên ngoại giao và những hình thức hỗ trợ khác cần được phân biệt với các đơn vị chiến đấu đã rút. [S89] |
| 2/3 | Định ước Hội nghị quốc tế về Việt Nam được ký tại Paris, tạo thêm khuôn khổ quốc tế cho thi hành thỏa thuận. [S35] |
| 29/3 | Hoàn tất rút quân Mỹ theo Hiệp định; MACV giải thể, viện trợ cho VNCH tiếp tục. [S89] [S03] |
| Từ đầu năm, Chương Thiện và Tây Nam Bộ | Địa phương tiếp tục chống các hoạt động lấn chiếm. Nguồn Việt Nam ghi lại cả những bất đồng ban đầu về cách xử lý tình hình mới giữa cấp chỉ đạo và chiến trường. [S40] |
| 6/6, Cam Lộ | Trụ sở CPCMLT chính thức hoạt động tại Quảng Trị. Bộ máy ngoại giao có một địa điểm tiếp xúc công khai trong vùng do phía cách mạng kiểm soát. [S13] |
| 13/6 | Các bên ký thông cáo về thi hành Hiệp định và nghị định thư. Cần có thêm văn bản thực thi cho thấy cơ chế đã gặp khó khăn từ rất sớm. [S35] |
| Tháng 6–7; văn bản 13/10 | Trung ương 21 xem xét cục diện sau Paris; nghị quyết được công bố với ngày 13/10/1973. Phải phân biệt thời gian hội nghị và ngày văn bản khi trích dẫn. [S10] [S59] |
| 15/8 | Mỹ chấm dứt chiến dịch ném bom kéo dài tại Campuchia, dưới giới hạn kinh phí của Quốc hội. Không biến mốc này thành khẳng định Mỹ tuyệt đối không dùng lực lượng ở Đông Nam Á từ đó về sau. [S42] [S58] |
| 15/9, Quảng Trị | Fidel Castro tới vùng giải phóng, gặp lãnh đạo và người dân. Chuyến thăm có ý nghĩa chính trị quốc tế nổi bật; viện trợ công trình cần được theo dõi riêng thời điểm cam kết và hoàn thành. [S61] |
| Tháng 10 | Quân đoàn 1 được thành lập, một bước tổ chức lực lượng chủ lực lớn sau Paris. [S41] |
| Mùa thu | Lê Đức Thọ từ chối Nobel Hòa bình được trao chung với Kissinger, viện dẫn tình hình Việt Nam. Sự thừa nhận quốc tế một thỏa thuận không đồng nghĩa hòa bình đã thành hiện thực. [S95] |
| Tháng 11 | Quốc hội Mỹ vượt phủ quyết để thông qua War Powers Resolution. Đây là ràng buộc về quan hệ hành pháp–lập pháp, khác với quyết định cắt kinh phí tác chiến ở Đông Dương. [S43] |

**Những điều khoản cần nhớ, đọc trực tiếp văn bản:** rút lực lượng Mỹ và đồng minh trong 60 ngày; trao trả quân nhân và thường dân nước ngoài bị bắt theo quy định; lực lượng hai bên miền Nam ở nguyên vị trí; hạn chế đưa thêm quân, vũ khí, chỉ cho thay thế trang bị theo điều kiện; dự kiến hòa giải, bầu cử và thống nhất bằng thương lượng. Đó là các nghĩa vụ pháp lý, khác với thực tế thực hiện. [S35]

### 3.7. Năm 1974 — Tích lũy lực lượng, khủng hoảng nguồn lực và Hoàng Sa

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| 19/1, Hoàng Sa | Trung Quốc giao chiến với hải quân VNCH rồi chiếm nốt phần quần đảo VNCH đang giữ, để lại hệ quả lãnh thổ lâu dài. [S96] |
| 23/1, Washington | Kissinger thông báo không ủng hộ các kiến nghị và yêu sách đảo của VNCH; quan tâm việc thả người bị bắt, gồm một công dân Mỹ. [S60] |
| Trong năm | Giá dầu và lạm phát toàn cầu tăng sức ép kinh tế. **Phân tích:** đặt cạnh khó khăn viện trợ VNCH trình bày, phải xét sức mua thực tế thay vì chỉ so số USD danh nghĩa. [S45] [S97] |
| Tháng 5 và tháng 7 | Lần lượt thành lập Quân đoàn 2 và Quân đoàn 4. Tổ chức lực lượng lớn giúp chuẩn bị tác chiến trên nhiều hướng chiến lược. [S41] |
| 19/5, Đồng Hới | Khởi công bệnh viện do Cuba giúp xây dựng sau cam kết năm 1973. Bệnh viện khánh thành năm 1981; không được kể thành một cơ sở đã vận hành để phục vụ toàn bộ chiến dịch 1975. [S62] |
| 29/7–7/8, Thượng Đức | Sau những đợt đột phá ban đầu không thành, lực lượng cách mạng củng cố, đổi cách tổ chức rồi chiếm chi khu. Trận đánh cho thêm dữ liệu về tương quan tác chiến, đồng thời thể hiện khả năng sửa sai ngay trong chiến dịch. [S46] |
| 9/8 | Nixon từ chức có hiệu lực; Ford lên làm tổng thống. Không đồng nhất khủng hoảng Watergate với toàn bộ nguyên nhân suy yếu của VNCH, nhưng nó làm thay đổi độ tin cậy của các lời bảo đảm từ Nhà Trắng. [S90] |
| 5/10, cuộc gặp Ford–Vương Văn Bắc | Ngoại trưởng VNCH trình bày khó khăn viện trợ và kinh tế. Đây là lời báo cáo của người tham dự với mục tiêu vận động Mỹ; không phải số liệu hậu kiểm độc lập. [S45] |
| Cuối năm | Bộ Chính trị và cơ quan quân sự thảo luận kế hoạch 1975–1976, có phương án tận dụng thời cơ sớm. Hồ sơ cho thấy quá trình xây dựng và điều chỉnh kế hoạch, không phải kết quả 30/4 đã được biết trước. [S59] |
| 13/12 | Mở Chiến dịch Đường 14–Phước Long, nhằm mở địa bàn, hành lang và tạo thế mới. Phản ứng Mỹ về sau trở thành một dữ kiện quan trọng để đánh giá thời cơ. [S47] |
| 25/12 | Trung ương 23 ra nghị quyết về tăng cường lãnh đạo và sức chiến đấu của Đảng, tổ chức và quản lý. Không nên gọi văn kiện này là chính kế hoạch tác chiến giải phóng miền Nam. [S11] |

**Phân tích:** Năm 1974 thường bị rút thành “chuẩn bị cho 1975”, nhưng có những quá trình độc lập: tranh chấp lãnh thổ trên biển, cơ giới hóa hậu cần, thay đổi quyền lực Mỹ, thử nghiệm khả năng tác chiến và khủng hoảng kinh tế. Chúng gặp nhau trong đánh giá chiến lược của những tháng sau.

### 3.8. Năm 1975 — Từ Phước Long tới kết thúc chiến tranh giữa hai chính thể

| Thời điểm | Diễn biến và tác động cần chú ý |
|---|---|
| 6/1 | Lực lượng cách mạng làm chủ Phước Long. Mỹ không tái can thiệp bằng lực lượng tác chiến để đảo ngược kết quả; đây là bằng chứng thực tế làm tăng niềm tin vào khả năng phát triển tiến công. [S47] |
| Đầu tháng 1 | Tiếp tục xem xét kế hoạch hai năm cùng phương án kết thúc sớm nếu thời cơ xuất hiện. [S59] |
| Tháng 2 | Tổ chức Đoàn 232, lực lượng tương đương quân đoàn ở Nam Bộ, chuẩn bị thêm một hướng tiến công về Sài Gòn. [S41] |
| Từ 4/3 | Chiến dịch Tây Nguyên bắt đầu bằng tạo thế, nghi binh và chia cắt giao thông. Buôn Ma Thuột là mục tiêu then chốt, trong khi sự chú ý của đối phương bị kéo về hướng khác. [S48] |
| 10–11/3 | Tiến công và làm chủ các mục tiêu chủ yếu ở Buôn Ma Thuột. Mất đầu mối này gây chấn động toàn hệ thống bố trí Quân khu II VNCH. [S48] |
| 14/3 | Cuộc họp tại Cam Ranh dẫn tới quyết định rút bỏ Kon Tum–Pleiku để tái bố trí. Phải phân biệt ngày quyết định với ngày đoàn quân thực tế rút đi và ngày bị đánh chặn. [S50] |
| 16–17/3 và những ngày tiếp theo | Lực lượng cách mạng chuyển quân chặn Đường 7; đoàn rút lui của VNCH cùng dân thường rơi vào tình thế hỗn loạn. Hậu cần, đường sá, cầu và thông tin trở thành yếu tố quyết định. [S50] |
| 21/3 | Mở chiến dịch Huế–Đà Nẵng trong thế đối phương phải điều chỉnh và thu hẹp bố trí. Các hướng tiến công liên kết với nhau về chiến lược dù có tổ chức chiến dịch riêng. [S52] |
| Khoảng 24/3 | Tây Nguyên cơ bản được giải phóng theo cách ghi trong một số tài liệu cũ. Những hoạt động phát triển chiến dịch còn tiếp tục; nguồn quân sử khác tính tới 3/4. [S49] [S48] |
| 25/3 | Bộ Chính trị đẩy quyết tâm hoàn thành giải phóng miền Nam trước mùa mưa. Thời hạn thay đổi theo thông tin chiến trường, cùng yêu cầu tăng tốc chi viện và tập trung lực lượng. [S54] |
| 26/3 | Thừa Thiên Huế được giải phóng; hình thành chính quyền quân quản. Không lấy một đoạn ghi ngày 25/3 trong bài tổng thuật cũ để thay mốc 26/3 được cơ quan địa phương xác nhận. [S51] |
| Tháng 3 | Thành lập Quân đoàn 3 từ lực lượng chiến đấu tại Tây Nguyên, bổ sung cơ cấu chỉ huy cho giai đoạn phát triển tiến công. [S41] |
| 29/3 | Đà Nẵng thất thủ đối với VNCH, được giải phóng theo cách gọi phía cách mạng. Mất một đầu mối quân sự–hậu cần lớn làm thay đổi nhanh khả năng phòng thủ phần lãnh thổ còn lại. [S52] |
| Cuối tháng 3–đầu tháng 4 | Tiến xuống duyên hải, hội quân về Đông Nam Bộ và cụ thể hóa mục tiêu kết thúc trong thời gian ngắn. [S54] |
| 9/4 | Mở Chiến dịch Xuân Lộc. Quân VNCH chống giữ mạnh, khiến phía tiến công phải điều chỉnh cách đánh và cô lập địa bàn. Đây là một trong những trận lớn cuối cùng. [S53] |
| 10/4, Washington | Ford đề nghị viện trợ quân sự bổ sung 722 triệu USD trong bối cảnh Quốc hội đã cấp 700 triệu cho năm tài khóa 1975. Đề nghị không trở thành một đợt cứu viện đủ sức xoay chuyển cục diện trước 30/4. [S44] |
| 14/4 | Chiến dịch tiến công Sài Gòn được mang tên Hồ Chí Minh; tiếp tục hoàn thiện chuẩn bị. [S54] |
| 14/4, Song Tử Tây | Lực lượng hải quân phía cách mạng chiếm đảo, mở đầu chuỗi hoạt động tại những đảo Trường Sa do VNCH giữ. [S56] |
| 21/4 | VNCH rút khỏi Xuân Lộc; Nguyễn Văn Thiệu từ chức, Trần Văn Hương lên thay. Thay đổi lãnh đạo diễn ra trong điều kiện khả năng tái lập thế phòng thủ đã rất hạn chế. [S53] |
| 25, 27, 28, 29/4 | Lần lượt tiếp quản Sơn Ca, Nam Yết, Sinh Tồn và đảo Trường Sa theo niên biểu QĐND Media. Đây là những đảo cụ thể; không viết thành toàn bộ thực thể của cả quần đảo đều được kiểm soát. [S56] |
| 26/4 | Chiến dịch Hồ Chí Minh mở cuộc tiến công quyết định từ nhiều hướng, kết hợp lực lượng chủ lực, địa phương và cơ sở trong đô thị. [S54] |
| 28/4 | Dương Văn Minh lên làm tổng thống VNCH trong thế quân sự gần như không thể đảo ngược. [S03] |
| 29/4 | Điện Kissinger–Martin chỉ thị di tản toàn bộ người Mỹ khi sân bay không dùng được cho máy bay cánh cố định; chuyển sang trực thăng. Quyết định được ghi trong hồ sơ đương thời. [S57] |
| 29–30/4 | Frequent Wind di tản người Mỹ và một bộ phận người Việt. Đối với người dân rời đi, đây là một trải nghiệm sinh tồn và chia lìa gia đình, không chỉ là hình ảnh biểu tượng của thất bại quân sự. [S58] [S83] |
| Trưa 30/4 | Lực lượng cách mạng vào Dinh Độc Lập; Dương Văn Minh chấp nhận đầu hàng. Chính quyền VNCH chấm dứt; cuộc chiến giữa hai chính thể Việt Nam kết thúc về cơ bản. [S54] |
| 30/4–đầu tháng 5 | Tiếp quản và kết thúc kháng cự tại các địa phương phía Nam tiếp tục. Không hình dung mọi đơn vị ở mọi nơi đều đổi trạng thái đồng thời trong một giờ. [S40] |

### 3.9. Phần còn lại của năm 1975 — Hậu chiến bắt đầu giữa những nguy cơ mới

| Thời điểm | Diễn biến và ý nghĩa |
|---|---|
| 10/5 và 24–27/5, Thổ Chu | Khmer Đỏ chiếm đảo, bắt và sát hại hơn 500 cư dân theo nguồn Việt Nam; Việt Nam tiến công lấy lại đảo. [S81] |
| Tháng 5, vụ Mayaguez | Mỹ sử dụng lực lượng trong khủng hoảng với Campuchia. Đây là ví dụ cần nhớ khi diễn giải giới hạn tác chiến sau năm 1973; không phải một cuộc tái can thiệp để cứu VNCH. [S58] |
| Trong năm | Cứu trợ, hồi cư, tìm người thân và làn sóng người rời Việt Nam đặt ra bài toán nhân đạo quốc tế. Phải phân biệt người tị nạn năm 1975 với tổng dòng di cư nhiều năm về sau. [S83] |
| 29/9 | Trung ương 24 xác định nhiệm vụ hoàn thành thống nhất nhà nước, tổ chức lại kinh tế và quản lý trên phạm vi cả nước. [S12] |
| 15–21/11 | Hội nghị hiệp thương chính trị bàn thống nhất Việt Nam về mặt nhà nước; ngày 21/11 ban hành thông cáo. Đây là bước thể chế cụ thể của giai đoạn sau chiến tranh. [S82] |
| Cuối năm | Công việc chuẩn bị tổng tuyển cử và thống nhất cơ quan nhà nước tiếp tục. Mốc hoàn tất về nhà nước thuộc năm 1976, không phải ngay trưa 30/4/1975. [S84] |

**Phân tích:** Tốc độ của mùa Xuân 1975 không xóa được tính dài hạn của sự chuẩn bị. Đồng thời, thắng lợi quân sự mở ra một tập hợp công việc khác: quản trị, cứu trợ, xử lý hậu quả xã hội và bảo vệ chủ quyền. Đó là lý do phạm vi nghiên cứu tới hết năm 1975 cần vượt ra ngoài riêng Chiến dịch Hồ Chí Minh.

## 4. Nhánh riêng về Đảng trong giai đoạn 1968–1975

### 4.1. Đảng đã làm gì ngoài việc quyết định mở chiến dịch

Đọc lịch sử Đảng chỉ bằng tên các hội nghị sẽ bỏ sót phần lớn công việc: tổ chức lực lượng, vận động dân chúng, phân bổ nhân lực, sản xuất, duy trì giao thông, tiếp nhận viện trợ, lựa chọn cách đàm phán và kiểm tra cấp dưới. Cũng phải phân biệt **quyết tâm chiến lược**, **kế hoạch tác chiến**, **tổ chức thực hiện** và **báo cáo tổng kết**. Một nghị quyết chính trị không tự nó biến thành năng lực vận chuyển hay khả năng hiệp đồng trên chiến trường.

| Giai đoạn | Nội dung có thể xác định từ văn kiện | Ý nghĩa và giới hạn khi đánh giá |
|---|---|---|
| 1968 | Trung ương 14 phối hợp quân sự, chính trị, binh vận, ngoại giao và chi viện. [S06] | Dự báo về tan rã đối phương và nổi dậy đô thị không đạt như mong muốn, đặt ra yêu cầu điều chỉnh. |
| 1969–1970 | Xây dựng thiết chế CPCMLT; Trung ương 18 nhận diện Việt Nam hóa là kế hoạch toàn diện, chú trọng bình định và giành dân. [S13] [S07] | Đảng xử lý cả quyền đại diện chính trị và sức ép ở cơ sở; không thể hiểu chiến tranh chỉ bằng số quân Mỹ còn lại. |
| 1971 | Trung ương 19 nhấn mạnh khôi phục kinh tế, nông nghiệp, kỹ thuật và quản lý miền Bắc. [S08] | Hậu phương phải tạo và tái tạo nguồn lực; chiến đấu kéo dài cần lương thực, sản xuất, cán bộ và đời sống dân cư. |
| 1972 | Trung ương 20 đặt nhiệm vụ bảo đảm người, của và vận tải cho tiền tuyến, cùng kế hoạch nhà nước và tiêu dùng xã hội. [S09] | Tập trung chi viện đi cùng bảo vệ miền Bắc và duy trì nền kinh tế dưới nguy cơ đánh phá trở lại. |
| 1973 | Trung ương 21 xác định tiếp tục đấu tranh sau Paris, đồng thời nhìn lại sai lầm đánh giá và chậm điều chỉnh sau Mậu Thân. [S10] | Thành công sau này không thể dùng làm bằng chứng rằng mọi quyết định trước đó đều đúng. |
| 1974 | Trung ương 23 đề cập tổ chức, quan hệ Đảng–Nhà nước, quản lý và vận động quần chúng, chống biểu hiện quan liêu. [S11] | Xây dựng năng lực lãnh đạo là một phần chuẩn bị, nhưng không đồng nhất với kế hoạch tác chiến 1975–1976. |
| Đầu 1975 | Cập nhật mục tiêu, tập trung lực lượng và phối hợp các hướng. [S55] | Biến đánh giá thời cơ thành lệnh có thể thực hiện. |
| Sau 30/4 | Trung ương 24 chuyển trọng tâm sang hoàn thành thống nhất nhà nước, khôi phục và tổ chức lại kinh tế, đồng thời bảo vệ an ninh và lãnh thổ. [S12] | Từ chiến tranh sang quản trị là thay đổi nhiệm vụ thực chất; các kết quả, chi phí xã hội và vấn đề hậu chiến cần nghiên cứu riêng. |

### 4.2. Cách tổ chức chỉ đạo

Trung ương, Bộ Chính trị quyết định chiến lược; Quân ủy, Bộ Quốc phòng và Bộ Tổng tham mưu chỉ đạo quân sự; Trung ương Cục, khu ủy và bộ tư lệnh tổ chức tại chiến trường. Phân công cụ thể phải đọc theo văn kiện. [S06]

Lê Duẩn là Bí thư thứ nhất; Võ Nguyên Giáp là Bộ trưởng Quốc phòng. Trong Chiến dịch Hồ Chí Minh, Văn Tiến Dũng là Tư lệnh, Phạm Hùng là Chính ủy. Phân công này khác với việc quy toàn bộ thắng lợi cho một cá nhân. [S55]

### 4.3. Tự phê bình sau Mậu Thân là bằng chứng quan trọng

Nghị quyết Trung ương 21 thừa nhận đã có chủ quan khi đánh giá tình hình, yêu cầu chưa sát thực tế, chậm rút kinh nghiệm sau đợt Tết và chưa thấy hết nỗ lực bình định của đối phương. Những nội dung này cho thấy lãnh đạo cách mạng từng phải vượt qua một giai đoạn khó khăn do cả hoạt động đối phương lẫn khuyết điểm của mình. [S10]

**Phân tích:** Điều cần giải thích không phải chỉ là “Đảng quyết tâm nên thắng”, mà là bằng cách nào quyết tâm được chuyển thành tổ chức; khi đánh giá sai thì ai phát hiện, thông tin đi tới đâu, chủ trương được sửa thế nào và cần bao lâu để lực lượng hồi phục. Đây là những câu hỏi có thể kiểm chứng bằng nghị quyết, điện chỉ đạo và báo cáo cấp chiến trường.

### 4.4. Sau Paris không tồn tại một lộ trình duy nhất đã được biết trước

Tập tài liệu CWIHP 84 cho thấy trong năm 1973–1975, lãnh đạo Việt Nam xem xét khả năng đối phương thi hành Hiệp định, mức tái can thiệp của Mỹ và thái độ đồng minh. Các kế hoạch thay đổi theo thông tin và tương quan lực lượng. Phải tách văn kiện gốc được dịch trong tập này khỏi cách diễn giải của người viết bài dẫn nhập. [S59]

**Phân tích:** Việc thời hạn rút từ hai năm xuống một năm rồi vài tuần thể hiện khả năng khai thác thời cơ, nhưng nó chỉ thực hiện được khi đã có lực lượng, hậu cần và hệ thống chỉ huy. Quyết định nhanh mà không có những điều kiện ấy không tự tạo ra kết quả tương tự.

## 5. Đọc các trận đánh qua cơ chế tác động

Phần này không lặp lại toàn bộ niên biểu. Mỗi trường hợp nêu một vấn đề phân tích để thấy vì sao kết quả tại một địa điểm có thể ảnh hưởng tới chiến trường rộng hơn.

### 5.1. Làng Vây — đưa được phương tiện đến nơi cũng là một phần của trận đánh

Xe tăng tham chiến ở Làng Vây phải vượt hành trình dài, giữ bí mật và phối hợp khi mở cửa vào cứ điểm. Bởi vậy, ưu thế hỏa lực tại giờ nổ súng là kết quả của công việc trước trận: đường đi, kỹ thuật, nhiên liệu, trinh sát và tổ chức. Không thể chỉ đếm số xe có mặt rồi bỏ qua cách chúng tới được đó. [S17]

### 5.2. Hamburger Hill — chiếm mục tiêu và đạt mục tiêu chiến lược là hai thước đo

Hồi ức Bob Harkins cho thấy đơn vị Mỹ đánh chiếm điểm cao nhưng không coi việc giữ lâu dài là mục đích. **Phân tích:** với một chiến lược thiên về tiêu hao lực lượng đối phương, rút khỏi điểm cao không tự chứng minh trận đánh “vô nghĩa”; tuy nhiên, chi phí và cách giải thích kết quả có thể làm công chúng nghi ngờ toàn bộ phương thức chiến tranh. [S20]

### 5.3. Đường 9–Nam Lào — chống chia cắt một mạng lưới

Lực lượng Việt Nam–Lào phối hợp bảo vệ hành lang và đánh quân rút lui. **Phân tích:** tiêu chí chiến lược là thời gian tuyến tiếp tế bị vô hiệu hóa, không chỉ việc tới Sê Pôn hay bảng thiệt hại. [S23]

### 5.4. Lộc Ninh và An Lộc — hai kết quả trong cùng một hướng chiến dịch

Nguồn quân sử Việt Nam ghi rõ thành công ở Lộc Ninh và các lần tiến công Bình Long không thành công. Điều này cho phép nghiên cứu những giới hạn hiệp đồng, tiếp tế và đột phá mà không phủ nhận ý nghĩa của việc mở căn cứ. Không được dùng kết quả một trận để tự động thay cho kết quả cả chiến dịch. [S91]

### 5.5. Quảng Trị — thời gian có thể là một giá trị quân sự, nhưng phải tính cả tổn thất

Giữ Thành cổ kéo dài có ý nghĩa đối với bố trí lực lượng và nhịp chiến dịch; cuối cùng lực lượng cách mạng vẫn rút khỏi khu Thành cổ. **Phân tích:** cần xem lợi ích thời gian và địa bàn cùng giá tổn thất, khả năng bổ sung, tình hình các hướng khác; khẩu hiệu tưởng niệm không thay thế được phép đánh giá đó. [S25]

### 5.6. Thượng Đức — sửa phương án giữa chiến dịch

Các đợt đánh ban đầu gặp khó khăn; phía tiến công dừng củng cố, rút kinh nghiệm rồi tiếp tục. **Phân tích:** thông tin về lần không thành công đặc biệt có giá trị vì giúp nhận diện quá trình học hỏi. Nếu chỉ giữ lại giờ chiến thắng, ta không thấy được cơ chế tổ chức đã tạo ra kết quả. [S46]

### 5.7. Đường 7 — một cuộc rút quân cũng có thể quyết định cục diện

Nguồn hồi ức chiến dịch kể việc điều xe, chuyển đơn vị và tổ chức chặn đánh trong đêm 16–17/3. **Phân tích:** một mệnh lệnh tái bố trí phải có đường thoát, cầu, nhiên liệu, liên lạc và kiểm soát dòng dân thường. Khi các điều kiện không đáp ứng, rút quân có thể chuyển thành tan rã thay vì tạo ra một phòng tuyến mới. [S50]

### 5.8. Xuân Lộc — chống giữ mạnh vẫn có thể bị vượt qua ở cấp chiến dịch

Phòng thủ Xuân Lộc gây khó khăn đáng kể cho lực lượng tiến công. **Phân tích:** thay vì tiếp tục đo kết quả bằng số lần đánh thẳng vào thị xã, cần quan sát việc cô lập tiếp viện, cắt giao thông và đe dọa các hướng khác. Một đơn vị chống giữ tốt không đủ cứu một hệ thống phòng thủ đang mất liên kết. [S53]

### 5.9. Trường Sa — phải nêu đúng phạm vi thắng lợi

Niên biểu ghi năm đảo được lực lượng cách mạng tiếp quản trong tháng 4. **Phân tích:** kiểm soát những đảo VNCH đang giữ củng cố hiện diện trong thời điểm chuyển giao quyền lực; nó không chứng minh đã kiểm soát mọi đảo, đá và bãi của quần đảo, càng không thay thế hồ sơ pháp lý về chủ quyền. [S56]

### 5.10. Chiến dịch cuối cùng — thời cơ phải đi cùng năng lực tổ chức

**Phân tích tổng hợp từ niên biểu:** sụp đổ ở Tây Nguyên và miền Trung làm xuất hiện cơ hội rất lớn, nhưng để khai thác cần những đơn vị đủ sức tiến nhanh, được tiếp tế và phối hợp. Sự hiện diện của nhiều quân đoàn không có nghĩa tự động hiệp đồng được; vai trò của chỉ huy, thông tin và địa phương nằm ở chỗ nối các lực lượng ấy thành một hoạt động thống nhất.

## 6. Những yếu tố ít nổi bật nhưng có ảnh hưởng thực tế

### 6.1. Đường ống xăng dầu

Từ năm 1968, mạng đường ống được xây dựng và kéo dài qua nhiều giai đoạn; nguồn quân sử về Trung đoàn 664 ghi gần 5.000 km cho toàn hệ thống và các nhánh. **Phân tích:** vận chuyển nhiên liệu bằng ống giảm phần sức chở xe phải dành cho chính nhiên liệu, đồng thời đòi hỏi trạm bơm, kho, sửa chữa và bảo vệ liên tục. Không phải cứ có ống là chấm dứt nguy cơ đứt tiếp tế. [S15]

### 6.2. Đường kín và sự thay đổi cách chống trinh sát

Ưu tiên đường K từ năm 1971 cho phép tận dụng tán rừng và ngụy trang để thích nghi với phát hiện ban đêm. **Phân tích:** đây là cuộc cạnh tranh giữa công nghệ và cách tổ chức sử dụng địa hình; khả năng vận chuyển không chỉ phụ thuộc tổng chiều dài đường đã mở. [S28]

### 6.3. Cảm biến và trung tâm xử lý ở Thái Lan

Igloo White kết nối cảm biến đặt dọc tuyến vận tải, máy bay chuyển tiếp và trung tâm phân tích tại Nakhon Phanom, rồi chuyển dữ liệu cho lực lượng đánh phá. **Phân tích:** “chiến tranh điện tử” ở đây là một chuỗi thu thập–truyền–xử lý–tấn công, có thể bị giảm hiệu quả nếu phát hiện sai, thông tin chậm hoặc mục tiêu đổi cách di chuyển. Không nên coi cảm biến đồng nghĩa kiểm soát được Trường Sơn. [S27]

### 6.4. Cơ giới hóa giao liên và điều động người

Nguồn Trường Sơn mô tả thay giao liên bộ bằng tổ chức cơ giới trong 1973–1975, cùng mạng đường và thông tin liên hoàn. **Phân tích:** tăng tốc vận chuyển người giúp đổi thời gian tập trung đơn vị, đưa lực lượng mới đến chiến trường và giảm hao mòn trên đường; đây là một thay đổi về khả năng chiến dịch, không chỉ về tiện nghi đi lại. [S26]

### 6.5. Người sửa đường, rà bom và giữ nút giao thông

Hậu cần tại Quân khu 4 gồm thanh niên xung phong, công nhân, công binh, phòng không và lực lượng dân sự. **Phân tích:** hiệu quả một tuyến đường phải đo bằng khả năng hoạt động sau đánh phá. Công việc lấp hố bom, phá bom nổ chậm và làm đường vòng có thể giữ cho cả một đợt vận chuyển tiếp tục, dù không tạo ra một “trận thắng” có tên riêng. [S16]

### 6.6. Mạng tiền tệ B29

Tài liệu về B29 ghi một hệ thống tiếp nhận ngoại tệ viện trợ và ủng hộ, chuyển tiền và bảo đảm chi tiêu cho chiến trường. **Phân tích:** chiến tranh cần sức mua, khả năng đổi tiền và kênh thanh toán, không chỉ vũ khí được vận chuyển trực tiếp. Những số tổng cộng cho 1965–1975 không được dùng như tổng riêng của 1968–1975. [S79]

### 6.7. Sự kiện tại Phnom Penh tác động tới từng kênh tài chính

Nguồn về “con đường tiền tệ” mô tả việc chuyển tiền theo kênh qua Campuchia và thay đổi phương thức sau đảo chính Lon Nol. **Phân tích:** một cú sốc địa chính trị có thể đi xuống cấp hoạt động nhỏ: lịch chuyến bay, quan hệ ngân hàng, liên lạc và việc cấp tiền cho cơ sở. Không thể chỉ kể ảnh hưởng Campuchia bằng các cuộc hành quân. [S80]

### 6.8. Bình định và Phoenix đánh vào mạng người

Bản ghi nhớ 28/5/1969 phân biệt Phoenix với các đơn vị trinh sát tỉnh PRU, mô tả bộ máy từ trung ương xuống huyện, hoạt động tình báo và đánh vào cơ sở cách mạng. **Phân tích:** mất người liên lạc hoặc cơ sở địa phương có thể khiến một đơn vị chủ lực thiếu thông tin, dẫn đường và chỗ đứng chân. Cũng không được dịch mọi trường hợp “neutralized” thành “bị giết”; phải kiểm tra định nghĩa thống kê. [S21]

### 6.9. Ruộng đất là một mặt của cuộc tranh giành cơ sở xã hội

Chương trình “Người cày có ruộng” của VNCH chuyển quyền sở hữu cho người canh tác và có hỗ trợ kỹ thuật Mỹ. Nguồn quân sử Mỹ tự lưu ý hiệu quả tức thời trong việc giành lòng dân chưa rõ. **Phân tích:** không thể suy từ một chính sách xã hội có kết quả hành chính sang kết luận mọi nông dân đổi lập trường; cũng không nên bỏ hẳn chính sách này khỏi lịch sử chiến tranh. [S22]

### 6.10. Lũ lụt và khả năng phục hồi của miền Bắc

Trận lũ 1971 đặt thêm yêu cầu hộ đê, sơ tán và khắc phục lên bộ máy thời chiến. **Phân tích:** sản lượng, vận tải và sức lao động còn chịu tác động thiên tai. Nếu chỉ so sánh số bom và số vũ khí, ta bỏ sót những điều kiện quyết định sức chịu đựng của hậu phương. [S29]

### 6.11. Nhập ngũ và tổn thất vốn con người

Hồi ức sinh viên nhập ngũ tháng 9/1971 ghi việc rời giảng đường, thương vong và trở lại học tập. **Phân tích:** huy động người không phải một con số vô danh: nó ảnh hưởng tới gia đình, đào tạo và lực lượng chuyên môn sau chiến tranh. Không dùng trải nghiệm một nhóm để khái quát thành tâm trạng đồng nhất của cả thế hệ. [S30]

### 6.12. Tổ chức quân đoàn

Quân đoàn 1, 2, 4, 3 và Đoàn 232 hình thành theo các thời điểm khác nhau trong 1973–1975. **Phân tích:** cấp tổ chức lớn cho phép phối hợp bộ binh, xe tăng, pháo, phòng không và hậu cần trên hướng chiến lược. Đây là bước tích lũy tổ chức trước khi tốc độ tiến công năm 1975 tăng mạnh. [S41]

### 6.13. Chương Thiện và thông tin từ thực địa

Nguồn Việt Nam kể chiến trường Quân khu 9 tiếp tục chống lấn chiếm sau Paris, kể cả lúc nhận ý kiến phê bình từ cấp chỉ đạo. **Phân tích:** lịch sử quyết sách không luôn đi một chiều từ nghị quyết xuống đơn vị; báo cáo và thực tiễn địa phương có thể làm thay đổi nhận thức chung. [S40]

### 6.14. Kinh tế chiến tranh của VNCH

Biên bản gặp Ford–Vương Văn Bắc cho thấy chính phía Sài Gòn lo ngại mức viện trợ, kinh tế và tinh thần lực lượng địa phương. **Phân tích:** cắt giảm sức mua có thể làm giảm số giờ hoạt động, dự trữ và khả năng ứng cứu, nhưng không tự động giải thích mọi thất bại chỉ huy; cần kết hợp dữ liệu ngân sách với hành vi đơn vị. [S45]

### 6.15. Người cung cấp viện trợ cũng có chương trình riêng

Hồ sơ tình báo Mỹ về viện trợ Liên Xô nhận định Moskva vừa muốn hỗ trợ Hà Nội vừa quan tâm thượng đỉnh, kiểm soát vũ khí và cạnh tranh Trung Quốc. **Phân tích:** viện trợ tạo năng lực và cả ràng buộc. Không thể suy từ nguồn gốc một loại vũ khí rằng bên cung cấp đã trực tiếp ra lệnh sử dụng nó trong một chiến dịch. [S33]

### 6.16. Kỹ thuật an ninh và mặt trái của đoàn kết quốc tế

Nghiên cứu của Martin Grossheim trên hồ sơ Đông Đức cho thấy hợp tác đào tạo và kỹ thuật an ninh, gồm xử lý tài liệu, thư tín và nghiệp vụ điều tra. **Phân tích:** viện trợ không chỉ có quân sự hay nhân đạo; nó cũng xây dựng năng lực kiểm soát và bảo vệ chế độ. Tác dụng chiến tranh và tác động lên đời sống chính trị cần được phân biệt. [S67]

### 6.17. Người nước ngoài tham gia trực tiếp và gián tiếp

Hồ sơ về phi công Triều Tiên ghi một hình thức hỗ trợ trực tiếp cho phòng không miền Bắc; tài liệu khác cho thấy chuyên gia chiến tranh tâm lý còn hoạt động tại Bình Định năm 1971. **Phân tích:** quy mô các hình thức ấy khác nhau, không được biến thành hình dung có một đạo quân Triều Tiên lớn tác chiến khắp Việt Nam. [S65] [S66]

### 6.18. Thỏa thuận công khai và các hiểu biết không công bố

FRUS ghi các hiểu biết riêng về trinh sát, tàu sân bay, tù binh và nhân viên dân sự. **Phân tích:** cần đọc cùng văn bản công khai; cam kết riêng không tự bảo đảm ngân sách hay đồng thuận chính trị Mỹ. [S36]

### 6.19. Dữ liệu chất khai quang phải đọc đúng niên đại

NARA lưu Herbicide File 1965–1971, mã NAID 623176, cùng các cơ sở dữ liệu tác chiến khác. **Phân tích:** rừng bị phá, môi trường biến đổi và tác động sức khỏe có thể kéo dài sau thời gian phun; không được suy từ hậu quả năm 1975 rằng một phi vụ phun cụ thể diễn ra năm đó. Các kết luận y khoa cần nghiên cứu chuyên ngành riêng. [S87]

### 6.20. Bom mìn còn lại làm chiến tranh kéo dài trong đời sống dân sự

Báo cáo CRS cho thấy vật nổ chưa nổ ở Việt Nam, Lào và Campuchia tiếp tục gây thương vong và cản trở sử dụng đất. **Phân tích:** kết thúc một chiến dịch không hoàn trả ngay ruộng, đường và nơi ở an toàn. Hậu quả quân sự trở thành gánh nặng sản xuất và cứu trợ trong giai đoạn hậu chiến. [S42]

## 7. Chiến tranh Lạnh và vai trò các nước

### 7.1. Những thay đổi quốc tế tác động qua cơ chế nào

| Thay đổi quốc tế | Bằng chứng và cơ chế liên quan tới Việt Nam |
|---|---|
| Trung–Xô chuyển từ bất đồng sang đụng độ biên giới năm 1969 | Hồ sơ Mỹ ghi các vụ tháng 3/1969 và phản ứng của Washington. **Phân tích:** Việt Nam phải nhận hỗ trợ trong một khối đồng minh có xung đột nội bộ; hợp tác hậu cần và mục tiêu ngoại giao không thể coi là thống nhất sẵn. [S98] |
| Mỹ–Trung mở cửa 1971–1972 | Lợi ích hai nước giao nhau trong tính toán trước Liên Xô và các vấn đề châu Á. **Phân tích:** đây là cơ hội cho Washington tìm đòn bẩy, đồng thời tạo rủi ro Hà Nội bị gây sức ép từ đồng minh. [S32] |
| Mỹ–Xô vẫn thượng đỉnh tháng 5/1972 | Hồ sơ Moskva cho thấy thương lượng kiểm soát vũ khí tiếp diễn. **Phân tích:** cuộc chiến Việt Nam có vị trí lớn nhưng không điều khiển toàn bộ lịch trình siêu cường. [S94] |
| Cạnh tranh viện trợ và ảnh hưởng đối với Hà Nội | Phạm Quang Minh và các học giả tại Wilson Center phân tích cách Hà Nội xử lý quan hệ với hai nước lớn. Đây là lập luận nghiên cứu, không phải bằng chứng mọi yêu cầu viện trợ đều được đáp ứng. [S68] |
| Khủng hoảng dầu mỏ 1973–1974 | Nguồn ngoại giao Mỹ mô tả cấm vận, tăng giá dầu và sức ép kinh tế toàn cầu. **Phân tích khi nối với dữ liệu VNCH:** ngân sách danh nghĩa không mua được lượng hàng như trước; nhu cầu quân sự cạnh tranh với nhiều ưu tiên mới của Mỹ. [S97] |
| Giới hạn quyền lực và ngân sách tại Hoa Kỳ | War Powers đặt cơ chế báo cáo, kiểm soát thời gian sử dụng lực lượng; các giới hạn kinh phí là một công cụ khác. **Phân tích:** năng lực quân sự vẫn tồn tại nhưng việc sử dụng phải đi qua một môi trường chính trị khó hơn. [S43] |
| Nhiều nước và công chúng mở rộng quan hệ với phía cách mạng | Có thể kiểm tra qua các trường hợp Thụy Điển, Pháp, Cuba và hồ sơ phong trào xã hội bên dưới. **Phân tích:** công nhận ngoại giao, cứu trợ và phản chiến tạo ảnh hưởng khác nhau; không cộng chúng thành một khối viện trợ quân sự. |

### 7.2. Bảng các nước và loại tác động đã có nguồn kiểm tra

Bảng tập trung các chủ thể có vai trò rõ trong bộ nguồn đã khảo sát. Đây không phải danh sách mọi nước từng gửi một khoản cứu trợ hoặc ra một tuyên bố về Việt Nam.

| Chủ thể | Vai trò được xác định trong 1968–1975 | Điều cần phân biệt |
|---|---|---|
| Hoa Kỳ | Trực tiếp tác chiến, không kích, phong tỏa; rút quân từng bước; tiếp tục hỗ trợ VNCH và thương lượng. [S04] | Chính phủ, Quốc hội, quân đội và người dân có các lập trường khác nhau. |
| Liên Xô | Nguồn viện trợ quân sự và kinh tế lớn cho VNDCCH; đồng thời theo đuổi hòa dịu với Mỹ. [S68] [S88] | Không được đồng nhất hỗ trợ vật chất với quyền ra quyết định thay Hà Nội. |
| Trung Quốc | Hỗ trợ VNDCCH, hòa dịu với Mỹ, nhưng chiếm phần Hoàng Sa VNCH giữ năm 1974. [S68] [S96] | Lợi ích đồng minh có thể xung đột. |
| Lào, đặc biệt Pathet Lào | Hợp tác chiến đấu, bảo vệ hành lang trên đất Lào. [S23] | Lào có nội chiến và dân thường chịu thiệt hại. |
| Campuchia thời Sihanouk | Địa bàn căn cứ và kênh tiếp vận quan trọng, thay đổi sau 1970. [S80] | Phân biệt các chính quyền và lực lượng. |
| Chính quyền Lon Nol | Thay đổi điều kiện căn cứ sau đảo chính. [S03] | Khác với người dân Campuchia. |
| Khmer Đỏ | Chiếm Thổ Chu, sát hại cư dân năm 1975. [S81] | Quan hệ với Việt Nam chuyển sang xung đột. |
| Triều Tiên | Phi công tham gia bảo vệ miền Bắc trong phần đầu giai đoạn; có chuyên gia chiến tranh tâm lý tại miền Nam năm 1971. [S65] [S66] | Phân biệt đơn vị phi công với nhóm chuyên gia và thời gian hiện diện. |
| Hàn Quốc | Có lực lượng chiến đấu lớn hỗ trợ VNCH; hồ sơ năm 1968 ước tính khoảng 50.000 người. [S70] | Đây là ước tính tại một thời điểm, không phải tổng lượt quân cả cuộc chiến. |
| Thái Lan | Cung cấp căn cứ và quân tham chiến phía Mỹ–VNCH. [S69] | Phân biệt tác động căn cứ với quân số. |
| Australia | Lực lượng bộ binh, không quân, hải quân; huấn luyện, rồi rút quân và cứu trợ năm 1975. [S71] | Trong nước Australia cũng có phong trào phản đối chiến tranh. |
| New Zealand | Tham chiến cùng lực lượng Australia, sau đó huấn luyện và y tế; rút lực lượng theo từng đợt. [S72] | Không lấy năm rút bộ chiến làm năm kết thúc mọi nhân sự. |
| Philippines | Công binh, y tế, dân sự vụ và bảo vệ; phần lớn rút năm 1969. [S69] | Khác nhiệm vụ bộ binh Hàn Quốc. |
| Trung Hoa Dân quốc tại Đài Loan | Hỗ trợ chuyên môn và vận tải cho VNCH. [S69] | Phân biệt với Trung Quốc đại lục. |
| Nhật Bản | Hỗ trợ VNCH, đồng thời có Beheiren phản chiến. [S69] [S75] | Chính phủ và công chúng có thể khác lập trường. |
| Pháp | Tạo không gian cho đàm phán; cơ quan đại diện tại Hà Nội được nâng lên đại sứ quán tháng 6/1973. [S73] [S74] | Nước Pháp trong thời kỳ này không thể được mô tả đơn giản bằng vai trò thời chiến tranh Đông Dương trước 1954. |
| Thụy Điển | Quan hệ ngoại giao với VNDCCH từ 1969; Olof Palme công khai phê phán chiến tranh của Mỹ. [S63] [S64] | Thể chế phương Tây có thể có chính sách khác Mỹ. |
| Cuba | Ủng hộ chính trị, chuyến thăm Fidel năm 1973 và các công trình viện trợ, trong đó có bệnh viện Đồng Hới. [S61] [S62] | Cam kết, khởi công và đưa công trình vào sử dụng là ba mốc khác nhau. |
| CHDC Đức | Hỗ trợ và đào tạo, gồm các kỹ thuật an ninh được hồ sơ lưu trữ xác nhận. [S67] | Một phần hợp tác phục vụ bảo vệ và kiểm soát nhà nước, không chỉ cứu trợ dân sự. |
| Ba Lan và Hungary | Có hỗ trợ trong khối xã hội chủ nghĩa; tham gia cơ chế giám sát thi hành Paris. [S67] [S78] | Vai trò thành viên giám sát không có nghĩa hoàn toàn trung lập về quan điểm chính trị. |
| Canada, Indonesia; về sau Iran | Tham gia ICCS theo các giai đoạn; Iran thay Canada trong năm 1973. [S78] | ICCS là cơ chế giám sát, không phải một lực lượng có khả năng tự cưỡng chế mọi bên chấm dứt giao tranh. |

### 7.3. Ai can thiệp, ai đe dọa và ai sử dụng lực lượng xâm phạm lãnh thổ

- **Mỹ:** trực tiếp sử dụng lực lượng; báo động hạt nhân năm 1969 được phân tích ở mục 3.2. [S86]
- **Đồng minh của Mỹ:** nhiệm vụ tham gia khác nhau, từ bộ chiến đến hỗ trợ. [S69] [S70]
- **Trung Quốc tại Hoàng Sa:** hành động chiếm đóng; Mỹ không đứng ra bảo vệ yêu sách của VNCH. [S96] [S60]
- **Khmer Đỏ tại Thổ Chu:** chiếm đảo và sát hại cư dân, như niên biểu tháng 5/1975. [S81]

Không đưa chiến tranh biên giới phía Bắc năm 1979 hoặc chiến tranh quy mô lớn cuối thập niên 1970 vào niên biểu 1968–1975. Những sự kiện ấy thuộc phần nghiên cứu tiếp nối; không được dùng kết quả về sau để mặc định mọi động cơ của năm 1968 đã giống năm 1979.

## 8. Người dân nước ngoài có giúp Việt Nam không

**Có.** Những hình thức được xác minh gồm chuyển vật tư y tế, vận động hòa bình, biểu tình, hỗ trợ đoàn đàm phán, cứu trợ người bị thương và người phải di dời. Nhưng “giúp Việt Nam” có ít nhất ba nghĩa: ủng hộ mục tiêu chính trị của phía cách mạng; phản đối chiến tranh nhưng không ủng hộ mọi chính sách của phía nào; và cứu người theo nhu cầu nhân đạo. Không nên đồng nhất ba nhóm.

| Trường hợp có nguồn | Đã làm gì | Có thể kết luận tới đâu |
|---|---|---|
| Các nhóm Quaker và tàu Phoenix | Hồ sơ Swarthmore ghi chuyến đi chở vật tư y tế tới hai miền trong 1967–1968, cùng thư từ, ảnh, phim và nhật ký. [S76] | Có bằng chứng vật chất về cứu trợ, không chỉ lời tuyên bố đồng tình. |
| Beheiren ở Nhật Bản | Mạng công dân tổ chức hoạt động phản chiến; nghiên cứu của Oguma phân tích cách kết nối tự nguyện và truyền thông xã hội thời đó. [S75] | Một bộ phận xã hội Nhật tích cực chống chiến tranh; không đại diện mọi người Nhật. |
| Chính giới, người dân và người Việt tại Pháp | Hồi ức Võ Văn Sung nhấn mạnh môi trường Pháp, lực lượng quần chúng, báo chí và kiều bào hỗ trợ đấu tranh ngoại giao. [S74] | Có đóng góp tạo điều kiện cho đàm phán; không thể lượng hóa thành phần trăm thành công Paris. |
| Người Thụy Điển và Olof Palme | Lãnh đạo Thụy Điển công khai phản đối sự tham chiến của Mỹ, bên cạnh quan hệ nhà nước với VNDCCH. [S64] | Phân biệt hoạt động chính trị–dư luận với viện trợ quân sự. |
| ICRC và các hội Chữ thập đỏ | Báo cáo 1965–1972 ghi cứu trợ, thăm nơi giam giữ và hỗ trợ nạn nhân chiến tranh ở Đông Dương. [S77] | Cứu trợ theo nhiệm vụ nhân đạo không mặc nhiên là đứng về một phe. |
  | Công chúng Mỹ phản chiến | Hồ sơ các nhóm hòa bình ghi vận động và hành động công khai chống chiến tranh. [S76] | Đánh giá tác động cùng chiến trường, bầu cử và Quốc hội. |
| Nhân viên cứu trợ và lực lượng vận tải Australia năm 1975 | Có các chuyến hỗ trợ người di tản và cứu trợ trước, trong giai đoạn kết thúc chiến tranh. [S71] | Hoạt động nhân đạo cũng có thể do người thuộc một nước từng tham chiến thực hiện. |
| Các tổ chức quốc tế chăm sóc người phải rời quê hương | UNHCR ghi làn sóng di tản liên quan tới sự kết thúc chiến tranh năm 1975. [S83] | Phải ghi nhận người tị nạn là con người có nhu cầu bảo vệ, không chỉ như một công cụ tuyên truyền. |

**Phân tích:** sự ủng hộ quốc tế có thể tạo ra vật tư, nơi chữa trị, tiếng nói công luận, quan hệ ngoại giao và sức ép chính trị. Những con đường tác động đó khác nhau; không có nguồn nào trong hồ sơ này đủ để đo chính xác “nếu thiếu một phong trào thì chiến tranh kéo dài thêm bao nhiêu ngày”.

## 9. Những vấn đề phải giữ mở khi nghiên cứu sâu

### 9.1. Mậu Thân là thắng hay thua

Cần ghi tiêu chí trước khi trả lời: giữ mục tiêu, tiêu hao, bảo toàn lực lượng, huy động chính trị hay thay đổi chiến lược đối phương. **Phân tích:** hai nhận định về thắng lợi chính trị và tổn thất quân sự có thể cùng đúng. Niên biểu và văn kiện tự phê bình ở phần 3–4 cho phép kiểm tra từng mặt, thay vì ép toàn bộ sự kiện vào một nhãn.

### 9.2. Dân thường ở Huế và Sơn Mỹ

Quân sử Mỹ về Huế mô tả các vụ hành quyết, mộ tập thể và thương vong dân thường; báo cáo này giữ quy thuộc cho nguồn, không lấy số tổng của nguồn đó làm một con số đã được mọi giới nghiên cứu thống nhất. Điều tra Mỹ Lai xác nhận một thảm sát và cơ chế che giấu. **Phân tích:** phải nghiên cứu từng vụ, trách nhiệm từng lực lượng và nguyên nhân tử vong; không dùng tội ác ở nơi này để xóa trách nhiệm ở nơi khác. [S18] [S19]

### 9.3. Tổn thất B-52 tháng 12/1972

Nguồn Việt Nam [S38] ghi **34 B-52 bị bắn rơi**; tài liệu Không quân Mỹ [S37] ghi **15 B-52 bị mất** trong Linebacker II. Đây là hai thống kê có quy thuộc. Không lấy trung bình, không cộng và không mặc định hai bên dùng cùng phạm vi ghi nhận. Muốn đối chiếu dứt điểm cần danh sách số hiệu, ngày, địa điểm, tình trạng máy bay và quy tắc tính tổn thất.

### 9.4. Ném bom có đơn độc tạo ra Hiệp định Paris không

Hồ sơ thương lượng tháng 10/1972 chứng minh đã có cơ sở thỏa thuận trước tháng 12. **Phân tích:** không vì vậy mà phủ nhận mọi tác động của không chiến cuối năm; cũng không thể gán toàn bộ văn bản tháng 1/1973 cho sức ép ném bom. Cần so dự thảo, sửa đổi và vấn đề chấp thuận của các bên. [S93]

### 9.5. Viện trợ bị “cắt hết” có đúng không

Hồ sơ Ford ghi khoản 700 triệu USD đã được cấp cho năm tài khóa 1975 và đề nghị bổ sung 722 triệu. **Phân tích:** giảm viện trợ, giảm sức mua, phân bổ tiền, giao vật tư và hết viện trợ là những tình trạng khác nhau. Nghiên cứu nghiêm túc không được biến chúng thành một mệnh đề duy nhất. [S44]

### 9.6. Ai vi phạm Paris và vào thời điểm nào

**Phương pháp:** lập bảng theo từng vụ, gồm địa điểm, thời điểm, lực lượng, hành động, điều khoản liên quan và bằng chứng độc lập. Một tuyên bố tổng quát của một phía không đủ phân xử mọi vụ. Việc chiến tranh tiếp tục không làm mất ý nghĩa pháp lý của cam kết, nhưng cam kết trên giấy cũng không chứng minh đã thi hành đầy đủ.

### 9.7. Đồng minh viện trợ có điều khiển được Việt Nam không

Báo cáo CIA về viện trợ năm 1972 tự nhấn mạnh nhiều dữ liệu là ước tính. **Phân tích:** giá trị quy đổi từ nguồn tình báo không phải sổ giao nhận, còn tương quan tiền viện trợ không trực tiếp đo quyền quyết định chiến lược. Cần đối chiếu yêu cầu của Hà Nội, thỏa thuận cung cấp, hàng thực giao và điện trao đổi. [S88]

### 9.8. Ngày 30/4 và thống nhất nhà nước

Thông cáo hiệp thương tháng 11/1975 và tiến trình Quốc hội năm 1976 cho thấy có một quá trình hoàn tất thể chế sau thắng lợi quân sự. **Phân tích:** nói “thống nhất đất nước” theo ý nghĩa lịch sử–chính trị không được làm mất sự phân biệt giữa kết thúc chiến tranh và lập một hệ thống nhà nước chung. [S82] [S84]

## 10. Những điểm đã sửa hoặc làm rõ so với bộ hồ sơ đầu vào

| Vấn đề | Kết quả hiệu chỉnh trong bản này |
|---|---|
| “Niên biểu hằng ngày” | Là 108 dòng có nội dung và 2.814 dòng chờ, không phải 2.922 ngày đều có một diễn biến đã được xác minh. |
| Tên Đảng | Dùng Đảng Lao động Việt Nam cho thời kỳ 1968–1975; giải thích quan hệ với tên gọi hiện nay ở phần 2. |
| Ngày thành lập CPCMLT | Phân biệt mốc 6/6/1969 với đại hội kéo dài 6–8/6. |
| Trung ương 19 và 20 | Làm rõ nội dung kinh tế, quản lý, đời sống và chi viện; không mô tả thay thế cho toàn bộ kế hoạch tác chiến. |
| Trung ương 21 | Phân biệt hội nghị giữa năm với văn bản mang ngày 13/10/1973. |
| Đường ống xăng dầu | Không dùng khoảng 1.400 km của một phạm vi tuyến và gần 5.000 km của toàn hệ thống như hai số đo cùng đối tượng. Không chốt năm thông tới một kho cụ thể chỉ bằng một bài tổng thuật. |
| Kết thúc Chiến dịch Tây Nguyên | Ghi nhận hai phạm vi 24/3 và 3/4 trong các nguồn; lấy 4/3–3/4 theo nguồn quân sử được chỉ rõ khi nói toàn chiến dịch. |
| Quyết định rút Tây Nguyên | Tách ngày 14/3 quyết định, hoạt động từ 16/3 và đánh chặn tiếp theo; không chỉ ghi một ngày 17/3 cho toàn bộ quá trình. |
| Hoàng Sa 1974 | Bổ sung thành một nhánh sự kiện riêng, đặt cạnh ngoại giao Mỹ–Trung và vấn đề chủ quyền. |
| Các đảo Trường Sa tháng 4/1975 | Nêu tên và ngày của từng đảo trong niên biểu nguồn; không gom mọi đảo vào 29/4 hoặc nói kiểm soát toàn quần đảo. |
| Bệnh viện Cuba | Phân biệt cam kết 1973, khởi công 1974 và hoạt động từ 1981. |
| Nguồn chính thức có lỗi | Không theo câu Thiệu từ chức 22/4 trong một bài bảo tàng khi nguồn khác xác nhận 21/4; không lấy đoạn ghi Huế 25/3 để thay mốc 26/3. |
| Viện trợ Mỹ 1975 | Phân biệt khoản đã cấp, đề nghị bổ sung, sức mua và hàng thực giao. |
| Sau 15/8/1973 | Nêu đúng sự kết thúc chiến dịch ném bom kéo dài, không khẳng định Mỹ không còn bất kỳ hoạt động sử dụng lực lượng nào ở Đông Nam Á. |
| Sau 30/4/1975 | Bổ sung Thổ Chu, người tị nạn và tiến trình thống nhất nhà nước. |
| Ảnh trong PDF/DOCX | Xác định 17 ảnh là liên kết ngoài, bản PDF chứa ảnh khung thông báo; không khẳng định đã có đủ ảnh gốc trong tệp. |

Những thay đổi trên là kết quả so sánh bộ đầu vào với các nguồn cụ thể được dẫn ở phần nội dung. Bản Markdown mới không ghi đè hoặc sửa các tệp gốc.

## 11. Bản lưu phiên và hướng nghiên cứu tiếp

### 11.1. Công việc đã hoàn thành trong phiên 26/10/2026

1. Quét đệ quy thư mục VNR, kiểm kê 11 tệp đầu vào và tính SHA-256.
2. Trích xuất toàn văn DOCX, PDF; đọc TXT, nội dung HTML và toàn bộ CSV; xác định tệp trùng và phần nội dung lặp.
3. So sánh hai PDF trên văn bản trích xuất, dựng ảnh thu nhỏ 48 trang và kiểm tra ảnh nội bộ DOCX.
4. Tra cứu nguồn trực tuyến, ưu tiên văn kiện, lưu trữ, cơ quan lập pháp, bảo tàng, quân sử và nghiên cứu có xuất xứ.
5. Viết niên biểu 1968–1975, nhánh Đảng, phân tích tác động, bảng quốc tế, viện trợ nhân dân và các vấn đề tranh luận.
6. Lưu kết quả, phương pháp, giới hạn, danh mục nguồn và tình trạng tiếp nối vào chính file Markdown này.

Đây là bản ghi kết quả và tiến trình công việc, không phải bản chép nguyên văn mọi thông báo hoặc mọi kết quả công cụ. Với nguồn mạng, việc khảo sát có thể là đọc trang, đoạn hồ sơ liên quan, bản PDF hoặc trích xuất được công cụ tra cứu lập chỉ mục. **Không tuyên bố đã đọc toàn bộ mọi cuốn sách hoặc mọi tập FRUS được liên kết.** Các chú giải cuối tài liệu nêu phạm vi dùng của từng nguồn.

### 11.2. Giới hạn còn lại

- Chưa xây dựng niên biểu tới cấp từng xã, tiểu đoàn và từng phi vụ trong toàn bộ tám năm.
- Chưa có bộ sổ thương vong và người mất tích đối chiếu từng tên giữa các phía.
- Chưa đọc toàn bộ hồ sơ VNCH ở cấp phủ tổng thống, bộ tổng tham mưu, tỉnh và quân khu; một số nội dung được tiếp cận qua hồ sơ Mỹ hoặc nghiên cứu có dẫn tư liệu VNCH.
- Hồ sơ viện trợ Trung Quốc, Liên Xô và các nước xã hội chủ nghĩa khác chưa được đối chiếu đầy đủ với chứng từ giao nhận nguyên bản; không đưa bảng tổng giá trị như số quyết toán cuối cùng.
- Chưa xác minh lại từng âm bản, chú thích gốc và quyền tái sử dụng của toàn bộ 17 liên kết ảnh trong gói cũ.
- Các tác động nhân đạo, giam giữ, cải tạo, hồi cư và di tản sau chiến tranh cần một hồ sơ chuyên đề; không thể khép lại bằng vài mục niên biểu.

### 11.3. Cách tiếp tục từ file này

Mỗi mục bổ sung nên theo một mẫu thống nhất:

> **Ngày hoặc khoảng thời gian — Địa điểm — Chủ thể — Hành động — Kết quả trực tiếp — Cơ chế ảnh hưởng — Nguồn cụ thể và mã lưu trữ/trang — Bằng chứng đối chiếu — Điểm còn bất định.**

Ưu tiên tiếp theo: nhật ký và báo cáo cấp đơn vị ở Quảng Trị, Tây Nguyên, Đông Nam Bộ, Tây Nam Bộ; hồ sơ sản xuất–vận tải; dữ liệu dân thường, y tế và môi trường; nguồn gốc VNCH; chứng từ viện trợ và phản hồi của chính phủ các nước. Khi chưa có ngày hoặc bằng chứng chắc chắn, giữ mục đó ở trạng thái câu hỏi nghiên cứu.

Không biến các khoảng trống thành khẳng định “không có sự kiện”, không dùng ảnh minh họa làm chứng cứ duy nhất và không suy từ thắng lợi cuối cùng rằng mọi bước trước đó là tất yếu.

## 12. Danh mục nguồn có chú giải

Ngày tra cứu của phiên: **26/10/2026**. Mã nguồn là liên kết bền trong cấu trúc tài liệu này, không phải chứng nhận rằng nguồn hoàn toàn không có thiên lệch. Những nhận định chính trị trong tài liệu gốc phải được hiểu là phát biểu của chủ thể phát ngôn. Danh mục chỉ rõ loại nguồn và phần được dùng để người đọc tự kiểm tra.

**Tổng số mục nguồn được dẫn trong hồ sơ: 98.**

- **S01** — [Office of the Historian — The Tet Offensive 1968](https://history.state.gov/milestones/1961-1968/tet). **Loại:** Tổng thuật chính thức. **Phạm vi dùng:** Mậu Thân và thay đổi chính sách Mỹ; đọc cùng văn kiện Việt Nam.

- **S02** — [NARA — Remembering Vietnam Episodes 5–8](https://www.archives.gov/exhibits/remembering-vietnam-online-exhibit-episodes-5-8). **Loại:** Lưu trữ và triển lãm. **Phạm vi dùng:** Tài liệu gốc về 1968–1969, vụ Chennault và công luận.

- **S03** — [NARA — Remembering Vietnam Episodes 9–12](https://www.archives.gov/exhibits/remembering-vietnam-online-exhibit-episodes-9-12). **Loại:** Lưu trữ và triển lãm. **Phạm vi dùng:** Campuchia, 1971–1975; lời bình triển lãm là diễn giải của cơ quan biên soạn.

- **S04** — [Office of the Historian — Ending the Vietnam War 1969–1973](https://history.state.gov/milestones/1969-1976/ending-vietnam). **Loại:** Tổng thuật chính thức. **Phạm vi dùng:** Việt Nam hóa, đàm phán và giới hạn các cam kết của Nixon.

- **S05** — [FRUS 1964–1968 VI — Document 230](https://history.state.gov/historicaldocuments/frus1964-68v06/d230). **Loại:** Hồ sơ ngoại giao. **Phạm vi dùng:** Phiên toàn thể đầu tiên ngày 13/5/1968, không phải nguồn cho mọi diễn biến tháng 5.

- **S06** — [Nghị quyết Hội nghị Trung ương 14 tháng 1/1968](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-hoi-nghi-lan-thu-14-cua-trung-uong-dang-thang-11968-806). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Mục tiêu tổng công kích, tổng khởi nghĩa và phối hợp ngoại giao.

- **S07** — [Nghị quyết 196-NQ/TW ngày 10/3/1970 — Trung ương 18](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-196-nqtw-ngay-1031970-hoi-nghi-lan-thu-18-ban-chap-hanh-trung-uong-ve-tinh-hinh-va-nhiem-vu-818). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Nhận định Việt Nam hóa, bình định và nhiệm vụ hai miền.

- **S08** — [Nghị quyết 214-NQ/TW ngày 1/3/1971 — Trung ương 19](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-214-nqtw-ngay-131971-hoi-nghi-lan-thu-19-ban-chap-hanh-trung-uong-dang-819). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Khôi phục, phát triển kinh tế và sản xuất miền Bắc.

- **S09** — [Nghị quyết 219-NQ/TW ngày 4/4/1972 — Trung ương 20](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-219-nqtw-ngay-441972-hoi-nghi-lan-thu-20-ban-chap-hanh-trung-uong-dang-808). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Kế hoạch nhà nước, đời sống và chi viện năm 1972.

- **S10** — [Nghị quyết 227-NQ/TW ngày 13/10/1973 — Trung ương 21](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-227-nqtw-ngay-13101973-hoi-nghi-lan-thu-21-ban-chap-hanh-trung-uong-dang-810). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Tổng kết, tự phê bình sau Mậu Thân và đường lối sau Paris.

- **S11** — [Nghị quyết 240-NQ/TW ngày 25/12/1974 — Trung ương 23](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-240-nqtw-ngay-25121974-hoi-nghi-lan-thu-23-ban-chap-hanh-trung-uong-dang-813). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Tăng cường lãnh đạo, tổ chức và sức chiến đấu của Đảng.

- **S12** — [Nghị quyết 247-NQ/TW ngày 29/9/1975 — Trung ương 24](https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-247-nqtw-ngay-2991975-hoi-nghi-lan-thu-24-cua-ban-chap-hanh-trung-uong-dang-lao-dong-viet-nam-ve-nhiem-vu-814). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Thống nhất nhà nước, khôi phục kinh tế và nhiệm vụ sau chiến tranh.

- **S13** — [Báo Chính phủ — Chính phủ Cách mạng lâm thời và khát vọng hòa bình](https://baochinhphu.vn/chinh-phu-cach-mang-lam-thoi-cong-hoa-mien-nam-viet-nam-bieu-tuong-cua-khat-vong-hoa-binh-102230606165435284.htm). **Loại:** Tổng thuật hội thảo. **Phạm vi dùng:** Đại hội 6–8/6/1969, đoàn PRG và trụ sở Cam Lộ năm 1973.

- **S14** — [Bảo tàng Lịch sử Quốc gia — Ngày 6/6/1969 thành lập Chính phủ Cách mạng lâm thời](https://baotanglichsuquocgia.vn/vi/Articles/2002/68277/ngay-6-6-1969-thanh-lap-chinh-phu-cach-mang-lam-thoi-cong-hoa-mien-nam-viet-nam.html). **Loại:** Tư liệu bảo tàng. **Phạm vi dùng:** Dùng cho mốc thành lập; không theo các câu cuối bài về thời điểm kết thúc chính phủ vì cần đối chiếu với năm 1976.

- **S15** — [QĐND Hậu cần — Trung đoàn 664 55 năm xây dựng](https://hc.qdnd.vn/lich-su-hau-can/trung-doan-664-55-nam-xay-dung-phat-trien-va-truong-thanh-482335). **Loại:** Quân sử và truyền thống. **Phạm vi dùng:** Thi công đường ống và tổng chiều dài toàn hệ thống.

- **S16** — [QĐND Hậu cần — Bảo đảm giao thông chống chia cắt chiến lược năm 1968](https://hc.qdnd.vn/lich-su-hau-can/bao-dam-giao-thong-van-tai-chong-chia-cat-chien-luoc-tren-dia-ban-quan-khu-4-nam-1968-481444). **Loại:** Tổng thuật hậu cần. **Phạm vi dùng:** Đồng Lộc và tuyến ống vượt khu vực Vinh–Nam Đàn–Linh Cảm.

- **S17** — [QĐND — Trận đầu của Bộ đội Tăng thiết giáp tại Làng Vây](https://www.qdnd.vn/xa-hoi/chinh-sach/binh-chung-tang-thiet-giap-ky-niem-50-nam-danh-thang-tran-dau-530592). **Loại:** Quân sử và truyền thống. **Phạm vi dùng:** Đêm 6 rạng 7/2/1968; không sử dụng số thương vong chưa đối chiếu.

- **S18** — [U.S. Army CMH — Staying the Course October 1967–September 1968](https://history.army.mil/portals/143/Images/Publications/catalog/91-15.pdf). **Loại:** Quân sử chính thức. **Phạm vi dùng:** Phần Aftermath trận Huế, trang in 428; quan điểm và tài liệu của quân sử Mỹ.

- **S19** — [Army University Press — The Moral Courage Paradox The Peers Report and My Lai](https://www.armyupress.army.mil/books/browse-books/ibooks-and-epubs/the-moral-courage-paradox/). **Loại:** Nghiên cứu trên hồ sơ điều tra. **Phạm vi dùng:** Thảm sát, che giấu và trách nhiệm chỉ huy; không dùng lỗi năm trên một trang quân đội khác.

- **S20** — [U.S. Army — Former Commander Remembers Hamburger Hill](https://www.army.mil/article/126180/Former_Commander_Remembers_Hamburger_Hill/). **Loại:** Phỏng vấn nhân chứng. **Phạm vi dùng:** Lời kể Bob Harkins; cần phân biệt trải nghiệm cá nhân và tổng kết chiến dịch.

- **S21** — [FRUS 1969–1976 VI — Document 74 Phoenix and PRU](https://history.state.gov/historicaldocuments/frus1969-76v06/d74). **Loại:** Hồ sơ sơ cấp. **Phạm vi dùng:** Bản ghi nhớ 28/5/1969, cấu trúc tình báo và chuyển giao CIA–MACV.

- **S22** — [U.S. Army CMH — MACV The Joint Command in the Years of Withdrawal 1968–1973](https://history.army.mil/portals/143/Images/Publications/catalog/91-7.pdf). **Loại:** Quân sử chính thức. **Phạm vi dùng:** Chương South Vietnam Waging the One War, cải cách ruộng đất và bình định.

- **S23** — [Bảo tàng Lịch sử Quân sự — Liên minh Việt Nam–Lào trong Đường 9 Nam Lào](https://btlsqsvn.mod.gov.vn/nhan-vat-su-kien/chi-tiet/lien-minh-chien-dau-viet-nam-lao-trong-chien-dich-duong-9-nam-lao-1971-201ab52c-adee-47f0-99b0-b104a6a1396f). **Loại:** Quân sử bảo tàng. **Phạm vi dùng:** Phân biệt toàn chiến dịch phản công và ngày quân VNCH vượt biên giới.

- **S24** — [Naval History and Heritage Command — H-Gram 070](https://www.history.navy.mil/content/history/nhhc/about-us/leadership/director/directors-corner/h-grams/h-gram-070.html). **Loại:** Quân sử chính thức. **Phạm vi dùng:** Tiến công 1972, vai trò hỏa lực Mỹ và phòng thủ An Lộc, Kon Tum.

- **S25** — [QĐND — Sử dụng lực lượng và tổ chức chiến đấu linh hoạt tại Quảng Trị](https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/su-dung-luc-luong-va-to-chuc-chien-dau-linh-hoat-439626). **Loại:** Phân tích quân sử. **Phạm vi dùng:** 81 ngày Thành cổ, rút quân ngày 16/9/1972 và phòng ngự tiếp theo.

- **S26** — [QĐND SKNC — Hệ thống các tuyến đường Trường Sơn](https://sknc.qdnd.vn/ho-so-tu-lieu/he-thong-cac-tuyen-duong-truong-son-501426). **Loại:** Tổng thuật hậu cần. **Phạm vi dùng:** Mạng đường, giao liên cơ giới, thông tin; số liệu đường ống có phạm vi riêng.

- **S27** — [National Museum of the USAF — Igloo White](https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195948/igloo-white/). **Loại:** Tư liệu bảo tàng. **Phạm vi dùng:** Chuỗi cảm biến, máy bay chuyển tiếp, trung tâm Nakhon Phanom.

- **S28** — [QĐND SKNC — Đường K là gì](https://sknc.qdnd.vn/con-nguoi-cuoc-song/duong-k-la-gi-500593). **Loại:** Tư liệu hậu cần. **Phạm vi dùng:** Chủ trương đường kín giữa năm 1971 và vận chuyển thích nghi.

- **S29** — [QĐND SKNC — Người lãnh đạo cuộc sơ tán lịch sử ở Hà Nội](https://sknc.qdnd.vn/theo-dong-su-kien/nguoi-lanh-dao-cuoc-so-tan-lich-su-o-ha-noi-502795). **Loại:** Tư liệu và hồi ức. **Phạm vi dùng:** Lũ tháng 8/1971, quản trị đô thị và sơ tán năm 1972.

- **S30** — [QĐND — Ngọn cờ đào mùa thu năm ấy](https://www.qdnd.vn/bao-qdnd-xuan-tan-suu-2021/bao-qdnd-cuoi-tuan-xuan-tan-suu-2021/ngon-co-dao-mua-thu-nam-ay-649932). **Loại:** Hồi ức nhân chứng. **Phạm vi dùng:** Lễ nhập ngũ sinh viên 6/9/1971 và chi phí nhân lực.

- **S31** — [QĐND — Hành trình đến Hiệp định Paris 1973](https://www.qdnd.vn/tu-lieu-ho-so/ho-so/hanh-trinh-den-hiep-dinh-paris-1973-717204). **Loại:** Tổng thuật ngoại giao. **Phạm vi dùng:** Đàm phán bốn bên, sáng kiến Nguyễn Thị Bình ngày 1/7/1971.

- **S32** — [Office of the Historian — Rapprochement with China 1972](https://history.state.gov/milestones/1969-1976/rapprochement-china). **Loại:** Tổng thuật chính thức. **Phạm vi dùng:** Hòa dịu Mỹ–Trung và lợi ích chống thế Liên Xô.

- **S33** — [FRUS 1969–1976 XIV — Document 117 Soviet Military Aid](https://history.state.gov/historicaldocuments/frus1969-76v14/d117). **Loại:** Ước tính tình báo đương thời. **Phạm vi dùng:** Ngày 17/4/1972; nêu rõ suy đoán của CIA và tính độc lập của Hà Nội.

- **S34** — [FRUS 1969–1976 VIII — Document 132](https://history.state.gov/historicaldocuments/frus1969-76v08/d132). **Loại:** Hồ sơ quyết sách. **Phạm vi dùng:** Quyết định phong tỏa cảng và khác biệt ngày Mỹ–Việt Nam.

- **S35** — [United Nations Treaty Series volume 935 — Paris Agreements](https://treaties.un.org/doc/Publication/UNTS/Volume%20935/v935.pdf). **Loại:** Văn bản sơ cấp. **Phạm vi dùng:** Hiệp định số 13295, điều 1–23; nghị định thư, Định ước 2/3 và Thông cáo 13/6/1973.

- **S36** — [FRUS 1969–1976 XLII — Document 71 Paris Accords and Understandings](https://history.state.gov/historicaldocuments/frus1969-76v42/d71). **Loại:** Hồ sơ ngoại giao. **Phạm vi dùng:** Ký tắt 23/1, ký 27/1/1973 và các hiểu biết không công bố.

- **S37** — [Department of the Air Force History — Tư liệu về Linebacker II](https://www.dafhistory.af.mil/Portals/16/documents/Studies/101-150/AFD-090529-051.pdf). **Loại:** Quân sử chính thức. **Phạm vi dùng:** Đoạn trang in 53 ghi 15 B-52 bị mất; giữ nguyên phạm vi thống kê của nguồn Mỹ.

- **S38** — [QĐND — Ngày 30/12/1972 chiến dịch Hà Nội Điện Biên Phủ trên không thắng lợi](https://www.qdnd.vn/chinh-tri/tin-tuc/ngay-30-12-1972-chien-dich-ha-noi-dien-bien-phu-tren-khong-thang-loi-422789). **Loại:** Tổng kết phía Việt Nam. **Phạm vi dùng:** Nguồn Việt Nam ghi 34 B-52; không gộp với số của Mỹ.

- **S39** — [QĐND — Làm chủ bảo vệ cảng Cửa Việt](https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/lam-chu-bao-ve-cang-cua-viet-469070). **Loại:** Tư liệu chiến đấu. **Phạm vi dùng:** Giao tranh 28–31/1/1973, ngay sau khi ngừng bắn có hiệu lực.

- **S40** — [QĐND — Thực hiện trọn vẹn mong ước Bắc Nam sum họp](https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/thuc-hien-tron-ven-mong-uoc-cua-bac-ho-bac-nam-sum-hop-xuan-nao-vui-hon-438430). **Loại:** Tổng thuật quân sự. **Phạm vi dùng:** Chương Thiện 1973 và quan hệ chỉ đạo trung ương–địa phương.

- **S41** — [QĐND — Quân đội nhân dân Việt Nam 80 năm trang sử hào hùng](https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/quan-doi-nhan-dan-viet-nam-80-nam-trang-su-hao-hung-808060). **Loại:** Quân sử tổng thuật. **Phạm vi dùng:** Tháng thành lập các quân đoàn và Đoàn 232.

- **S42** — [Congressional Research Service R45749 — War Legacy Issues UXO](https://www.congress.gov/crs_external_products/R/PDF/R45749/R45749.1.pdf). **Loại:** Báo cáo Quốc hội. **Phạm vi dùng:** Ngày 15/8/1973 và di sản bom mìn; báo cáo công bố 3/6/2019.

- **S43** — [U.S. House History — The War Powers Resolution](https://history.house.gov/Historical-Highlights/1951-2000/The-War-Powers-Resolution/). **Loại:** Lịch sử lập pháp. **Phạm vi dùng:** Veto 24/10 và vượt veto tháng 11/1973; khác với cắt kinh phí chiến đấu.

- **S44** — [Ford Library — Legislation Required to Implement the President’s Address 10/4/1975](https://www.fordlibrarymuseum.gov/library/document/0067/1564065.pdf). **Loại:** Bản ghi nhớ sơ cấp. **Phạm vi dùng:** 700 triệu USD đã cấp và đề nghị bổ sung 722 triệu; phân biệt authorization và appropriation.

- **S45** — [FRUS 1969–1976 X — Document 148 Ford and Vuong Van Bac](https://history.state.gov/historicaldocuments/frus1969-76v10/d148). **Loại:** Biên bản sơ cấp. **Phạm vi dùng:** Ngày 5/10/1974; lạm phát, tinh thần địa phương quân và nhu cầu viện trợ theo lời người tham dự.

- **S46** — [QĐND — Chiến thắng Thượng Đức](https://www.qdnd.vn/ho-so-su-kien/70-nam-quan-doi-nhan-dan-viet-nam-anh-hung/chien-thang-thuong-duc-buoc-phat-trien-vuot-bac-ve-trinh-do-va-kha-nang-tac-chien-cua-quan-doi-ta-261594). **Loại:** Phân tích quân sử. **Phạm vi dùng:** Tiến công 29/7, khó khăn ban đầu, chiếm chi khu 7/8/1974.

- **S47** — [QĐND — Đường 14 Phước Long đòn trinh sát chiến lược](https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/nghe-thuat-quan-su/chien-dich-duong-14-phuoc-long-don-trinh-sat-chien-luoc-cho-thay-kha-nang-doi-pho-han-che-cua-my-806226). **Loại:** Phân tích quân sử. **Phạm vi dùng:** Chiến dịch 13/12/1974–6/1/1975 và phản ứng Mỹ.

- **S48** — [QĐND — Ngày 4/3/1975 Chiến dịch Tây Nguyên](https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-4-3-1975-quan-doi-nhan-dan-viet-nam-tien-hanh-chien-dich-tay-nguyen-687444). **Loại:** Quân sử tổng thuật. **Phạm vi dùng:** Dùng phạm vi chiến dịch 4/3–3/4/1975.

- **S49** — [Bảo tàng Lịch sử Quốc gia — Chiến dịch Tây Nguyên](https://baotanglichsu.vn/VI/Articles/3097/13921/chien-dich-tay-nguyen-tu-4-3-djen-24-3-1975.html). **Loại:** Tư liệu bảo tàng. **Phạm vi dùng:** Bài cũ dùng mốc kết thúc 24/3; lưu để giải thích khác biệt phạm vi.

- **S50** — [QĐND SKNC — Trận then chốt thứ hai Chiến dịch Tây Nguyên](https://sknc.qdnd.vn/ky-niem-sau-sac/tran-then-chot-thu-hai-cua-chien-dich-tay-nguyen-497845). **Loại:** Hồi ức và quân sử. **Phạm vi dùng:** Quyết định 14/3, cơ động chặn Đường 7 ngày 16–17/3/1975.

- **S51** — [Cổng thông tin thành phố Huế — Tổ chức hành chính](https://hue.gov.vn/Trang-chu/To-chuc-hanh-chinh/orgid/81b5a28c-0791-48a5-bba7-192fc8bfc738). **Loại:** Lịch sử cơ quan địa phương. **Phạm vi dùng:** Xác nhận ngày 26/3/1975 giải phóng Thừa Thiên Huế.

- **S52** — [Bảo tàng Lịch sử Quốc gia — Chiến dịch Huế Đà Nẵng](https://baotanglichsu.vn/vi/Articles/3097/13899/chien-dich-hue-dja-nang-213-djen-29-3-1975.html). **Loại:** Tư liệu bảo tàng. **Phạm vi dùng:** Dùng cho chiến dịch và ngày Đà Nẵng; các chi tiết Huế 25/3, địa danh phải đối chiếu.

- **S53** — [Bảo tàng Lịch sử Quốc gia — Chiến dịch Xuân Lộc](https://baotanglichsu.vn/vi/Articles/3097/14025/chien-dich-xuan-loc-tu-9-4-djen-21-4-1975.html). **Loại:** Tư liệu bảo tàng. **Phạm vi dùng:** Chiến dịch 9–21/4 và thay đổi chính quyền Sài Gòn.

- **S54** — [Bảo tàng Lịch sử Quốc gia — Chiến dịch Hồ Chí Minh lịch sử](https://baotanglichsuquocgia.vn/vi/Articles/3097/14153/chien-dich-ho-chi-minh-lich-su-26-4-30-4-1975.html). **Loại:** Tư liệu bảo tàng. **Phạm vi dùng:** Đòn cuối tháng 4; không dùng câu ghi Thiệu từ chức 22/4 vì nguồn khác xác nhận 21/4.

- **S55** — [QĐND — Bộ tư lệnh Chiến dịch Hồ Chí Minh](https://www.qdnd.vn/tu-lieu-ho-so/van-kien-tu-lieu/bo-tu-lenh-chien-dich-ho-chi-minh-826021). **Loại:** Quân sử và tư liệu chỉ huy. **Phạm vi dùng:** Phước Long, tổ chức và vai trò bộ chỉ huy chiến dịch.

- **S56** — [QĐND Media — Giải phóng các đảo Trường Sa](https://media.qdnd.vn/tiep-lua-truyen-thong/giai-phong-quan-dao-truong-sa-chien-cong-khang-dinh-chu-quyen-54433). **Loại:** Niên biểu quân sử. **Phạm vi dùng:** Song Tử Tây 14/4, Sơn Ca 25/4, Nam Yết 27/4, Sinh Tồn 28/4, Trường Sa 29/4/1975.

- **S57** — [FRUS 1969–1976 X — Document 271 Kissinger to Martin](https://history.state.gov/historicaldocuments/frus1969-76v10/d271). **Loại:** Điện sơ cấp. **Phạm vi dùng:** Quyết định di tản ngày 29/4/1975, giờ ghi trên điện là UTC.

- **S58** — [Naval History — Use of Naval Forces in the Post-War Era](https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/u/use-naval-forces-post-war-era.html). **Loại:** Tổng thuật hoạt động. **Phạm vi dùng:** Frequent Wind và Mayaguez; dùng để bác bỏ khẳng định tuyệt đối Mỹ không còn tác chiến sau 1973.

- **S59** — [Veith và Pribbenow — The Return to War CWIHP Working Paper 84](https://infosphereinvaders.wilsoncenter.org/sites/default/files/media/documents/publication/veith_pribbenow_cwihp_working_paper_84_north_vietnamese_decisionmaking_1973-1975.pdf). **Loại:** Nghiên cứu và bản dịch văn kiện. **Phạm vi dùng:** Tháng 11/2017; phân biệt bài dẫn nhập với văn kiện Việt Nam được dịch lại.

- **S60** — [FRUS 1969–1976 XVIII — Document 66 Paracel Islands](https://history.state.gov/historicaldocuments/frus1969-76v18/d66). **Loại:** Biên bản sơ cấp. **Phạm vi dùng:** Ngày 23/1/1974, lập trường Mỹ trong trao đổi với Trung Quốc sau trận Hoàng Sa.

- **S61** — [Báo Chính phủ — Kỷ niệm chuyến thăm Fidel Castro tháng 9/1973](https://baochinhphu.vn/ky-niem-trong-the-50-nam-lanh-tu-cuba-fidel-castro-tham-vung-giai-phong-mien-nam-viet-nam-102230926195056429.htm). **Loại:** Tổng thuật chính thức. **Phạm vi dùng:** Ngày 15/9 đến vùng giải phóng Quảng Trị; ảnh và nội dung chuyến thăm.

- **S62** — [QĐND TTXVN — Bệnh viện Hữu nghị Việt Nam Cuba Đồng Hới](https://www.qdnd.vn/chinh-tri/tin-tuc/quang-binh-doan-dai-bieu-cuba-tham-benh-vien-huu-nghi-viet-nam-cuba-dong-hoi-744295). **Loại:** Tư liệu công trình. **Phạm vi dùng:** Cam kết 1973, khởi công 19/5/1974, khai trương 1981.

- **S63** — [Đại sứ quán Thụy Điển tại Hà Nội — About us](https://www.swedenabroad.se/de/botschaften/vietnam-hanoi/about-us/). **Loại:** Lịch sử quan hệ chính thức. **Phạm vi dùng:** Quan hệ ngoại giao ngày 11/1/1969 với VNDCCH.

- **S64** — [Government of Sweden — Olof Palme](https://www.government.se/articles/2016/02/olof-palme/). **Loại:** Tiểu sử chính thức. **Phạm vi dùng:** Phê phán sự tham chiến của Mỹ; không suy rộng thành mọi người Thụy Điển cùng lập trường.

- **S65** — [Wilson Center — North Korean Pilots in the Skies over Vietnam](https://www.wilsoncenter.org/sites/default/files/media/documents/publication/NKIDP_eDossier_2_North_Korean_Pilots_in_Vietnam_War.pdf). **Loại:** Tài liệu dịch và nghiên cứu. **Phạm vi dùng:** Thỏa thuận quân sự 1966 và phi công hoạt động 1967–đầu 1969.

- **S66** — [Wilson Center — North Korean Psychological Warfare Operations in South Vietnam](https://www.wilsoncenter.org/blog-post/north-korean-psychological-warfare-operations-south-vietnam). **Loại:** Nghiên cứu và trích tài liệu. **Phạm vi dùng:** Nhóm chuyên gia tại Bình Định năm 1971; không khái quát số lượng toàn chiến trường.

- **S67** — [Martin Grossheim — Fraternal Support CWIHP Working Paper 71](https://infosphereinvaders.wilsoncenter.org/sites/default/files/media/documents/publication/CWIHP_Working_Paper_71_East_German_Stasi_Vietnam_War.pdf). **Loại:** Nghiên cứu lưu trữ Đông Đức. **Phạm vi dùng:** Tháng 9/2014; đào tạo kỹ thuật an ninh 1967–1969 và hợp tác có mặt trái.

- **S68** — [Wilson Center — Vietnam Soviet Union China Triangle with Pham Quang Minh](https://www.wilsoncenter.org/event/work-progress-the-vietnam-soviet-union-china-triangle-relations-during-the-vietnam-war-1964). **Loại:** Tổng thuật thảo luận học thuật. **Phạm vi dùng:** Hỗ trợ và bất đồng giữa đồng minh; đây là lập luận học thuật có quy thuộc tác giả.

- **S69** — [U.S. Army CMH — Allied Participation in Vietnam](https://history.army.mil/portals/143/Images/Publications/catalog/90-5-1.pdf). **Loại:** Quân sử chính thức. **Phạm vi dùng:** Các chương Thái Lan, Philippines, Trung Hoa Dân quốc và Hàn Quốc.

- **S70** — [FRUS 1964–1968 XXIX part 1 — Document 200](https://history.state.gov/historicaldocuments/frus1964-68v29p1/d200). **Loại:** Hồ sơ sơ cấp. **Phạm vi dùng:** Phụ lục ước tính khoảng 50.000 quân Hàn Quốc tại Việt Nam năm 1968.

- **S71** — [Australian War Memorial — Vietnam War 1962–75](https://www.awm.gov.au/articles/event/vietnam). **Loại:** Quân sử bảo tàng. **Phạm vi dùng:** Tham chiến, phản chiến, rút quân và cứu trợ năm 1975.

- **S72** — [NZ Ministry for Culture and Heritage — The Vietnam War](https://nzhistory.govt.nz/war/vietnam-war). **Loại:** Lịch sử chính thức. **Phạm vi dùng:** Tác chiến, huấn luyện, y tế và rút lực lượng 1971–1972.

- **S73** — [Archives diplomatiques France — Délégation générale Hanoi](https://archivesdiplomatiques.diplomatie.gouv.fr/ark%3A/14366/dmbxtl1nrkh6). **Loại:** Mục lục lưu trữ chính thức. **Phạm vi dùng:** Ngày nâng cơ quan đại diện lên đại sứ quán 6/6/1973 và thống nhất nhà nước năm 1976.

- **S74** — [Bảo tàng Lịch sử Quốc gia — Những chuyện ít biết về Hiệp định Paris](https://baotanglichsu.vn/vi/Articles/3096/13545/nhung-chuyen-it-biet-ve-hiep-djinh-paris.html). **Loại:** Hồi ức ngoại giao có quy thuộc. **Phạm vi dùng:** Theo Võ Văn Sung, vai trò chính giới Pháp, người Việt và quần chúng tại Paris.

- **S75** — [Oguma Eiji — What Was and Is 1968 Japanese Experience](https://apjjf.org/2018/11/oguma). **Loại:** Nghiên cứu học thuật. **Phạm vi dùng:** Mạng Beheiren và huy động xã hội Nhật Bản; không phải quan điểm chính phủ Nhật.

- **S76** — [Swarthmore College Peace Collection — Quaker Testimony for Peace](https://www1.swarthmore.edu/library/peace/manuscriptcollections/Peace%20in%20Friends/Peace_Testimony_Archives.html). **Loại:** Mục lục lưu trữ đại học. **Phạm vi dùng:** Hồ sơ AQAG DG074, tàu Phoenix chở vật tư y tế tới hai miền 1967–1968.

- **S77** — [ICRC — Activities in Indochina from 1965 to 1972](https://international-review.icrc.org/sites/default/files/S0020860400015606a.pdf). **Loại:** Báo cáo tổ chức nhân đạo. **Phạm vi dùng:** Cứu trợ và thăm nơi giam giữ; tiếp cận không đồng đều giữa các bên.

- **S78** — [QĐND SKNC — Vị tướng Hungary nặng nghĩa tình với Việt Nam](https://sknc.qdnd.vn/khach-den-viet-nam/vi-tuong-hungary-nang-nghia-tinh-voi-viet-nam-503045). **Loại:** Phỏng vấn nhân chứng. **Phạm vi dùng:** ICCS; lời kể Botz László có thông tin về giúp đỡ và thu thập tin.

- **S79** — [QĐND SKNC — Một thủ lĩnh của con đường tiền tệ](https://sknc.qdnd.vn/nhan-vat/mot-thu-linh-cua-con-duong-tien-te-500724). **Loại:** Hồi ức và phỏng vấn. **Phạm vi dùng:** B29, Lữ Minh Châu và nguồn ngoại tệ; số 1965–1975 không được gán riêng 1968–1975.

- **S80** — [QĐND — Con đường tiền tệ chi viện chiến trường](https://www.qdnd.vn/ho-so-su-kien/40-nam-chien-thang-vi-dai-30-4/huyen-thoai-con-duong-tien-te-chi-vien-chien-truong-259893). **Loại:** Tư liệu và lời kể. **Phạm vi dùng:** Kênh qua Phnom Penh 1967–1970 và chuyển đổi sau đảo chính.

- **S81** — [QĐND — Tư liệu lịch sử Thổ Châu trong chuyến thăm địa phương](https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-to-lam-tham-va-lam-viec-tai-dac-khu-tho-chau-tinh-an-giang-1012233). **Loại:** Tổng thuật chính thức. **Phạm vi dùng:** Khmer Đỏ chiếm 10/5 và tái chiếm đảo 24–27/5/1975; số người theo nguồn Việt Nam.

- **S82** — [Văn kiện Quốc hội toàn tập IV — Thông cáo hiệp thương 21/11/1975](https://quochoi.vn/tulieuquochoi/anpham/Pages/anpham.aspx?AnPhamItemID=1034). **Loại:** Văn kiện sơ cấp. **Phạm vi dùng:** Hội nghị 15–21/11/1975 và thành phần hai đoàn.

- **S83** — [UNHCR — 70 years of protecting people forced to flee](https://www.unhcr.org/spotlight/2020/12/70-years-of-protecting-people-forced-to-flee/). **Loại:** Tổng thuật tổ chức quốc tế. **Phạm vi dùng:** Di tản và tị nạn gắn với kết thúc chiến tranh năm 1975; không gán tổng số nhiều thập niên cho riêng 1975.

- **S84** — [Quốc hội — Tổng tuyển cử và thống nhất về nhà nước](https://quochoi.vn/tintuc/Pages/tin-hoat-dong-cua-quoc-hoi.aspx?ItemID=54937). **Loại:** Lịch sử cơ quan lập pháp. **Phạm vi dùng:** Phân biệt 30/4/1975, hiệp thương 1975 và thống nhất nhà nước 1976.

- **S85** — [Tư liệu Văn kiện Đảng — Phần thứ ba lịch sử Đảng](https://tulieuvankien.dangcongsan.vn/Uploads/2018/6/3/16/Phan%20thu%20ba.pdf). **Loại:** Lịch sử chính thức. **Phạm vi dùng:** Đại hội IV tháng 12/1976 đổi tên Đảng; dùng cho tên gọi lịch sử.

- **S86** — [National Security Archive — The Movement and the Madman](https://nsarchive.gwu.edu/briefing-book/nuclear-vault-vietnam/2023-03-24/movement-and-madman). **Loại:** Nghiên cứu và hồ sơ giải mật. **Phạm vi dùng:** Báo động hạt nhân tháng 10/1969; phân biệt tín hiệu cưỡng bức và lệnh sử dụng thực tế.

- **S87** — [NARA — Electronic Records Relating to the Vietnam War](https://www.archives.gov/research/military/vietnam-war/electronic-data-files). **Loại:** Mục lục dữ liệu lưu trữ. **Phạm vi dùng:** Herbicide File 1965–1971 NAID 623176 và dữ liệu hoạt động quân sự.

- **S88** — [CIA FOIA — Estimated Communist Economic and Military Aid 1972](https://www.cia.gov/readingroom/document/cia-rdp85t00875r001900010068-3). **Loại:** Ước tính tình báo. **Phạm vi dùng:** Bản 7/12/1973; giá quy đổi và ước lượng không phải sổ quyết toán viện trợ.

- **S89** — [Nixon Presidential Library — March 29 1973](https://www.nixonlibrary.gov/research/almanac/march-29-1973). **Loại:** Hồ sơ tổng thống. **Phạm vi dùng:** Nhật lịch và đường dẫn bài phát biểu về rút quân, tù binh.

- **S90** — [Nixon Presidential Library — President Richard Nixon](https://www.nixonlibrary.gov/index.php/president-richard-nixon). **Loại:** Tiểu sử và niên biểu. **Phạm vi dùng:** Watergate và từ chức có hiệu lực ngày 9/8/1974.

- **S91** — [QĐND — Chiến dịch Nguyễn Huệ trong tiến trình kháng chiến](https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/chien-dich-nguyen-hue-trong-tien-trinh-cuoc-khang-chien-chong-my-cuu-nuoc-690056). **Loại:** Phân tích quân sử. **Phạm vi dùng:** Lộc Ninh, tiến công Bình Long không thành công và hoạt động tới tháng 1/1973.

- **S92** — [QĐND SKNC — Đánh chiếm căn cứ Tân Cảnh](https://sknc.qdnd.vn/ho-so-tu-lieu/danh-chiem-can-cu-tan-canh-500541). **Loại:** Tư liệu quân sử. **Phạm vi dùng:** Binh chủng hợp thành, dẫn đường địa phương và trận 24/4/1972.

- **S93** — [FRUS 1969–1976 VIII — Document 284 October Negotiations](https://history.state.gov/historicaldocuments/frus1969-76v08/d284). **Loại:** Hồ sơ và chú giải. **Phạm vi dùng:** Chỉ thị 4/10 và vòng thương lượng 8–10/10/1972.

- **S94** — [FRUS 1969–1976 XXXII — Document 292 Moscow Summit](https://history.state.gov/historicaldocuments/frus1969-76v32/d292). **Loại:** Hồ sơ và chú giải. **Phạm vi dùng:** Nixon tới Moskva ngày 22/5/1972; kiểm soát vũ khí có ưu tiên riêng.

- **S95** — [NobelPrize.org — Facts on the Nobel Peace Prizes](https://www.nobelprize.org/prizes/facts/facts-on-the-nobel-peace-prize/). **Loại:** Thông tin của cơ quan giải thưởng. **Phạm vi dùng:** Lê Đức Thọ từ chối giải 1973 vì tình hình Việt Nam; không dùng trang này làm sử liệu chiến trường.

- **S96** — [Báo Chính phủ — Triển lãm tư liệu chủ quyền biển đảo tại Kon Tum](https://baochinhphu.vn/trien-lam-tu-lieu-chu-quyen-bien-dao-tai-kon-tum-102210336.htm). **Loại:** Tư liệu chính thức. **Phạm vi dùng:** Xác nhận mốc hải chiến Hoàng Sa 19/1/1974 và phân biệt với Trường Sa.

- **S97** — [Office of the Historian — Oil Embargo 1973–1974](https://history.state.gov/milestones/1969-1976/oil-embargo). **Loại:** Tổng thuật chính thức. **Phạm vi dùng:** Khủng hoảng dầu mỏ, giá cả và giới hạn kinh tế đối ngoại Mỹ; không phải bằng chứng một nguyên nhân duy nhất gây sụp đổ VNCH.

- **S98** — [FRUS 1969–1976 XII — Document 22 Sino-Soviet Border Clashes](https://history.state.gov/historicaldocuments/frus1969-76v12/d22). **Loại:** Hồ sơ và đánh giá đương thời. **Phạm vi dùng:** Đụng độ tháng 3/1969, nguồn báo cáo Mỹ và các suy đoán được ghi rõ trong hồ sơ.

[S01]: https://history.state.gov/milestones/1961-1968/tet
[S02]: https://www.archives.gov/exhibits/remembering-vietnam-online-exhibit-episodes-5-8
[S03]: https://www.archives.gov/exhibits/remembering-vietnam-online-exhibit-episodes-9-12
[S04]: https://history.state.gov/milestones/1969-1976/ending-vietnam
[S05]: https://history.state.gov/historicaldocuments/frus1964-68v06/d230
[S06]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-hoi-nghi-lan-thu-14-cua-trung-uong-dang-thang-11968-806
[S07]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-196-nqtw-ngay-1031970-hoi-nghi-lan-thu-18-ban-chap-hanh-trung-uong-ve-tinh-hinh-va-nhiem-vu-818
[S08]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-214-nqtw-ngay-131971-hoi-nghi-lan-thu-19-ban-chap-hanh-trung-uong-dang-819
[S09]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-219-nqtw-ngay-441972-hoi-nghi-lan-thu-20-ban-chap-hanh-trung-uong-dang-808
[S10]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-227-nqtw-ngay-13101973-hoi-nghi-lan-thu-21-ban-chap-hanh-trung-uong-dang-810
[S11]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-240-nqtw-ngay-25121974-hoi-nghi-lan-thu-23-ban-chap-hanh-trung-uong-dang-813
[S12]: https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-bch-trung-uong/khoa-iii/nghi-quyet-so-247-nqtw-ngay-2991975-hoi-nghi-lan-thu-24-cua-ban-chap-hanh-trung-uong-dang-lao-dong-viet-nam-ve-nhiem-vu-814
[S13]: https://baochinhphu.vn/chinh-phu-cach-mang-lam-thoi-cong-hoa-mien-nam-viet-nam-bieu-tuong-cua-khat-vong-hoa-binh-102230606165435284.htm
[S14]: https://baotanglichsuquocgia.vn/vi/Articles/2002/68277/ngay-6-6-1969-thanh-lap-chinh-phu-cach-mang-lam-thoi-cong-hoa-mien-nam-viet-nam.html
[S15]: https://hc.qdnd.vn/lich-su-hau-can/trung-doan-664-55-nam-xay-dung-phat-trien-va-truong-thanh-482335
[S16]: https://hc.qdnd.vn/lich-su-hau-can/bao-dam-giao-thong-van-tai-chong-chia-cat-chien-luoc-tren-dia-ban-quan-khu-4-nam-1968-481444
[S17]: https://www.qdnd.vn/xa-hoi/chinh-sach/binh-chung-tang-thiet-giap-ky-niem-50-nam-danh-thang-tran-dau-530592
[S18]: https://history.army.mil/portals/143/Images/Publications/catalog/91-15.pdf
[S19]: https://www.armyupress.army.mil/books/browse-books/ibooks-and-epubs/the-moral-courage-paradox/
[S20]: https://www.army.mil/article/126180/Former_Commander_Remembers_Hamburger_Hill/
[S21]: https://history.state.gov/historicaldocuments/frus1969-76v06/d74
[S22]: https://history.army.mil/portals/143/Images/Publications/catalog/91-7.pdf
[S23]: https://btlsqsvn.mod.gov.vn/nhan-vat-su-kien/chi-tiet/lien-minh-chien-dau-viet-nam-lao-trong-chien-dich-duong-9-nam-lao-1971-201ab52c-adee-47f0-99b0-b104a6a1396f
[S24]: https://www.history.navy.mil/content/history/nhhc/about-us/leadership/director/directors-corner/h-grams/h-gram-070.html
[S25]: https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/su-dung-luc-luong-va-to-chuc-chien-dau-linh-hoat-439626
[S26]: https://sknc.qdnd.vn/ho-so-tu-lieu/he-thong-cac-tuyen-duong-truong-son-501426
[S27]: https://www.nationalmuseum.af.mil/Visit/Museum-Exhibits/Fact-Sheets/Display/Article/195948/igloo-white/
[S28]: https://sknc.qdnd.vn/con-nguoi-cuoc-song/duong-k-la-gi-500593
[S29]: https://sknc.qdnd.vn/theo-dong-su-kien/nguoi-lanh-dao-cuoc-so-tan-lich-su-o-ha-noi-502795
[S30]: https://www.qdnd.vn/bao-qdnd-xuan-tan-suu-2021/bao-qdnd-cuoi-tuan-xuan-tan-suu-2021/ngon-co-dao-mua-thu-nam-ay-649932
[S31]: https://www.qdnd.vn/tu-lieu-ho-so/ho-so/hanh-trinh-den-hiep-dinh-paris-1973-717204
[S32]: https://history.state.gov/milestones/1969-1976/rapprochement-china
[S33]: https://history.state.gov/historicaldocuments/frus1969-76v14/d117
[S34]: https://history.state.gov/historicaldocuments/frus1969-76v08/d132
[S35]: https://treaties.un.org/doc/Publication/UNTS/Volume%20935/v935.pdf
[S36]: https://history.state.gov/historicaldocuments/frus1969-76v42/d71
[S37]: https://www.dafhistory.af.mil/Portals/16/documents/Studies/101-150/AFD-090529-051.pdf
[S38]: https://www.qdnd.vn/chinh-tri/tin-tuc/ngay-30-12-1972-chien-dich-ha-noi-dien-bien-phu-tren-khong-thang-loi-422789
[S39]: https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/lam-chu-bao-ve-cang-cua-viet-469070
[S40]: https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/thuc-hien-tron-ven-mong-uoc-cua-bac-ho-bac-nam-sum-hop-xuan-nao-vui-hon-438430
[S41]: https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/lich-su-quan-doi-nhan-dan-viet-nam/quan-doi-nhan-dan-viet-nam-80-nam-trang-su-hao-hung-808060
[S42]: https://www.congress.gov/crs_external_products/R/PDF/R45749/R45749.1.pdf
[S43]: https://history.house.gov/Historical-Highlights/1951-2000/The-War-Powers-Resolution/
[S44]: https://www.fordlibrarymuseum.gov/library/document/0067/1564065.pdf
[S45]: https://history.state.gov/historicaldocuments/frus1969-76v10/d148
[S46]: https://www.qdnd.vn/ho-so-su-kien/70-nam-quan-doi-nhan-dan-viet-nam-anh-hung/chien-thang-thuong-duc-buoc-phat-trien-vuot-bac-ve-trinh-do-va-kha-nang-tac-chien-cua-quan-doi-ta-261594
[S47]: https://www.qdnd.vn/vung-buoc-duoi-quan-ky-quyet-thang/nghe-thuat-quan-su/chien-dich-duong-14-phuoc-long-don-trinh-sat-chien-luoc-cho-thay-kha-nang-doi-pho-han-che-cua-my-806226
[S48]: https://www.qdnd.vn/tu-lieu-ho-so/ngay-nay-nam-xua/ngay-4-3-1975-quan-doi-nhan-dan-viet-nam-tien-hanh-chien-dich-tay-nguyen-687444
[S49]: https://baotanglichsu.vn/VI/Articles/3097/13921/chien-dich-tay-nguyen-tu-4-3-djen-24-3-1975.html
[S50]: https://sknc.qdnd.vn/ky-niem-sau-sac/tran-then-chot-thu-hai-cua-chien-dich-tay-nguyen-497845
[S51]: https://hue.gov.vn/Trang-chu/To-chuc-hanh-chinh/orgid/81b5a28c-0791-48a5-bba7-192fc8bfc738
[S52]: https://baotanglichsu.vn/vi/Articles/3097/13899/chien-dich-hue-dja-nang-213-djen-29-3-1975.html
[S53]: https://baotanglichsu.vn/vi/Articles/3097/14025/chien-dich-xuan-loc-tu-9-4-djen-21-4-1975.html
[S54]: https://baotanglichsuquocgia.vn/vi/Articles/3097/14153/chien-dich-ho-chi-minh-lich-su-26-4-30-4-1975.html
[S55]: https://www.qdnd.vn/tu-lieu-ho-so/van-kien-tu-lieu/bo-tu-lenh-chien-dich-ho-chi-minh-826021
[S56]: https://media.qdnd.vn/tiep-lua-truyen-thong/giai-phong-quan-dao-truong-sa-chien-cong-khang-dinh-chu-quyen-54433
[S57]: https://history.state.gov/historicaldocuments/frus1969-76v10/d271
[S58]: https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/u/use-naval-forces-post-war-era.html
[S59]: https://infosphereinvaders.wilsoncenter.org/sites/default/files/media/documents/publication/veith_pribbenow_cwihp_working_paper_84_north_vietnamese_decisionmaking_1973-1975.pdf
[S60]: https://history.state.gov/historicaldocuments/frus1969-76v18/d66
[S61]: https://baochinhphu.vn/ky-niem-trong-the-50-nam-lanh-tu-cuba-fidel-castro-tham-vung-giai-phong-mien-nam-viet-nam-102230926195056429.htm
[S62]: https://www.qdnd.vn/chinh-tri/tin-tuc/quang-binh-doan-dai-bieu-cuba-tham-benh-vien-huu-nghi-viet-nam-cuba-dong-hoi-744295
[S63]: https://www.swedenabroad.se/de/botschaften/vietnam-hanoi/about-us/
[S64]: https://www.government.se/articles/2016/02/olof-palme/
[S65]: https://www.wilsoncenter.org/sites/default/files/media/documents/publication/NKIDP_eDossier_2_North_Korean_Pilots_in_Vietnam_War.pdf
[S66]: https://www.wilsoncenter.org/blog-post/north-korean-psychological-warfare-operations-south-vietnam
[S67]: https://infosphereinvaders.wilsoncenter.org/sites/default/files/media/documents/publication/CWIHP_Working_Paper_71_East_German_Stasi_Vietnam_War.pdf
[S68]: https://www.wilsoncenter.org/event/work-progress-the-vietnam-soviet-union-china-triangle-relations-during-the-vietnam-war-1964
[S69]: https://history.army.mil/portals/143/Images/Publications/catalog/90-5-1.pdf
[S70]: https://history.state.gov/historicaldocuments/frus1964-68v29p1/d200
[S71]: https://www.awm.gov.au/articles/event/vietnam
[S72]: https://nzhistory.govt.nz/war/vietnam-war
[S73]: https://archivesdiplomatiques.diplomatie.gouv.fr/ark%3A/14366/dmbxtl1nrkh6
[S74]: https://baotanglichsu.vn/vi/Articles/3096/13545/nhung-chuyen-it-biet-ve-hiep-djinh-paris.html
[S75]: https://apjjf.org/2018/11/oguma
[S76]: https://www1.swarthmore.edu/library/peace/manuscriptcollections/Peace%20in%20Friends/Peace_Testimony_Archives.html
[S77]: https://international-review.icrc.org/sites/default/files/S0020860400015606a.pdf
[S78]: https://sknc.qdnd.vn/khach-den-viet-nam/vi-tuong-hungary-nang-nghia-tinh-voi-viet-nam-503045
[S79]: https://sknc.qdnd.vn/nhan-vat/mot-thu-linh-cua-con-duong-tien-te-500724
[S80]: https://www.qdnd.vn/ho-so-su-kien/40-nam-chien-thang-vi-dai-30-4/huyen-thoai-con-duong-tien-te-chi-vien-chien-truong-259893
[S81]: https://www.qdnd.vn/chinh-tri/tin-tuc/tong-bi-thu-to-lam-tham-va-lam-viec-tai-dac-khu-tho-chau-tinh-an-giang-1012233
[S82]: https://quochoi.vn/tulieuquochoi/anpham/Pages/anpham.aspx?AnPhamItemID=1034
[S83]: https://www.unhcr.org/spotlight/2020/12/70-years-of-protecting-people-forced-to-flee/
[S84]: https://quochoi.vn/tintuc/Pages/tin-hoat-dong-cua-quoc-hoi.aspx?ItemID=54937
[S85]: https://tulieuvankien.dangcongsan.vn/Uploads/2018/6/3/16/Phan%20thu%20ba.pdf
[S86]: https://nsarchive.gwu.edu/briefing-book/nuclear-vault-vietnam/2023-03-24/movement-and-madman
[S87]: https://www.archives.gov/research/military/vietnam-war/electronic-data-files
[S88]: https://www.cia.gov/readingroom/document/cia-rdp85t00875r001900010068-3
[S89]: https://www.nixonlibrary.gov/research/almanac/march-29-1973
[S90]: https://www.nixonlibrary.gov/index.php/president-richard-nixon
[S91]: https://www.qdnd.vn/quoc-phong-an-ninh/nghe-thuat-quan-su-vn/chien-dich-nguyen-hue-trong-tien-trinh-cuoc-khang-chien-chong-my-cuu-nuoc-690056
[S92]: https://sknc.qdnd.vn/ho-so-tu-lieu/danh-chiem-can-cu-tan-canh-500541
[S93]: https://history.state.gov/historicaldocuments/frus1969-76v08/d284
[S94]: https://history.state.gov/historicaldocuments/frus1969-76v32/d292
[S95]: https://www.nobelprize.org/prizes/facts/facts-on-the-nobel-peace-prize/
[S96]: https://baochinhphu.vn/trien-lam-tu-lieu-chu-quyen-bien-dao-tai-kon-tum-102210336.htm
[S97]: https://history.state.gov/milestones/1969-1976/oil-embargo
[S98]: https://history.state.gov/historicaldocuments/frus1969-76v12/d22
