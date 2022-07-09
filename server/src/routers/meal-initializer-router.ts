import { Router, Request, Response } from 'express';
import { mealService } from '../services';
import { mealModel, MealModel } from '../db';
import request from 'request';

const mealInitializerRouter = Router();

mealInitializerRouter.post(
  '/:start/:end',
  async (req: Request, res: Response, next) => {
    try {
      const { start, end } = req.params;

      const options = {
        method: 'GET',
        url: `http://openapi.foodsafetykorea.go.kr/api/${process.env.APIKEY}/I2790/json/${start}/${end}`,
        headers: {},
      };

      request.post(options, async function (err, httpResponse, body) {
        const mealDatas = await JSON.parse(body);
        console.log(mealDatas);
        console.log(mealDatas.I2790.row.length);

        for (let i = 0; i < mealDatas.I2790.row.length; i++) {
          const meal = mealDatas.I2790.row[i];

          const meal_code = meal.FOOD_CD;
          const meal_name = meal.DESC_KOR;
          const meal_kcal = Number(meal.NUTR_CONT1);
          const meal_carb = Number(meal.NUTR_CONT2);
          const meal_protein = Number(meal.NUTR_CONT3);
          const meal_fat = Number(meal.NUTR_CONT4);
          const meal_sugars = Number(meal.NUTR_CONT5);
          const meal_natruim = Number(meal.NUTR_CONT6);
          const meal_cholesterol = Number(meal.NUTR_CONT7);
          const meal_saturatedfatty = Number(meal.NUTR_CONT8);
          const meal_transfat = Number(meal.NUTR_CONT9);
          const updated_date = new Date();

          const mealInfo = {
            meal_code,
            meal_name,
            meal_kcal,
            meal_carb,
            meal_protein,
            meal_fat,
            meal_sugars,
            meal_natruim,
            meal_cholesterol,
            meal_saturatedfatty,
            meal_transfat,
            updated_date,
          };

          await mealModel.create(mealInfo);
        }
        return res.status(200).json({
          isSuccess: true,
          message: 'meals inserted successfully',
          status: 200,
          result: 'Success',
        });
      });
    } catch (error) {
      next(error);
    }
  },
);

export { mealInitializerRouter };
