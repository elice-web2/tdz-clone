import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './style';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import dayjs from 'dayjs';
import { updateDate } from '../../../slices/dateSlice';
import { useState } from 'react';
import CalendarStamp from '../../CalendarStamp';
import { parseDateFromNow } from '../../../utils';

function DateNavigation() {
  const dispatch = useAppDispatch();
  const date = useAppSelector(({ date }) => date.value);
  const [toggleCalendar, setToggleCalendar] = useState(false);

  const onClickLeftAndRight = (number: number) => {
    const changedDate = dayjs(date).add(number, 'd').format('YYYY-MM-DD');
    dispatch(updateDate(changedDate));
    setToggleCalendar(false);
  };

  const onClicktoggleCalendar = () => {
    setToggleCalendar((prev) => !prev);
  };

  const closeCalendar = () => {
    setToggleCalendar(false);
  };

  return (
    <>
      <S.Wrapper>
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => onClickLeftAndRight(-1)}
        />

        <S.DateContainer onClick={onClicktoggleCalendar}>
          <p>{parseDateFromNow(date)}</p>
          <FontAwesomeIcon icon={faAngleDown} />
        </S.DateContainer>
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => onClickLeftAndRight(1)}
        />
      </S.Wrapper>
      {toggleCalendar && <CalendarStamp closeCalendar={closeCalendar} />}
    </>
  );
}

export default DateNavigation;
