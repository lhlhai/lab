# CSV Editor PWA

Ứng dụng Web (PWA) chỉnh sửa file CSV hoàn toàn offline, bảo mật và tiện lợi.

## Tính năng chính
- **Hoạt động Offline**: Nhờ Service Worker, bạn có thể truy cập ứng dụng ngay cả khi không có internet.
- **Cài đặt dễ dàng**: Có thể cài đặt trực tiếp lên màn hình chính (A2HS) trên điện thoại hoặc máy tính.
- **Lưu trữ cục bộ**: Dữ liệu được lưu tự động vào IndexedDB trong trình duyệt, không bao giờ gửi lên server.
- **Chỉnh sửa trực tiếp**: Click vào bất kỳ ô nào trong bảng để sửa nội dung.
- **Xử lý CSV thông minh**: Hỗ trợ các trường hợp CSV phức tạp (dấu phẩy, dấu ngoặc kép, xuống dòng trong ô).

## Hướng dẫn cài đặt lên GitHub Pages
1. Tạo một repository mới trên GitHub (ví dụ: `csv-editor`).
2. Đẩy các file `index.html`, `manifest.json`, và `sw.js` lên repository này.
3. Vào phần **Settings** -> **Pages**.
4. Chọn nhánh `main` và thư mục `/ (root)`, sau đó nhấn **Save**.
5. Sau vài phút, trang web của bạn sẽ được deploy tại `https://<username>.github.io/csv-editor/`.

## Lưu ý kỹ thuật
- Ứng dụng sử dụng **HTML5, CSS3 và Vanilla JS**.
- **IndexedDB** được dùng để lưu trữ dữ liệu bền vững.
- **Service Worker** quản lý việc cache tài nguyên để chạy offline.
- Giao diện **Responsive** hoạt động tốt trên cả Mobile và Desktop.

## Phát triển
Bạn có thể chỉnh sửa file `index.html` để thay đổi giao diện hoặc thêm tính năng. Các phần logic quan trọng đều được comment rõ ràng trong code.
