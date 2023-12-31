// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Đăng ký
exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Người dùng đã tồn tại.' });
    }

    // Hash mật khẩu trước khi lưu vào database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo người dùng mới
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    // Lưu người dùng vào database
    await newUser.save();

    res.status(201).json({ message: 'Đăng ký thành công.' });
  } catch (error) {
    console.error('Lỗi đăng ký:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra.' });
  }
};

// Đăng nhập
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Tìm kiếm người dùng theo tên đăng nhập
    const user = await User.findOne({ username });

    // Kiểm tra xem người dùng có tồn tại và mật khẩu có đúng không
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
    }

    // Đăng nhập thành công
    res.status(200).json({ message: 'Đăng nhập thành công.' });
  } catch (error) {
    console.error('Lỗi đăng nhập:', error);
    res.status(500).json({ message: 'Đã có lỗi xảy ra.' });
  }
};
