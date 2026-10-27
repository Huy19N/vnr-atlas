# Kiểm tra và bàn giao — 28/10/2026

## Kết quả

- `npm run build`: nhập đủ 238 sự kiện / 174 mục tư liệu, kiểm tra TypeScript và đóng gói Vite thành công.
- `npm test`: 7/7 kiểm tra đạt. Bao phủ bảo toàn văn bản và nguồn, thứ tự năm/tháng, sự kiện chỉ biết năm, tài sản thực có trên đĩa, địa điểm quốc tế, phân loại sự kiện và khóa địa lý không trùng.
- Kiểm tra giao diện bằng trình duyệt: khung hiển thị 721 × 664. CSS có các bố cục desktop, tablet và mobile; chưa kiểm tra trực tiếp mọi kích thước/thiết bị.

## Các luồng đã thao tác

1. Màn đen 2026 → quay ngược về 1968 → Bắt đầu → bản đồ Việt Nam. Ảnh/phim xuất hiện theo năm có tư liệu; không gán ảnh chiến tranh cho giai đoạn 1976–2026.
2. Chọn sự kiện Tết Mậu Thân, mở hồ sơ, đọc tư liệu và nguồn.
3. Chọn tháng 12/1972 và Linebacker II: định vị Hà Nội, máy bay/vụ nổ minh họa; các nguồn với phạm vi thống kê khác nhau được giữ tách biệt.
4. Tra cứu E039 (mốc chỉ biết năm); phát 8× và quan sát chuyển 1968 → 1969, tới sự kiện ở Washington.
5. Chọn E223 ngày 30/4/1975: các hướng tiến công chính, điểm Dinh Độc Lập, Tân Sơn Nhất, Biên Hòa, Củ Chi, Bộ Tổng tham mưu, Long Thành. Mở hồ sơ có ảnh gốc và liên kết nguồn Bảo tàng Lịch sử Quốc gia.
6. Xác nhận endpoint phim gốc trên máy chủ phát triển trả Content-Type video, độ dài tệp và hỗ trợ HTTP Range. Bản tĩnh sử dụng 9 đoạn xem trước 24 giây cùng liên kết phim đầy đủ.

## Ảnh kiểm chứng

- [Bản đồ chiến dịch](preview-atlas.png)
- [Hồ sơ sự kiện](preview-event.png)

## Giới hạn nội dung

Địa điểm là neo định vị xấp xỉ, nền bản đồ không tái dựng thay đổi ranh giới/kiểm soát theo từng năm. Mũi tên và hiệu ứng là sơ đồ minh họa; các trận chưa có dữ liệu tọa độ chiến thuật dùng sơ đồ hai phía có ghi nhãn. 147 mốc chưa có ảnh xác minh giữ trạng thái thiếu tư liệu. Hai ảnh GPT tách nền chỉ dùng làm lớp trang trí mở đầu; ảnh lịch sử gốc vẫn được lưu riêng.
