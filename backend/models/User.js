import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true},
    isAdmin: { type: Boolean, default: true},
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
