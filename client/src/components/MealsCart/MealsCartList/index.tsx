import * as S from './style';

function MealsCartList(props: { name: string; quantity: number }) {
  return (
    <li>
      <S.MealHeaderBox>
        <S.MealTitle>{props.name}</S.MealTitle>
        <S.MealDeleteBtn>X</S.MealDeleteBtn>
      </S.MealHeaderBox>
      <S.QuanText>{props.quantity}인분</S.QuanText>
    </li>
  );
}

export default MealsCartList;
