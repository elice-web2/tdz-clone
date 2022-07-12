import { mealModel, MealModel } from '../db';
import { MealData, MealInfo } from '../customType/meal.type';
import request from 'request';

class MealService {
  constructor(private mealModel: MealModel) {}

  async findMeal(meal_name: string): Promise<MealData[]> {
    const meals = await this.mealModel.findByMealName(meal_name);

    if (Array.isArray(meals) && meals.length === 0) {
      const add_meals = this.addMeal(meal_name);
      return add_meals;
    }

    if (!meals) {
      throw new Error(`${meal_name}을 조회할 수 없습니다.`);
    }

    return meals;
  }

  async addMeal(meal_name: string): Promise<MealData[]> {
    // api 요청
    // const mealDatas = this.getApi(meal_name);
    const data: MealData[] = [];
    let mealDatas;
    const options = {
      method: 'GET',
      url:
        `http://openapi.foodsafetykorea.go.kr/api/${process.env.APIKEY}/I2790/json/1/20/DESC_KOR=` +
        encodeURI(meal_name),
      headers: {},
    };

    request(options, async function (err, httpResponse, body) {
      if (err) throw new Error(err);

      if (!body) throw new Error('검색 결과가 존재하지 않습니다.');

      const apiData = await JSON.parse(body);
      mealDatas = apiData.I2790.row;
      console.log('mealDatas', mealDatas);
      for (let i = 0; i < mealDatas.length; i++) {
        const meal = mealDatas[i];

        const code = meal.FOOD_CD;
        const name = meal.DESC_KOR;
        const kcal = Number(meal.NUTR_CONT1);
        const carb = Number(meal.NUTR_CONT2);
        const protein = Number(meal.NUTR_CONT3);
        const fat = Number(meal.NUTR_CONT4);
        const sugars = Number(meal.NUTR_CONT5);
        const natruim = Number(meal.NUTR_CONT6);
        const cholesterol = Number(meal.NUTR_CONT7);
        const saturatedfatty = Number(meal.NUTR_CONT8);
        const transfat = Number(meal.NUTR_CONT9);
        const updated_date = new Date();

        const mealInfo = {
          code,
          name,
          kcal,
          carb,
          protein,
          fat,
          sugars,
          natruim,
          cholesterol,
          saturatedfatty,
          transfat,
          updated_date,
        };

        const mealData = await mealModel.create(mealInfo);
        data.push(mealData);
      }
    });

    const meals = await this.mealModel.findByMealName(meal_name);

    if (!meals) {
      throw new Error(`${meal_name}을 조회할 수 없습니다.`);
    }
    return meals;
  }

  async createMeal(mealInfo: MealInfo): Promise<MealData> {
    const meal = await mealModel.create(mealInfo);
    return meal;
  }

  /*
  async deleteMeal(meal_name: string): Promise<{ result: string }> {
    const meal = await this.mealModel.findByMealName(meal_name);
    if (!meal) {
      throw new Error('해당 음식은 존재하지 않습니다.');
    }

    const { deletedCount } = await this.mealModel.deleteByName(meal_name);

    // 삭제에 실패한 경우, 에러 메시지 반환
    if (deletedCount === 0) {
      throw new Error(`${meal_name} 음식 삭제에 실패하였습니다`);
    }

    return { result: 'success' };
  }
  */
}
const mealService = new MealService(mealModel);
export { mealService };
