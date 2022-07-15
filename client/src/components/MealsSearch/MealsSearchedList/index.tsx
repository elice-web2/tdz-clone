import * as S from './style';
import * as api from '../../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import NoSearched from '../NoSearched';
import { addMeals } from '../../../slices/mealsSlice';
import {
  MealData,
  MealsSearchedListProps,
} from '../../../customType/meal.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';

function MealsSearchedList({ inputValue, result }: MealsSearchedListProps) {
  const [isBookMarked, setIsBookMarked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      result.map((meal) => {
        api.get(`/api/favorites/${meal._id}`).then((res) => {
          if (!res) {
            setIsBookMarked(false);
          } else {
            setIsBookMarked(true);
          }
        });
      });
    })();
  }, [result]);

  function addToCart(food: MealData) {
    dispatch(addMeals(food));
    navigate('/meals/cart');
  }

  function bookmarkHandler(id: string) {
    if (isBookMarked) {
      api.delete(`/api/favorites/${id}`).then(() => {
        setIsBookMarked(false);
      });
    } else {
      api.post('/api/favorites', { meal_id: id }).then(() => {
        setIsBookMarked(true);
      });
    }
  }

  return (
    <S.SearchListContainer>
      {result.length === 0 || !inputValue ? (
        <NoSearched></NoSearched>
      ) : (
        result.map((food: MealData) => {
          return (
            <S.List key={food.code}>
              <S.NamedInfo>
                <div
                  className="title"
                  onClick={() => {
                    navigate(`/meals/detail/${food.name}`);
                  }}
                >
                  {food.name}
                </div>
                <span
                  className="arrowIcon"
                  onClick={() => {
                    navigate(`/meals/detail/${food.name}`);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span
                  className="plusIcon"
                  onClick={() => {
                    addToCart(food);
                  }}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span
                  className="starIcon"
                  onClick={() => {
                    bookmarkHandler(food._id);
                  }}
                >
                  <img
                    src={
                      isBookMarked
                        ? require('../../../assets/YellowStar.png')
                        : require('../../../assets/blackStar.png')
                    }
                  ></img>
                </span>
              </S.NamedInfo>
              <S.QuanInfo>1인분</S.QuanInfo>
            </S.List>
          );
        })
      )}
    </S.SearchListContainer>
  );
}
export default MealsSearchedList;
