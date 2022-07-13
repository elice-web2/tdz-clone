import * as S from './style';

interface MealsCartListProps {
  name: string;
  quantity: number;
  totalGram: number;
}

function MealsCartList({ name, quantity, totalGram }: MealsCartListProps) {
  return (
    <li key={name}>
      <S.MealHeaderBox>
        <S.MealTitle>{name}</S.MealTitle>
        <S.MealDeleteBtn>X</S.MealDeleteBtn>
      </S.MealHeaderBox>
      <S.QuanBox>
        <S.QuanText>{quantity}인분</S.QuanText>
        <span>({totalGram}g)</span>
      </S.QuanBox>
    </li>
  );
}

export default MealsCartList;
