import { Router } from 'express';
import { mealController } from '../controllers';

const mealRouter = Router();

// 음식 이름으로 정보 조회
mealRouter.get('/:meal_name', mealController.getMeal);

export { mealRouter };
