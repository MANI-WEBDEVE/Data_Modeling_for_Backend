import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true,
    },
    password: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

console.log(User);
