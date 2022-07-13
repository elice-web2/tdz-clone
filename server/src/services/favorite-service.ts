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

  //사용자별 즐겨찾기 조회
  async getFavoritesByUser(userId: string): Promise<FavoriteData[]> {
    const favorites = await this.favoriteModel.findByUser(userId);
    if (!favorites) {
      return {} as Promise<FavoriteData[]>;
    }

    return favorites;
  }
}
