import { model } from 'mongoose';
// import { MealSchema } from '../schemas/meal-schema';
import { MealHistorySchema } from '../schemas/mealhistory-schema';

const MealHistory = model<MealHistoryData>('mealhistory', MealHistorySchema);

export interface mealInfo {
  code: string;
  name: String;
  kcal: Number;
  carb: Number;
  protein: Number;
  fat: Number;
  sugars: Number;
  natruim: Number;
  cholesterol: Number;
  saturatedfatty: Number;
  transfat: Number;
  updated_date: Date;
}

export interface MealHistoryInfo {
  user_id: string;
  category: string;
  date: Date;
  meals: [mealInfo];
}

export interface MealHistoryData {
  _id: string;
  user_id: string;
  category: string;
  date: Date;
  meals: [mealInfo];
}

interface ToUpdate {
  mealhistory_id: string;
  update: {
    [key: string]: string | number | Date | [mealInfo];
  };
}

export class MealHistoryModel {
  async findByDate(
    user_id: string,
    date: Date,
  ): Promise<MealHistoryData[] | null> {
    return await MealHistory.find({ user_id, date }).lean();
  }

  async findByMealHistoryId(
    mealhistory_id: string,
  ): Promise<MealHistoryData | null> {
    return await MealHistory.findOne({ _id: mealhistory_id }).lean();
  }

  async create(mealhistoryInfo: MealHistoryInfo): Promise<MealHistoryData> {
    return await MealHistory.create(mealhistoryInfo);
  }

  async update({
    mealhistory_id,
    update,
  }: ToUpdate): Promise<MealHistoryData | null> {
    const filter = { _id: mealhistory_id };
    const option = { new: true };
    const updatedmealhistory = await MealHistory.findOneAndUpdate(
      filter,
      update,
      option,
    );
    console.log('update', updatedmealhistory);
    return updatedmealhistory;
  }

  async delete(mealhistory_id: string): Promise<{ deletedCount?: number }> {
    return await MealHistory.deleteOne({ _id: mealhistory_id });
  }
}

const mealhistoryModel = new MealHistoryModel();

export { mealhistoryModel };
