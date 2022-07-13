import styled from 'styled-components';

export const List = styled.li`
  width: 360px;
  padding-top: 5px;
  border-bottom: 1px solid gray;
`;
export const NamedInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 10px 10px 10px;

  .arrowIcon {
    font-size: 20px;
    cursor: pointer;
  }

  .title {
    margin-right: 15px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
  }
  .starIcon {
    position: absolute;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }

  .plusIcon {
    position: absolute;
    right: 18px;
    top: 60px;
    font-size: 20px;
    cursor: pointer;
  }
`;
export const QuanInfo = styled.p`
  margin-bottom: 20px;
  padding: 3px 10px 10px 13px;
  font-size: 14px;
`;
