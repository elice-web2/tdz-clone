import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseChimney,
  faUtensils,
  faChartColumn,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Container from '../styles/Container';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <NavContainer>
        <MenuBox
          onClick={() => {
            navigate('/home');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faHouseChimney} />
          </div>
          <div>Home</div>
        </MenuBox>

        <MenuBox
          onClick={() => {
            navigate('/meals');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faUtensils} />
          </div>
          <div>식단</div>
        </MenuBox>
        <MenuBox
          onClick={() => {
            navigate('/chart');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faChartColumn} />
          </div>
          <div>Chart</div>
        </MenuBox>

        <MenuBox
          onClick={() => {
            navigate('/mypage');
          }}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>MyPage</div>
        </MenuBox>
      </NavContainer>
    </Container>
  );
};

const NavContainer = styled.div`
  display: flex;
  height: 60px;
  background-color: ${({ theme }) => theme.mainColor.lighter};
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 105px;
  margin: 0 5px;
  cursor: pointer;

  .icon {
    padding: 5px;
  }
`;
export default Navbar;
