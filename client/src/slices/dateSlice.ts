import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface DateState {
  date: string;
}

const initialState: DateState = {
  date: dayjs().format('YYYY-MM-DD'),
};

// Slice 작성 예시

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    update: (state, { payload }) => {
      state.date = payload;
    },
  },
  // 비동기 로직이 들어갈 시 AsyncThunk 를 작성 후 extraReducer에 추가
});

export const { update } = dateSlice.actions;

export default dateSlice.reducer;
