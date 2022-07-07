import { model } from 'mongoose';
// import { MealSchema } from '../schemas/meal-schema';
import { MealHistorySchema } from '../schemas/mealhistory-schema';

const MealHistory = model<MealHistoryData>('mealhistory', MealHistorySchema);

export interface mealInfo {
  meal_name: String;
  meal_kcal: Number;
  meal_carb: Number;
  meal_protein: Number;
  meal_fat: Number;
  meal_sugars: Number;
  meal_natruim: Number;
  meal_cholesterol: Number;
  meal_saturatedfatty: Number;
  meal_transfat: Number;
}

export interface MealHistoryInfo {
  user_id: string;
  meal_category: string;
  date: Date;
  meals: [mealInfo];
}

export interface MealHistoryData {
  _id: string;
  user_id: string;
  meal_category: string;
  date: Date;
  meals: [mealInfo];
}

export class MealHistoryModel {
  async findByDate(user_id: string, date: Date): Promise<MealHistoryData[]> {
    const meals = await MealHistory.find({ user_id, date });
    return meals;
  }

  async create(mealhistoryInfo: MealHistoryInfo): Promise<MealHistoryData> {
    const meal = await MealHistory.create(mealhistoryInfo);
    return meal;
  }

  async update(
    currentMeal: MealHistoryInfo,
    updateMeal: MealHistoryInfo,
  ): Promise<MealHistoryData> {
    await MealHistory.findOneAndUpdate({ currentMeal }, { updateMeal });
    return;
  }

  async delete(meal_id: string): Promise<{ deletedCount: number }> {
    await MealHistory.findOneAndDelete({ _id: meal_id });
    return;
  }
}

const mealhistoryModel = new MealHistoryModel();

export { mealhistoryModel };
