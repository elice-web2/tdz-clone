import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

export interface DateState {
  value: string;
}

const initialState: DateState = {
  value: dayjs('07-07-2022').format('DD-MM-YYYY'),
};

// 더미 비동기 로직

function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  );
}

// 비동기로 데이터를 불러와 액션을 생성하고 싶을 경우 예시

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  },
);

// Slice 작성 예시

export const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {},

  // 비동기 로직이 들어갈 시 AsyncThunk 를 작성 후 extraReducer에 추가
});

// 액션 생성 함수를 export

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// store에 등록할 reducer를 export

export default dateSlice.reducer;
