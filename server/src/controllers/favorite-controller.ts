import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { favoriteService, mealService } from '../services';
import { FavoriteInfo, FavoriteData } from '../customType/favorite.type';

//즐겨찾기 추가
const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    const meal_id: string = req.body.meal_id;
    const user_id: string = req.currentUserId!;

    const favoriteInfo: FavoriteInfo = {
      meal_id,
      user_id,
    };

    const isMealExist = await favoriteService.findMealInFavorites(favoriteInfo);

    console.log(isMealExist);

    if (isMealExist) {
      throw new Error('이미 즐겨찾기에 등록된 식단입니다');
    }

    const newFavorite = await favoriteService.addFavorite(favoriteInfo);

    res.status(200).json(newFavorite);
  } catch (error) {
    next(error);
  }
};

const allFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
  } catch (error) {
    next(error);
  }
};
export { add };
