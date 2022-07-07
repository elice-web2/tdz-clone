import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Logo from '../components/common/Logo';
import Navbar from '../components/common/Navbar';
import Container from '../components/styles/Container';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
} from 'chart.js';

// api/chart/daily?from=2022-06-28&to=2022-07-04  7일
// api/chart/weekly?from=2022-06-10&to=2022-07-07  4주
// api/chart/monthly?from=2022-05&to=2022-07 3개월

// 값이 숫자인 요소는 단위기간 영양소 총합
// 값이 배열인 요소는 단위기간 대비 평균값 ([6.10~6.16 의 평균, 6.17~6.23의 평균] 이런식)
// daily는 7일로 나눠서 길이가 7인 배열
// weekly는 4주로 나눠서 길이가 4인 배열 (각각이 daily 배열의 평균)
// monthly는 3개월로 나눠서 길이가 3인 배열 (각각이 weekly 배열의 평균)

const DUMMY_DATA_DAILY = {
  체중: [70, 70.5, 69.4, 70.2, 70.2, 70.2, 71],
  칼로리평균: [1550, 1300, 1400, 1200, 1600, 1700, 1800],
  탄수화물: [65, 66, 67, 68, 69, 70, 71],
  단백질: [65, 66, 67, 68, 69, 70, 71],
  지방: [65, 66, 67, 68, 69, 70, 71],
  칼로리합: 12000,
  탄수화물합: 1000,
  단백질합: 1000,
  지방합: 1000,
  포화지방합: 100,
  당류합: 100,
  콜레스테롤합: 100,
  나트륨합: 100,
};

const weightData = {
  labels: ['6/30', '7/1', '7/2', '7/3', '7/4', '7/5', '7/6'],
  datasets: [
    {
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      data: DUMMY_DATA_DAILY.체중,
    },
  ],
};

const CalorieData = {
  labels: ['6/30', '7/1', '7/2', '7/3', '7/4', '7/5', '7/6'],
  datasets: [
    {
      base: 0,
      backgroundColor: 'green',
      data: DUMMY_DATA_DAILY.칼로리평균,
      maxBarThickness: 10,
    },
  ],
};

const weightOptions = {
  plugins: {
    title: {
      display: true,
      text: '체중',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
};
const calorieOptions = {
  plugins: {
    title: {
      display: true,
      text: '섭취 칼로리',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

export default function ChartPage() {
  const [filter, setFilter] = useState<'DAILY' | 'WEEKLY' | 'MONTHLY'>('DAILY');

  const onClickFilter = (filter: 'DAILY' | 'WEEKLY' | 'MONTHLY') => {
    // 일간, 주간, 월간 필터 클릭 이벤트
    setFilter(filter);
  };

  // ChartJS를 react 에서 쓸 수 있도록 하는 코드
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    LineElement,
    BarElement,
  );

  return (
    <Container>
      <Logo />

      <FilterContainer>
        <Filter
          onClick={() => onClickFilter('DAILY')}
          isSelected={filter === 'DAILY'}
        >
          일간
        </Filter>
        <Filter
          onClick={() => onClickFilter('WEEKLY')}
          isSelected={filter === 'WEEKLY'}
        >
          주간
        </Filter>
        <Filter
          onClick={() => onClickFilter('MONTHLY')}
          isSelected={filter === 'MONTHLY'}
        >
          월간
        </Filter>
      </FilterContainer>

      <PeriodContainer>
        <FontAwesomeIcon icon={faAngleLeft} />
        <p>
          {/* 필터에 따라 날짜를 보여주고 왼쪽 오른쪽 버튼 클릭 시 날짜를 변경 가능하게 해야함 */}
          {dayjs().add(-1, 'week').format('YY-MM-DD')} ~{' '}
          {dayjs().add(-1, 'day').format('YY-MM-DD')}
        </p>
        <FontAwesomeIcon icon={faAngleRight} />
      </PeriodContainer>

      <Line data={weightData} options={weightOptions} />
      <Bar data={CalorieData} options={calorieOptions} />

      <Heading>영양소 평균</Heading>
      <AverageContainer>
        {/* 칼로리 대비 영양소 4,4,9로 백분율 계산해서 기입 필요 */}
        <CircleContainer>
          <NutirientCircle bgColor="#5386C1" color="white">
            28%
          </NutirientCircle>
          <NutirientCircle bgColor="#FAF461">32%</NutirientCircle>
        </CircleContainer>
        <CircleContainer>
          <ThirdNutirientCircle bgColor="#FAA0A0">40%</ThirdNutirientCircle>
        </CircleContainer>

        <AverageInfoContainer>
          {/* 탄단지 평균 기입 */}
          <NutrientAverage>
            <div>
              <Circle bgColor="#FAA0A0" />
              <span>탄수화물</span>
            </div>
            <p>{(DUMMY_DATA_DAILY.탄수화물합 / 7).toFixed(1)}g</p>
          </NutrientAverage>
          <NutrientAverage>
            <div>
              <Circle bgColor="#5386C1" />
              <span>단백질</span>
            </div>
            <p>{(DUMMY_DATA_DAILY.단백질합 / 7).toFixed(1)}g</p>
          </NutrientAverage>
          <NutrientAverage>
            <div>
              <Circle bgColor="#FAF461" />
              <span>지방</span>
            </div>
            <p>{(DUMMY_DATA_DAILY.지방합 / 7).toFixed(1)}g</p>
          </NutrientAverage>
        </AverageInfoContainer>
      </AverageContainer>

      <Navbar />
    </Container>
  );
}

const Circle = styled.div<{ bgColor: string }>`
  width: 10px;
  height: 10px;
  margin-right: 5px;

  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

const AverageInfoContainer = styled.div`
  ${({ theme }) => theme.flexbox('row', 'center', 'space-evenly')}
`;

const NutrientAverage = styled.div`
  ${({ theme }) => theme.flexbox('column')}

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }
`;

const FilterContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  padding: 20px;

  font-size: 20px;
  font-weight: 700;

  h2 {
    margin: 0 10px;

    cursor: pointer;
  }
`;

const Filter = styled.h2<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? 'black' : 'rgba(0, 0, 0, 0.4)')};
  margin: 0 10px;

  cursor: pointer;
`;

const PeriodContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  font-weight: bold;

  svg {
    width: 20px;
    height: 20px;
    padding: 0 10px;

    cursor: pointer;
  }
`;

const AverageContainer = styled.div`
  padding: 20px 0;
`;

const Heading = styled.h1`
  padding: 5px 10px;

  font-size: 24px;
  font-weight: bold;
`;

const CircleContainer = styled.div`
  ${({ theme }) => theme.flexbox()}

  position: relative;
`;

const NutirientCircle = styled.div<{ bgColor: string; color?: string }>`
  ${({ theme }) => theme.flexbox()}

  width: 100px;
  height: 100px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => (color ? color : 'black')};
  border-radius: 50%;

  font-size: 24px;
  font-weight: bold;
`;

const ThirdNutirientCircle = styled(NutirientCircle)`
  position: relative;
  top: -15px;
`;
