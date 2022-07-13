import Container from '../../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import DateNavigation from '../../components/common/DateNavigation';
import Logo from '../../components/common/Logo';
import Navbar from '../../components/common/Navbar';
import Progressbar from '../../components/home/Progressbar';
import DonutProgressbar from '../../components/home/DonutProgressbar';
import * as S from './style';
import * as Api from '../../api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getUsersInfoAsync, postLoginAsync } from '../../slices/usersInfoSlice';
import { useNavigate } from 'react-router-dom';

interface mealsData {
  kcal: number;
  carb: number;
  protein: number;
  fat: number;
}

const calculatePercentage = (value: number, total: number) => {
  if (!value && !total) return 0;
  return (value / total) * 100;
};

function Home() {
  const navigate = useNavigate();
  const [meals, setMeals] = useState<mealsData[]>([]);
  const dispatch = useAppDispatch();
  const { current_weight, nutrient } = useAppSelector(
    ({ usersInfo }) => usersInfo.value,
  );

  const getMealsHistoryByDate = async (date: string) => {
    const data = await Api.get(
      `/api/mealhistory/${dayjs(date).format('YYYY-MM-DD')}`,
    );
    setMeals(data?.data.map((data: any) => data.meals).flat());
  };

  const nutrientSum = meals.reduce(
    (acc, meal) => ({
      kcal: acc.kcal + meal.kcal,
      protein: acc.protein + meal.protein,
      fat: acc.fat + meal.fat,
      carb: acc.carb + meal.carb,
    }),
    { kcal: 0, protein: 0, fat: 0, carb: 0 },
  );

  const onClickAddMealButton = () => {
    navigate('/meals/search');
  };

  useEffect(() => {
    // 로그인 기능이 완전하지 않아 이 컴포넌트에서 임시로 로그인한 후 유저정보를 가져옴
    // 그 후 유저의 일자별 식단을 조회해서 영양소의 합을 구함
    new Promise((resolve) => {
      resolve(
        dispatch(
          postLoginAsync({ email: 'test4@gmail.com', password: '1234' }),
        ),
      );
    })
      .then(() => {
        dispatch(getUsersInfoAsync());
      })
      .then(() => {
        getMealsHistoryByDate('2022-07-15');
      });
  }, []);

  return (
    <Container>
      <Logo />
      <DateNavigation />
      <S.DonutContainer>
        {/* 목표 칼로리 / 현재 칼로리 * 100 백분율 계산해서 기입 필요 */}
        <DonutProgressbar
          percentage={calculatePercentage(nutrientSum.kcal, nutrient.kcal)}
        >
          <S.CalorieContainer>
            {/* 현재 칼로리 */}
            <p>{nutrientSum.kcal} kcal</p>
            {/* 목표 칼로리  */}
            <p>/ {nutrient.kcal} kcal</p>
          </S.CalorieContainer>
        </DonutProgressbar>
      </S.DonutContainer>
      <S.NutrientContainer>
        <Progressbar
          title={'탄수화물'}
          percent={calculatePercentage(nutrientSum.carb, nutrient.carb)}
          currentValue={`${nutrientSum.carb}g`}
          goalValue={`${nutrient.carb}g`}
          color="#FAA0A0"
        />
        <Progressbar
          title={'단백질'}
          percent={calculatePercentage(nutrientSum.protein, nutrient.protein)}
          currentValue={`${nutrientSum.protein}g`}
          goalValue={`${nutrient.protein}g`}
          color="#00D287"
        />
        <Progressbar
          title={'지방'}
          percent={calculatePercentage(nutrientSum.fat, nutrient.fat)}
          currentValue={`${nutrientSum.fat}g`}
          goalValue={`${nutrient.fat}g`}
          color="#FAF461"
        />
      </S.NutrientContainer>
      <S.ResponsiveContainer>
        <S.Span>오늘의 몸무게를 기록하세요!</S.Span>
        <S.WeightContainer>
          <p>{current_weight}kg</p>
          <FontAwesomeIcon icon={faPen} />
        </S.WeightContainer>
        <S.ButtonContainer onClick={onClickAddMealButton}>
          <button>식단 추가하기</button>
        </S.ButtonContainer>
      </S.ResponsiveContainer>

      <Navbar />
    </Container>
  );
}

export default Home;
