import is from '@sindresorhus/is';
import { Request, Response } from 'express';
import { mealhistoryService } from '../services';

class MealHistoryController {
  async getMealList(req: Request, res: Response, next) {
    try {
      // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
      if (is.emptyObject(req.body)) {
        throw new Error(
          'headers의 Content-Type을 application/json으로 설정해주세요',
        );
      }

      const user_id = req.params.id;
      const date = new Date(req.params.date);

      const newMealData = await mealhistoryService.getMeals(user_id, date);

      res.status(200).json(newMealData);
    } catch (error) {
      next(error);
    }
  }
}

const mealhistoryController = new MealHistoryController();
export { mealhistoryController };
