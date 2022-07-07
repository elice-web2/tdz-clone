import styled from 'styled-components';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const MealsCart: React.FC = () => {
  return (
    <Container>
      <ShowNutrientInfo>
        <IconBox>
          <div className="arrow-icon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </IconBox>
        <TotalKcalBox>
          <h1>총 칼로리</h1>
          <p>1344kcal</p>
        </TotalKcalBox>
        <TdzBox>
          <NutrientInfo nutrient={'탄수화물'} gram={400} />
          <NutrientInfo nutrient={'단백질'} gram={200} />
          <NutrientInfo nutrient={'지방'} gram={300} />
        </TdzBox>
      </ShowNutrientInfo>
    </Container>
  );
};

interface NutrientTypeProps {
  nutrient: string;
  gram: number;
}
const NutrientInfo: React.FC<NutrientTypeProps> = (props) => {
  return (
    <>
      <NutrientInfoBox color={props.nutrient}>
        <div className="nutrient">
          <span className="circle"></span>
          {props.nutrient}
        </div>
        <div>
          <span className="gram">{props.gram}</span>g
        </div>
      </NutrientInfoBox>
    </>
  );
};

const NutrientInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .nutrient {
    position: relative;
    margin-bottom: 5px;
  }

  .circle {
    position: absolute;
    left: -25px;
    top: 2px;
    display: inline-block;
    width: 10px;
    height: 10px;

    background-color: ${({ color }) => {
      if (color === '탄수화물') {
        return 'pink';
      } else if (color === '단백질') {
        return '#6ff542';
      } else {
        return 'yellow';
      }
    }};
    border-radius: 50%;
    margin: 0 10px;
  }
  .gram {
    font-size: 28px;
    font-weight: bold;
  }
`;

const ShowNutrientInfo = styled.div`
  width: 420px;
  height: 240px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${({ theme }) => theme.mainColor.normal};
`;

const IconBox = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 25px;
  box-sizing: border-box;

  .arrow-icon {
    margin-left: 5px;
    cursor: pointer;
  }
`;

const TotalKcalBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 40px 0;
  font-size: 28px;
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
`;

const TdzBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-left: 5px;
`;
export default MealsCart;
