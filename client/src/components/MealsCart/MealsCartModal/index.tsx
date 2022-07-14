import * as S from './style';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postMealsDataAsync } from '../../../slices/mealsSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';

interface MealsCartModalProps {
  setOpenModal: (value: boolean) => void;
}

type selectedType = 'morning' | 'lunch' | 'dinner' | 'snack' | '';

interface MealInfo {
  code: string;
  kcal: number;
  name: string;
  carb: number;
  protein: number;
  fat: number;
  natruim: number;
  cholesterol: number;
  transfat: number;
  saturatedfatty: number;
  servingSize: number;
  quantity: number;
  totalGram: number;
  sugars: number;
  updated_date: string;
}

interface postDataType {
  date: string;
  category: string;
  meals: MealInfo[];
}

function MealsCartModal({ setOpenModal }: MealsCartModalProps) {
  const [selected, setSelected] = useState<selectedType>('');
  const [postData, setPostData] = useState<postDataType>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const meals = useAppSelector(({ meal }) => meal.value);
  const postResultObj = {
    date: '2022-05-01',
    meals,
    category: '간식',
  };
  console.log('보낼내용', postResultObj);

  function modalCloseHandler() {
    setOpenModal(false);
  }

  function clickSelectHandler(time: selectedType) {
    setSelected(time);
  }

  return (
    <S.Container>
      <S.OutsideModal onClick={modalCloseHandler}></S.OutsideModal>
      <S.ModalContainer>
        <S.XBtn
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </S.XBtn>
        <S.Title>식사 종류</S.Title>
        <S.BtnContainer>
          <button
            style={
              selected === 'morning'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('morning')}
          >
            아침
          </button>
          <button
            style={
              selected === 'lunch'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('lunch')}
          >
            점심
          </button>
          <button
            style={
              selected === 'dinner'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('dinner')}
          >
            저녁
          </button>
          <button
            style={
              selected === 'snack'
                ? { background: '#8C9EFF' }
                : { background: '#C0CFFF' }
            }
            onClick={() => clickSelectHandler('snack')}
          >
            간식
          </button>
        </S.BtnContainer>

        <S.CompleteBtn
          onClick={() => {
            dispatch(postMealsDataAsync(postResultObj));
            console.log(dispatch(postMealsDataAsync(postResultObj)));
            // navigate('/meals');
          }}
        >
          완료
        </S.CompleteBtn>
      </S.ModalContainer>
    </S.Container>
  );
}

export default MealsCartModal;
