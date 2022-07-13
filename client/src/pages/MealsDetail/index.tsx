import { useState, useEffect, useRef } from 'react';
import * as S from './style';
import Container from '../../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/common/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from '../../api';

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

function MealsDetail() {
  const [count, setCount] = useState(1);
  const [foodInfo, setFoodInfo] = useState<GetMealDataObj | null>(null);
  const navigate = useNavigate();
  const params = useParams();
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    api.get(`/api/meal/${params.name}`).then((res: any) => {
      setFoodInfo(res.data[0]);
    });
  }, [foodInfo]);

  const plusHandler = () => {
    setCount((cur) => cur + 1);
  };

  const minusHandler = () => {
    if (count !== 1) {
      setCount((cur) => cur - 1);
    }
  };

  return (
    <Container>
      <S.MealsContainer>
        <S.MealsInfoBox>
          <S.IconBox>
            <div
              className="arrow-icon"
              onClick={() => {
                navigate('/meals/search');
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>

            <div className="star-icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </S.IconBox>
          <S.Title>{foodInfo?.name}</S.Title>
          <S.MainNutrientBox>
            <div className="info-text">
              <p>칼로리</p>
              <p>{foodInfo?.kcal}kcal</p>
            </div>
            <div className="info-text">
              <p>탄수화물</p>
              <p>{foodInfo?.carb}g</p>
            </div>
            <div className="info-text">
              <p>단백질</p>
              <p>{foodInfo?.protein}g</p>
            </div>
            <div className="info-text">
              <p>지방</p>
              <p>{foodInfo?.fat}g</p>
            </div>
          </S.MainNutrientBox>
          <S.SubNutrientBox>
            <div className="sub-content">
              <p>나트륨</p>
              <p>{foodInfo?.natruim}mg</p>
            </div>
            <div className="sub-content">
              <p>콜레스테롤</p>
              <p>{foodInfo?.cholesterol}mg</p>
            </div>

            <div className="sub-content">
              <p>트랜스지방</p>
              <p>{foodInfo?.transfat}g</p>
            </div>
            <div className="sub-content">
              <p>포화지방</p>
              <p>{foodInfo?.saturatedfatty}g</p>
            </div>
          </S.SubNutrientBox>
          <S.SelectBox>
            <select ref={selectRef}>
              <option value="quantity">1개(1g)</option>
              <option value="gram">g</option>
            </select>
            <div className="countBtnBox">
              <button onClick={minusHandler}>-</button>
              <input type="number" value={count}></input>
              <button onClick={plusHandler}>+</button>
            </div>
          </S.SelectBox>
          <S.AddBtn>식단 추가</S.AddBtn>
        </S.MealsInfoBox>
      </S.MealsContainer>
      <Navbar />
    </Container>
  );
}

export default MealsDetail;
