import { FavoriteModel } from '../db';
import { FavoriteInfo, FavoriteData } from '../customType/favorite.type';

class FavoriteService {
  constructor(private favoriteModel: FavoriteModel) {
    this.favoriteModel = favoriteModel;
  }

  //즐겨찾기 등록
  async addFavorite(favoriteInfo: FavoriteInfo): Promise<FavoriteData> {
    return await this.favoriteModel.create(favoriteInfo);
  }

  //즐겨찾기 전체 조회
  async getAllFavorites(): Promise<FavoriteData[]> {
    return await this.favoriteModel.findAll();
  }
}
