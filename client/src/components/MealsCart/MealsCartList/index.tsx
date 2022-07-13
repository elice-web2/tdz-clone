import * as S from './style';

interface MealsCartListProps {
  name: string;
  quantity: Promise<number> | any;
}

function MealsCartList({ name, quantity }: MealsCartListProps) {
  return (
    <li key={name}>
      <S.MealHeaderBox>
        <S.MealTitle>{name}</S.MealTitle>
        <S.MealDeleteBtn>X</S.MealDeleteBtn>
      </S.MealHeaderBox>
      <S.QuanText>{quantity}인분</S.QuanText>
    </li>
  );
}

export default MealsCartList;
