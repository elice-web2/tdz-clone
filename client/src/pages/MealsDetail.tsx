import styled from 'styled-components';
import Container from '../components/styles/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/common/Navbar';
import { Link } from 'react-router-dom';

const MealsDetail: React.FC = () => {
  return (
    <Container>
      <MealsContainer>
        <MealsInfoBox>
          <IconBox>
            <StyledLink to="/meals/search">
              <div className="arrow-icon">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
            </StyledLink>
            <div className="star-icon">
              <FontAwesomeIcon icon={faStar} />
            </div>
          </IconBox>
          <Title>신라면</Title>
          <MainNutrientBox>
            <div className="info-text">
              <p>칼로리</p>
              <p>700kcal</p>
            </div>
            <div className="info-text">
              <p>탄수화물</p>
              <p>100g</p>
            </div>
            <div className="info-text">
              <p>단백질</p>
              <p>20g</p>
            </div>
            <div className="info-text">
              <p>지방</p>
              <p>20g</p>
            </div>
          </MainNutrientBox>
          <SubNutrientBox>
            <div className="left-info">
              <div className="left-content">
                <p>나트륨</p>
                <p>100mg</p>
              </div>
              <div className="left-content">
                <p>콜레스테롤</p>
                <p>100mg</p>
              </div>
            </div>
            <div className="right-info">
              <div className="right-content">
                <p>트랜스지방</p>
                <p>5g</p>
              </div>
              <div className="right-content">
                <p>포화지방</p>
                <p>10g</p>
              </div>
            </div>
          </SubNutrientBox>
          <SelectBox>
            <select>
              <option value="quantity">1개(180g)</option>
              <option value="gram">g</option>
            </select>
            <div className="countBtnBox">
              <button>-</button>
              <input type="number" value="0"></input>
              <button>+</button>
            </div>
          </SelectBox>
          <AddBtn>식단 추가</AddBtn>
        </MealsInfoBox>
      </MealsContainer>
      <Navbar />
    </Container>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const MealsContainer = styled.div`
  width: 420px;
  height: 840px;
`;

const MealsInfoBox = styled.div`
  width: 100%;
  height: 650px;
  background-color: ${({ theme }) => theme.mainColor.darker};
  position: relative;
`;

const IconBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  box-sizing: border-box;

  .arrow-icon {
    margin-left: 5px;
    cursor: pointer;
  }

  .star-icon {
    margin-right: 5px;
    cursor: pointer;
    color: yellow;
  }
`;
const Title = styled.h1`
  width: 100%;
  box-sizing: border-box;
  padding: 20px 0;
  padding-left: 30px;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 15px;
`;
const MainNutrientBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .info-text {
    font-weight: bold;
    font-size: 18px;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
  }
`;
const SubNutrientBox = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid black;
  padding: 20px 30px;
  box-sizing: border-box;
  margin-bottom: 50px;

  .left-info,
  .right-info {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: space-between;

    .left-content,
    .right-content {
      display: flex;
    }
  }
`;
const SelectBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  select {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
  }
  .countBtnBox {
    display: flex;
    align-items: center;

    input {
      width: 30px;
      height: 30px;
      text-align: center;
      border: none;
      padding: 0;
      font-size: 18px;
      font-weight: bold;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    button {
      width: 30px;
      height: 30px;
      border: none;
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
const AddBtn = styled.button`
  width: 120px;
  height: 40px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 10px;
  background-color: white;
  border: none;
  position: absolute;
  bottom: 30px;
  left: 150px;
  cursor: pointer;
`;

export default MealsDetail;
