import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import dayjs from 'dayjs';
import { updateDate } from '../../../slices/dateSlice';
import { parseDateFromNow } from './parseDateFromNow';

function DateNavigation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const date = useAppSelector(({ date }) => date.value);

  const onClickLeftAndRight = (number: number) => {
    const changedDate = dayjs(date).add(number, 'd').format('YYYY-MM-DD');
    dispatch(updateDate(changedDate));
  };

  const clickCalendarHandler = () => {
    navigate('/calendar');
  };

  return (
    <S.Wrapper>
      <FontAwesomeIcon
        icon={faAngleLeft}
        onClick={() => onClickLeftAndRight(-1)}
      />

      <S.DateContainer onClick={clickCalendarHandler}>
        <p>{parseDateFromNow(date)}</p>
        <FontAwesomeIcon icon={faAngleDown} />
      </S.DateContainer>
      <FontAwesomeIcon
        icon={faAngleRight}
        onClick={() => onClickLeftAndRight(1)}
      />
    </S.Wrapper>
  );
}

export default DateNavigation;
