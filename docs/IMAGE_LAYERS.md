# Các lớp ảnh dùng trong giao diện

Hai tệp PNG RGBA được tạo bằng công cụ imagegen tích hợp của GPT, theo chế độ background-extraction. Chúng chỉ dùng như lớp bố cục trong đoạn mở đầu, không thay cho ảnh lịch sử gốc trong hồ sơ.

| Lớp | Ảnh gốc | Cách dùng |
|---|---|---|
| `public/layers/tank-1975-gpt.png` | A0087, ảnh TTXVN xe tăng tại Buôn Ma Thuột 10/3/1975 | Chỉ hiện khi số đếm là 1975 |
| `public/layers/artillery-1968-gpt.png` | A0005, AWM P01769.011, căn cứ Coral tháng 5/1968 | Chỉ hiện khi số đếm là 1968 |

Prompt xe tăng: “Remove only the sky, trees, smoke and ground background; keep the foreground tank, soldiers, flag, pole, black-and-white photographic texture and original TTXVN credit. Do not invent missing parts. Output genuine RGBA transparency.”

Prompt khẩu pháo: “Extract only the foreground artillery gun, barrel, wheels, trail, ropes and equipment. Remove the landscape and background people. Preserve original color, camera angle and the bottom AWM credit / P01769.011 strip. Output genuine transparency.”

Kết quả GPT có thể khác chi tiết so với ảnh đầu vào. Ảnh nguyên bản ở `public/media/A0087.jpg` và `public/media/A0005.jpg`; không có thao tác ghi đè vào kho tư liệu gốc.
