import { Router } from 'express';
import { mealhistoryController } from '../controllers';
const mealhistoryRouter = Router();

// 날짜별 식단 조회
mealhistoryRouter.get('/:id/:date', mealhistoryController.getMealList);

// 식단 등록
mealhistoryRouter.post('/:id');

// 식단 수정
mealhistoryRouter.patch('meal/:meal_id');

// 식단 삭제
mealhistoryRouter.delete('meal/:meal_id');

export { mealhistoryRouter };
