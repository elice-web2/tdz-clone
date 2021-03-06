import { UserModel, userModel, UserData, UserInfo, Nutrient } from '../db';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export interface LoginInfo {
  email: string;
  password: string;
}

export interface UserInfoRequired {
  userId: string;
  currentPassword: string;
}

interface ToUpdate {
  [key: string]: string | number | Nutrient;
}

class UserService {
  constructor(private userModel: UserModel) {
    this.userModel = userModel;
  }

  // 회원가입
  async addUser(userInfo: UserInfo): Promise<UserData> {
    // 객체 destructuring
    const {
      email,
      password,
      login_path,
      role,
      gender,
      age,
      height,
      current_weight,
      goal_weight,
      bmi,
      mode,
      activity,
      nutrient,
      profile_image,
      nickname,
      comment,
    } = userInfo;

    // 이메일 중복 확인
    const user = await this.userModel.findByEmail(email);
    if (user) {
      throw new Error(
        '이 이메일은 현재 사용중입니다. 다른 이메일을 입력해 주세요.',
      );
    }
    // 우선 비밀번호 해쉬화(암호화)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserInfo = {
      email,
      password: hashedPassword,
      login_path,
      role,
      gender,
      age,
      height,
      current_weight,
      goal_weight,
      bmi,
      mode,
      activity,
      nutrient,
      profile_image,
      nickname,
      comment,
    };

    // db에 저장
    return await this.userModel.create(newUserInfo);
  }

  // 로그인
  async getUserToken(loginInfo: LoginInfo): Promise<UserData> {
    // 객체 destructuring
    const { email, password } = loginInfo;

    // 우선 해당 이메일의 사용자 정보가  db에 존재하는지 확인
    const user = await this.userModel.findByEmail(email);
    if (!user) {
      throw new Error(
        '해당 이메일은 가입 내역이 없습니다. 다시 한 번 확인해 주세요.',
      );
    }

    // 이제 이메일은 문제 없는 경우이므로, 비밀번호를 확인함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password; // db에 저장되어 있는 암호화된 비밀번호

    // 매개변수의 순서 중요 (1번째는 프론트가 보내온 비밀번호, 2번쨰는 db에 있떤 암호화된 비밀번호)
    const isPasswordCorrect = await bcrypt.compare(
      password,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.',
      );
    }

    // 로그인 성공 -> JWT 웹 토큰 생성
    const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';

    // 2개 프로퍼티를 jwt 토큰에 담음
    return jwt.sign({ userId: user._id, role: user.role }, secretKey);
  }

  // 사용자 목록을 받음.
  async getUsers(): Promise<UserData[]> {
    return await this.userModel.findAll();
  }

  //사용자 하나를 받음
  async getUserData(userId: string): Promise<UserData> {
    return await this.userModel.findById(userId);
  }

  // 유저정보 수정, 현재 비밀번호가 있어야 수정 가능함.
  async setUser(
    userInfoRequired: UserInfoRequired,
    toUpdate: ToUpdate,
  ): Promise<UserData> {
    // 객체 destructuring
    const { userId, currentPassword } = userInfoRequired;

    // 우선 해당 id의 유저가 db에 있는지 확인
    let user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('가입 내역이 없습니다. 다시 한 번 확인해 주세요.');
    }

    // 이제, 정보 수정을 위해 사용자가 입력한 비밀번호가 올바른 값인지 확인해야 함

    // 비밀번호 일치 여부 확인
    const correctPasswordHash = user.password;
    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      correctPasswordHash,
    );

    if (!isPasswordCorrect) {
      throw new Error(
        '현재 비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.',
      );
    }

    // 이제 드디어 업데이트 시작

    // 비밀번호도 변경하는 경우에는, 회원가입 때처럼 해쉬화 해주어야 함.
    const { password } = toUpdate;

    if (password) {
      const newPasswordHash = await bcrypt.hash(password, 10);
      toUpdate.password = newPasswordHash;
    }

    // 업데이트 진행
    return await this.userModel.update({
      userId,
      update: toUpdate,
    });
  }

  async deleteUserData(userId: string): Promise<{ deletedCount?: number }> {
    // 우선 해당 id의 유저가 db에 있는지 확인
    let user = await this.userModel.findById(userId);

    // db에서 찾지 못한 경우, 에러 메시지 반환
    if (!user) {
      throw new Error('가입 내역이 없습니다. 다시 한 번 확인해 주세요.');
    }

    // 유저 삭제 시작
    return await this.userModel.deleteOneUser(userId);
  }
}

const userService = new UserService(userModel);

export { userService };
