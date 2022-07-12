import MealsSearchedList from '../MealsSearchedList';
import * as S from './style';

interface SearchUlWrapperProps {
  food: string[];
}

function SearchUlWrapper({ food }: SearchUlWrapperProps) {
  return (
    <S.SearchListContainer>
      {food.map((el, idx) => {
        return <MealsSearchedList name={el} key={idx}></MealsSearchedList>;
      })}
    </S.SearchListContainer>
  );
}

export default SearchUlWrapper;
