import { Router } from 'express';
import { errorHandler, loginRequired } from '../middlewares';
import { mealController } from '../controllers';

const mealRouter = Router();

// 음식 이름으로 정보 조회
mealRouter.get('/:meal_name', loginRequired, mealController.getMeal);

// 음식 이름으로 정보 조회
mealRouter.post('/', loginRequired, mealController.addMealByUSer);

export { mealRouter };
