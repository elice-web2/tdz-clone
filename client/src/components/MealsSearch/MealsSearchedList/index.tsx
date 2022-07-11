import * as S from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faPlus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

function MealsSearchedList(props: { name: string }) {
  return (
    <S.List>
      <S.NamedInfo>
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
      </S.NamedInfo>
      <S.QuanInfo>1인분</S.QuanInfo>
    </S.List>
  );
}

export default MealsSearchedList;
