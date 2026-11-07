# Việt Nam 1968–1975 — Dòng chảy lịch sử

Website React + TypeScript, Vite và Tailwind CSS. Dữ liệu nhập trực tiếp từ timeline Markdown của dự án, đối chiếu đủ 238 sự kiện và ghép thư viện 156 ảnh, 9 phim đã tải, 9 liên kết video.

[Kết quả kiểm tra và ảnh giao diện](docs/QA.md).

## Chạy trên máy

Yêu cầu Node.js 22.22+ và npm. Mở PowerShell tại thư mục này:

```powershell
npm ci
npm run content
npm run dev
```

Địa chỉ: http://127.0.0.1:5173 . Máy chủ phát triển đọc các phim đầy đủ từ kho `Kho_anh_video_Timeline_1968_1975` bằng endpoint nội bộ `/__archive/<mã>`; có hỗ trợ HTTP Range để tua video.

```powershell
npm test
npm run build
npm run preview
```

Bản build ở `dist`, bản xem trước production ở http://127.0.0.1:4173 . Các phim trong thư viện đối chiếu dùng bản xem trước ngắn và liên kết tới nguồn đầy đủ; 14 video tài liệu bổ sung có bản phát web 1080p trong kho dự án. Ảnh, bản đồ và dữ liệu đều nằm trong bản build; không phụ thuộc máy chủ bản đồ hoặc khóa API.

## Triển khai trên Vercel

Repo đã có `vercel.json`: lệnh build là `npm run build`, thư mục đầu ra là `dist`. Khi Vercel build từ repo, script dùng dữ liệu đã sinh sẵn trong `public/` thay vì đòi hỏi kho nghiên cứu nằm ngoài repo. Khi chạy tại máy phát triển có đủ kho nguồn bên cạnh dự án, `npm run content` vẫn tái tạo dữ liệu từ tài liệu nghiên cứu.

Các file video trong `public/media/video_tài_liệu/` là bản web 1080p đã tối ưu bitrate và hỗ trợ tải phát tuần tự; file gốc được giữ riêng trong `D:\FPT\Kì 9\VNR\_source_media_backup\vnr-atlas\video_tai_lieu`. Video chỉ được tải khi mở hồ sơ tư liệu. Các bundle Vite có tên băm được cache dài hạn; dữ liệu timeline được CDN kiểm tra định kỳ.

## Luồng trải nghiệm

1. Màn hình đen, năm 2026 màu trắng ở giữa. Nhấn bất kỳ vùng trống, số năm hoặc lời dẫn để quay ngược; tốc độ giảm dần tới 1968. Chỉ dùng ảnh/phim khi khớp năm trong kho 1968–1975.
2. Nút **Bắt đầu** mở bản đồ Việt Nam sau flash 1968.
3. Timeline có đủ tháng 1–12. Di chuột hoặc focus vào chấm để đọc tên; bấm để chọn. Những sự kiện chỉ biết năm nằm trong nhóm riêng, không gán thành tháng 12.
4. Phát tự động, đổi tốc độ 1×/2×/4×/8×; bản đồ di chuyển tới địa điểm sự kiện. Chạy hết mốc của năm thì chuyển năm và flash số năm mới.
5. Chọn hộp chú thích để mở hồ sơ giữa màn hình: diễn biến, thời gian, địa điểm, ảnh/phim và nguồn. Phát tự động tạm dừng trong khi đọc.
6. Tra cứu toàn bộ 238 sự kiện bằng từ khóa có hoặc không dấu, lọc theo năm/chủ đề. Hỗ trợ Escape, Space, phím mũi tên, focus bàn phím và giảm chuyển động.

## Dữ liệu và tính chính xác

- `scripts/prepare-content.mjs` đọc chính file Markdown gốc và xác nhận từng dòng khớp metadata nghiên cứu. Nếu số mục, nhãn hoặc văn bản lệch, build dừng để tránh mất nội dung.
- `scripts/geography.mjs` chứa địa điểm và các trục minh họa; xem [quy ước địa lý](docs/GEOGRAPHY.md).
- 147 mốc chưa có ảnh xác minh giữ trạng thái không có; không dùng ảnh khác thay thế.
- Ảnh gốc giữ nguyên. Hai lớp ảnh tách nền bằng GPT chỉ phục vụ bố cục mở đầu; xem [prompt, nguồn và giới hạn](docs/IMAGE_LAYERS.md).
- Mũi tên, trục Trường Sơn, máy bay, vụ nổ là sơ đồ minh họa. Không có đủ dữ liệu tọa độ, thời gian và đội hình để khẳng định đây là tái dựng chiến thuật chính xác. Các trục chính 1975 và Đường 9/Đường 7 có lớp riêng; sự kiện khác dùng sơ đồ hai phía có nhãn rõ.
- Nền bản đồ Natural Earth để định vị; không thể hiện phân chia quyền kiểm soát lãnh thổ theo từng năm.

## Cấu trúc

```text
src/components/    Intro, AtlasMap, Timeline, hồ sơ và tra cứu
src/styles.css    Thiết kế responsive, typography và chuyển động
public/data/      238 mốc, nguồn và bản đồ địa lý
public/media/     Ảnh gốc và 9 đoạn phim xem trước
public/layers/    2 PNG tách nền bằng GPT
public/documents/ Timeline và hồ sơ nghiên cứu Markdown
scripts/          Nhập dữ liệu, quy ước địa lý và xử lý video
tests/            Kiểm tra bảo toàn nội dung, nguồn, địa điểm và tư liệu
```

Chạy `npm run optimize:media` để tạo bản 1080p bitrate thấp cho các video tài liệu mới. Lệnh sao lưu tệp đầu vào bên ngoài repo trước khi thay bản công khai; không sửa bản gốc đã sao lưu.

## Công nghệ và tài liệu

- [React](https://react.dev/) và [Vite](https://vite.dev/guide/).
- [Tailwind CSS tích hợp Vite](https://tailwindcss.com/docs/installation/using-vite).
- [D3 Geo](https://d3js.org/d3-geo) và [world-atlas / Natural Earth](https://github.com/topojson/world-atlas).
- Biểu tượng giao diện: Lucide. Không cần backend, tài khoản hay API key để xem phần bản đồ và niên biểu.
