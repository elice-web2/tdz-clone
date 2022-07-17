import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { ObjectLiteralElementLike } from 'typescript';
import * as api from '../api';
// 받아올 유저정보
interface UsersInfo {
  // 유저 정보
  email: string;
  login_path: string;
  gender: string;
  role: string;
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
  profile_image: string;
  nickname: string;
  comment: string;
  // 유저 정보를 작성한 회원 여부
  is_login_first: boolean;
  // 로그인 여부
  isLogin: boolean;
}

export interface UsersInfoState {
  value: UsersInfo;
}
const initialState: UsersInfoState = {
  value: {
    email: '',
    login_path: '',
    gender: '',
    role: '',
    age: 0,
    height: 0,
    current_weight: 0,
    goal_weight: 0,
    bmi: 0,
    mode: '',
    activity: '',
    nutrient: {
      kcal: 0,
      carb: 0,
      protein: 0,
      fat: 0,
    },
    profile_image: '',
    nickname: '',
    comment: '',
    is_login_first: false,
    isLogin: Boolean(localStorage.getItem('login')),
  },
};
// Slice 작성 예시

// 로그인 요청 데이터 타입지정
interface postLoginSignup {
  email: string;
  password: string;
}
// 회원가입 정보입력 타입지정
interface patchActivityParam {
  login_path?: string;
  profile_image?: string;
  comment?: string;
  gender?: string;
  age?: number;
  height?: number;
  current_weight?: number;
  goal_weight?: number;
  bmi?: number;
  mode?: string;
  activity?: string;
  nutrient?: {
    kcal: number;
    carb: number;
    protein: number;
    fat: number;
  };
  nickname?: string;
}
// 수정할 유저 정보 데이터 타입지정
interface patchUserParam {
  email: string;
  password: string;
  currentPassword: string;
}
// 회원가입 post API 통신 함수
async function postSignupData(usersInfo: postLoginSignup) {
  const resp = await api.post('/api/auth/signup', usersInfo);
  return resp.data;
}
// 회원탈퇴 del API 통신 함수
async function delUserData() {
  const resp = await api.delete('/api/users');
  return resp;
}
// 로그인 post API 통신 함수
async function postLoginData(loginInfo: postLoginSignup) {
  await api.post('/api/auth/login', loginInfo);
}
// 로그아웃 get API 통신 함수
async function getLogOut() {
  const resp = await api.get('/api/auth/logout');
  return resp;
}
// 회원정보 get API 통신 함수
async function getUsersInfoData() {
  const resp = await api.get('/api/users');
  return resp;
}
// 회원정보 수정 patch API 통신 함수
async function patchUserInfoData(userInfo: patchUserParam) {
  const resp = await api.patch('/api/users', userInfo);
  return resp.data;
}
async function patchActivityData(activityInfo: patchActivityParam) {
  const resp = await api.patch('/api/users/activity', activityInfo);
  return resp.data;
}

// 비동기로 데이터를 불러와 액션을 생성하고 싶을 경우 예시
export const postSignUpAsync = createAsyncThunk(
  'usersInfo/postSignupData',
  async (usersInfo: postLoginSignup) => {
    return await postSignupData(usersInfo);
  },
);
//
export const postLoginAsync = createAsyncThunk(
  'usersInfo/postLoginData',
  async (loginInfo: postLoginSignup) => {
    await postLoginData(loginInfo);
    const usersInfo = await getUsersInfoData();
    return usersInfo?.data;
  },
);
export const delUserAsync = createAsyncThunk(
  'usersInfo/delUserData',
  async () => {
    const usersInfo = await delUserData();
    return usersInfo?.data;
  },
);
export const getLogOutAsync = createAsyncThunk(
  'usersInfo/getLogOut',
  async () => {
    const usersInfo = await getLogOut();
    return usersInfo?.data;
  },
);
export const getUsersInfoAsync = createAsyncThunk(
  'usersInfo/getUsersInfoData',
  async () => {
    const usersInfo = await getUsersInfoData();
    return usersInfo?.data;
  },
);
export const patchUserInfoAsync = createAsyncThunk(
  'userInfo/patchUserInfoData',
  async (userInfo: patchUserParam) => {
    return await patchUserInfoData(userInfo);
  },
);
export const patchActivityAsync = createAsyncThunk(
  'usersInfo/patchActivityData',
  async (activityInfo: patchActivityParam) => {
    return await patchActivityData(activityInfo);
  },
);

export const UsersInfoSlice = createSlice({
  name: 'usersInfo',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.value.isLogin = true;
    },
    logout: (state) => {
      state.value = { ...initialState.value };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postSignUpAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      })
      .addCase(postLoginAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
        state.value.isLogin = true;
      })
      .addCase(delUserAsync.fulfilled, (state, action) => {
        state.value.isLogin = false;
      })
      .addCase(getLogOutAsync.fulfilled, (state) => {
        state.value = { ...initialState.value };
      })
      .addCase(getUsersInfoAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      })
      .addCase(patchUserInfoAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      })
      .addCase(patchActivityAsync.fulfilled, (state, action) => {
        state.value = { ...state.value, ...action.payload };
      });
  },
});

export const { loggedIn, logout } = UsersInfoSlice.actions;

export default UsersInfoSlice.reducer;
