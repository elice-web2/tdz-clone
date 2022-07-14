import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as api from '../api';

export interface MealsState {
  value: MealInfo[];
}

interface MealInfo {
  code: string;
  kcal: number;
  name: string;
  carb: number;
  protein: number;
  fat: number;
  natruim: number;
  cholesterol: number;
  transfat: number;
  saturatedfatty: number;
  servingSize: number;
  quantity: number;
  totalGram: number;
  sugars: number;
  updated_date: string;
}

interface PostMealsDataParam {
  meals: MealInfo[];
  category: string;
  date: string;
}

const initialState: MealsState = {
  value: [],
};

async function postMealsData({ meals, category, date }: PostMealsDataParam) {
  const mealsData = {
    meals,
    category,
    date,
  };
  const data = await api.post('/api/mealhistory', mealsData);
  console.log('잘보냈어', data);
  return data.data;
}

export const postMealsDataAsync = createAsyncThunk(
  'meals/postMealsData',
  async ({ meals, category, date }: PostMealsDataParam) => {
    const data = await postMealsData({ meals, category, date });
    return data;
  },
);

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeals: (state, action: PayloadAction<MealInfo>) => {
      state.value.push(action.payload);
    },
    deleteMeals: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((meal) => meal.code !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postMealsDataAsync.fulfilled, (state) => {
      state.value = [];
    });
  },
});

export const { addMeals, deleteMeals } = mealsSlice.actions;

export default mealsSlice.reducer;
