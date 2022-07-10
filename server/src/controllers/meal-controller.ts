import is from '@sindresorhus/is';
import { Request, Response } from 'express';
import { mealService } from '../services';

class MealController {
  async getMeal(req: Request, res: Response, next) {
    try {
      const meal_name = req.params.meal_name;

      const MealData = await mealService.findMeal(meal_name);

      res.status(200).json(MealData);
    } catch (error) {
      next(error);
    }
  }
}

const mealController = new MealController();
export { mealController };
