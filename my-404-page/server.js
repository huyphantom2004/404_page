const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Cấu hình thư mục public để phục vụ các file tĩnh như HTML, CSS, ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route chính
app.get('/', (req, res) => {
    res.send('<h1>Chào mừng bạn đến với trang chủ!</h1>');
});

// Định nghĩa route cho trang 404 tùy chỉnh
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Lắng nghe ở cổng 3000
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
