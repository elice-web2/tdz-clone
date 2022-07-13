import is from '@sindresorhus/is';
import { Request, Response, NextFunction } from 'express';
import { favoriteService } from '../services';
import { FavoriteInfo, FavoriteData } from '../customType/favorite.type';

//즐겨찾기 추가
const add = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        'headers의 Content-Type을 application/json으로 설정해주세요',
      );
    }

    const favoriteInfo: FavoriteInfo = req.body;

    const newFavorite = await favoriteService.addFavorite(favoriteInfo);
  } catch (error) {
    next(error);
  }
};

export { add };
