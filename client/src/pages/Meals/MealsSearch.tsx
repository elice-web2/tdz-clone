import styled from 'styled-components';
import { useState, useRef } from 'react';
import Container from '../../components/styles/Container';
import Navbar from '../../components/common/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faArrowRight,
  faPlus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const MealsSearch: React.FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <SearchContainer>
        <SearchBox>
          <span className="searchIcon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <button
            className="XBtn"
            onClick={() => {
              setInputValue('');
              if (inputRef.current) {
                inputRef.current.focus();
              }
            }}
          >
            X
          </button>
          <SearchInput
            type="text"
            value={inputValue}
            ref={inputRef}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(event.target.value);
            }}
            onFocus={() => {
              setIsSearch(true);
            }}
          ></SearchInput>
        </SearchBox>
        <SearchBtn type="submit">검색</SearchBtn>
      </SearchContainer>
      <ButtonContainer>
        <SearchTabBtn
          isSearch={isSearch}
          onClick={() => {
            setIsSearch(true);
            setInputValue('');
            inputRef.current && inputRef.current.focus();
          }}
        >
          검색
        </SearchTabBtn>
        <BookMarkTabBtn
          isSearch={isSearch}
          onClick={() => {
            setIsSearch(false);
            setInputValue('');
          }}
        >
          즐겨찾기
        </BookMarkTabBtn>
      </ButtonContainer>
      {isSearch ? (
        <SearchUlWrapper
          food={['신라면', '짜파게티', '불닭볶음면']}
        ></SearchUlWrapper>
      ) : (
        <BookMarkUlWrapper food={['밥', '된장찌개']}></BookMarkUlWrapper>
      )}

      <Navbar />
    </Container>
  );
};

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  padding: 20px 5px;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
`;

const SearchBox = styled.div`
  position: relative;
  margin: 0 10px;

  .searchIcon {
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 18px;
  }

  .XBtn {
    position: absolute;
    background-color: white;
    border: none;
    top: 9px;
    right: 13px;
    font-size: 16px;
    color: gray;
    cursor: pointer;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 20px;
  padding-left: 35px;
  font-size: 16px;
`;

const SearchBtn = styled.button`
  width: 60px;
  height: 30px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 420px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: 20px 0 15px 0;
`;
interface SearchingBtn {
  isSearch: boolean;
}

const SearchTabBtn = styled.button<SearchingBtn>`
  position: relative;
  width: 180px;
  height: 40px;
  background-color: ${(props) =>
    props.isSearch === true ? props.theme.mainColor.lighter : '#f7f7f7'};
  border: none;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 16px;
  cursor: pointer;
`;

const BookMarkTabBtn = styled(SearchTabBtn)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${(props) =>
    props.isSearch === true ? '#f7f7f7' : props.theme.mainColor.lighter};
`;

const SearchUlWrapper: React.FC<{ food: string[] }> = (props) => {
  return (
    <SearchListContainer>
      {props.food.map((el) => {
        return <ItemsList name={el}></ItemsList>;
      })}
    </SearchListContainer>
  );
};

const BookMarkUlWrapper: React.FC<{ food: string[] }> = (props) => {
  return (
    <SearchListContainer>
      {props.food.map((el) => {
        return <ItemsList name={el}></ItemsList>;
      })}
    </SearchListContainer>
  );
};

const SearchListContainer = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const ItemsList: React.FC<{ name: string }> = (props) => {
  const List = styled.li`
    width: 360px;
    padding-top: 5px;
    border-bottom: 1px solid gray;
  `;
  const NamedInfo = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 10px 10px 10px;

    .arrowIcon {
      font-size: 20px;
      cursor: pointer;
    }

    .title {
      font-size: 20px;
      font-weight: bold;
      margin-right: 15px;
      cursor: pointer;
    }
    .starIcon {
      font-size: 20px;
      position: absolute;
      right: 15px;
      cursor: pointer;
    }

    .plusIcon {
      font-size: 20px;
      position: absolute;
      right: 18px;
      top: 60px;
      cursor: pointer;
    }
  `;
  const QuanInfo = styled.p`
    font-size: 14px;
    padding: 3px 10px 10px 13px;
    margin-bottom: 20px;
  `;
  return (
    <List>
      <NamedInfo>
        <div className="title">{props.name}</div>
        <span className="arrowIcon">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
        <span className="plusIcon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="starIcon">
          <FontAwesomeIcon icon={faStar} />
        </span>
      </NamedInfo>
      <QuanInfo>1인분</QuanInfo>
    </List>
  );
};

export default MealsSearch;
