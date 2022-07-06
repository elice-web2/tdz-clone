import { model } from 'mongoose';
import { UserSchema } from '../schemas/user-schema';

const User = model('users', UserSchema);

export class UserModel {
  //이메일로 유저를 찾음
  async findByEmail(email: string) {
    return await User.findOne({ email });
  }
  //userId(ObjectId)로 유저를 찾음)
  async findById(userId: string) {
    return await User.findOne({ _id: userId });
  }
  //userInfo Object를 받아 생성
  async create(userInfo: any) {
    return await User.create(userInfo);
  }
  //모든 목록을 찾음
  async findAll() {
    return await User.find({});
  }
  //userId(ObjectId)를 찾아 그 항목을 수정
  async update({ userId, update }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    return await User.findOneAndUpdate(filter, update, option);
  }
  //userId(ObjectId)를 찾아 삭제
  async deleteOneUser(userId: string) {
    return await User.deleteOne({ _id: userId });
  }
}

const userModel = new UserModel();

export { userModel };
