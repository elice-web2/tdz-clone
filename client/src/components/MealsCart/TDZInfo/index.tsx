import * as S from './style';
function TDZInfo(props: { nutrient: string; gram: number }) {
  return (
    <>
      <S.NutrientInfoBox color={props.nutrient}>
        <div className="nutrient">
          <span className="circle"></span>
          {props.nutrient}
        </div>
        <div>
          <span className="gram">{props.gram}</span>g
        </div>
      </S.NutrientInfoBox>
    </>
  );
}

export default TDZInfo;
