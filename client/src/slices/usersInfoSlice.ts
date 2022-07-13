import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { ObjectLiteralElementLike } from 'typescript';
import * as api from '../api';
// 받아올 유저정보
interface UsersInfo {
  // 유저 정보
  email: string;
  loginPath: string;
  gender: string;
  role: string;
  age: number;
  height: number;
  currentWeight: number;
  goalWeight: number;
  bmi: number;
  mode: string;
  activity: string;
  nutrient: {
    nutrientKcal: number;
    nutrientCarb: number;
    nutrientProtein: number;
    nutrientFat: number;
  };
  profileImage: string;
  nickname: string;
  comment: string;
  // 로그인 여부
  isLogin: boolean;
}

export interface UsersInfoState {
  value: UsersInfo;
}
const initialState: UsersInfoState = {
  value: {
    email: '',
    loginPath: '',
    gender: '',
    role: '',
    age: 0,
    height: 0,
    currentWeight: 0,
    goalWeight: 0,
    bmi: 0,
    mode: '',
    activity: '',
    nutrient: {
      nutrientKcal: 0,
      nutrientCarb: 0,
      nutrientProtein: 0,
      nutrientFat: 0,
    },
    profileImage: '',
    nickname: '',
    comment: '',
    isLogin: false,
  },
};
// Slice 작성 예시
// 회원가입 post 요청 데이터 매개변수
interface postSignupParam {
  email: string;
  password: string;
  gender: string;
  age: number;
  height: number;
  current_weight: number;
  goal_weight: number;
  bmi: number;
  mode: string;
  activity: string;
  nutrient: {
    kcal: number;
    carb: number;
    protein: number;
    fat: number;
  };
}
// 로그인 요청 데이터 타입지정
interface postLoginParam {
  email: string;
  password: string;
}
// 회원가입 post API 통신 함수
async function postSignupData(usersInfo: postSignupParam) {
  const resp = await api.post('/auth/signup ', usersInfo);
  return resp.data;
}
// 로그인 post API 통신 함수
async function postLoginData(loginInfo: postLoginParam) {
  await api.post('/api/auth/login', loginInfo);
}
// 회원정보 get API 통신 함수
async function getUsersInfoData() {
  const resp = await api.get('/api/users');
  return resp;
}

// 비동기로 데이터를 불러와 액션을 생성하고 싶을 경우 예시
export const postSignUpAsync = createAsyncThunk(
  'usersInfo/postSignupData',
  async (usersInfo: postSignupParam) => {
    return await postSignupData(usersInfo);
  },
);
//
export const postLoginAsync = createAsyncThunk(
  'usersInfo/postLoginData',
  async (loginInfo: postLoginParam) => {
    await postLoginData(loginInfo);
  },
);
export const getUsersInfoAsync = createAsyncThunk(
  'usersInfo/getUsersInfoData',
  async () => {
    const usersInfo = await getUsersInfoData();
    return usersInfo?.data;
  },
);

export const UsersInfoSlice = createSlice({
  name: 'usersInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSignUpAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.value.isLogin = true;
      })
      .addCase(getUsersInfoAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      });
  },
});

export default UsersInfoSlice.reducer;
