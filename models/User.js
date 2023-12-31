// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  credit: { type: Number, default: 0 },
  plan: { type: String, default: 'Free' },
  group: { type: Number, default: 3 }, // Default group id for members
  historyOrder: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  historyPayment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Payment' }],
  socksHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SocksHistory' }],
  apiControl: { type: Boolean, default: false },
  giftRedeem: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GiftRedeem' }],
  userSetting: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
