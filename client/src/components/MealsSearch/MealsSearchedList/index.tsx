import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../hooks';
import NoSearched from '../../MealsCart/NoSearched';
import { useNavigate } from 'react-router-dom';

import { addBookMark } from '../../../slices/bookMarkSlice';

interface GetMealDataObj {
  carb: number;
  cholesterol: number;
  code: string;
  createdAt: string;
  fat: number;
  kcal: number;
  name: string;
  natruim: number;
  protein: number;
  saturatedfatty: number;
  sugars: number;
  transfat: number;
  updatedAt: string;
  updated_date: string;
  __v: number;
  _id: string;
}

interface MealsSearchedListProps {
  result: GetMealDataObj[];
  inputValue: string;
}

function MealsSearchedList({ inputValue, result }: MealsSearchedListProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <S.SearchListContainer>
      {result.length === 0 || !inputValue ? (
        <NoSearched></NoSearched>
      ) : (
        result.map((food: GetMealDataObj) => {
          return (
            <S.List key={food.code}>
              <S.NamedInfo>
                <div className="title">{food.name}</div>
                <span
                  className="arrowIcon"
                  onClick={() => {
                    navigate(`/meals/detail/${food.code}`);
                  }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                <span className="plusIcon">
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                <span
                  className="starIcon"
                  onClick={() => {
                    dispatch(
                      addBookMark({
                        meal_id: food.code,
                      }),
                    );
                  }}
                >
                  <img src={require('../../../assets/blackStar.png')}></img>
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
