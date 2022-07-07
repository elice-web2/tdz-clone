import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface MealsCartModalProps {
  setModal: (value: boolean) => void;
}
const MealsCartModal: React.FC<MealsCartModalProps> = (props) => {
  const ModalContainer = styled.div`
    width: 300px;
    position: absolute;
    top: 220px;
    z-index: 1;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    background-color: white;
    margin-left: 60px;
  `;

  const XBtn = styled.button`
    font-size: 13px;
    color: gray;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    border: none;
    background: none;
  `;
  const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    padding: 30px 10px 10px 10px;
    margin-bottom: 15px;
  `;
  const BtnContainer = styled.div`
    width: 250px;
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 10px;
    margin-bottom: 20px;

    button {
      width: 70px;
      height: 40px;
      font-size: 16px;
      border-radius: 10px;
      border: none;
      background-color: ${({ theme }) => theme.mainColor.lighter};
      cursor: pointer;
    }
  `;
  const CompleteBtn = styled.button`
    width: 120px;
    height: 40px;
    font-size: 18px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: ${({ theme }) => theme.mainColor.darker};
    cursor: pointer;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
  `;
  return (
    <ModalContainer>
      <XBtn
        onClick={() => {
          props.setModal(false);
        }}
      >
        X
      </XBtn>
      <Title>식사 종류</Title>
      <BtnContainer>
        <button>아침</button>
        <button>점심</button>
        <button>저녁</button>
        <button>간식</button>
      </BtnContainer>
      <StyledLink to="/meals">
        <CompleteBtn>완료</CompleteBtn>
      </StyledLink>
    </ModalContainer>
  );
};

export default MealsCartModal;
