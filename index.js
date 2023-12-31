// index.js
const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Kết nối đến MongoDB
connectDB();

// Middleware để đọc dữ liệu từ req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sử dụng route cho đăng ký và đăng nhập
app.use('/auth', authRoutes);

// Cấu hình cổng và khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy ở cổng ${PORT}`);
});
