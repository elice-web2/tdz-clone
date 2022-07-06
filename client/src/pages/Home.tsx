import styled from 'styled-components';
import DonutProgressbar from '../components/chart/DonutProgressbar';
import Container from '../components/styles/Container';

export default function Home() {
  return (
    <Container>
      <DonutContainer>
        {/* 목표 칼로리 / 현재 칼로리 * 100 백분율 계산해서 기입 필요 */}
        <DonutProgressbar percentage={66}>
          <CalorieContainer>
            {/* 현재 칼로리 */}
            <p>700 kcal</p>
            {/* 목표 칼로리  */}
            <p>/ 1000 kcal</p>
          </CalorieContainer>
        </DonutProgressbar>
      </DonutContainer>
    </Container>
  );
}

const DonutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px 0;
`;

const CalorieContainer = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 16px;

  p {
    padding: 5px 0;
  }
`;
