import {
  mealhistoryModel,
  MealHistoryModel,
  MealHistoryInfo,
  MealHistoryData,
} from '../db';

class MealHistoryService {
  constructor(private mealhistoryModel: MealHistoryModel) {}

  async addMeal(mealhistoryInfo: MealHistoryInfo): Promise<MealHistoryData> {
    const createNewMeal = await this.mealhistoryModel.create(mealhistoryInfo);
    return createNewMeal;
  }

  async getMeals(user_id: string, date: Date): Promise<MealHistoryData[]> {
    const meals = await this.mealhistoryModel.findByDate(user_id, date);
    return meals;
  }
}

const mealhistoryService = new MealHistoryService(mealhistoryModel);
export { mealhistoryService };
