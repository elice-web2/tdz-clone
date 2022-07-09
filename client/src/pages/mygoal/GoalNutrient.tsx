import { useNavigate } from 'react-router-dom';
import Container from '../../components/styles/Container';
import * as S from '../../components/mygoal/StepForm'

const GoalNutrient:React.FC = () => {
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
   navigate("/home")
  }

  return (
    <Container>
    <S.MyGoalWrapper>
      <S.CircleContainer>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle></S.StepCircle>
        <S.StepCircle active></S.StepCircle> 
      </S.CircleContainer>
      <S.Step>STEP 3</S.Step>
      <S.Title>탄단지 열량 입력하기</S.Title>
      <S.Title align="end" className='subTitle'>목표 섭취 열량</S.Title>
      <form onSubmit={submitHandler}>
        <S.InputTag widthSize="medium" defaultValue="1200"></S.InputTag>
        
        <S.Title className='subCalorie'>철수님의 일일 건장 섭취량은</S.Title>
        <S.Title className='calorie'>1200 kcal</S.Title>
        <S.Title className='subCalorie'>입니다.</S.Title>

        <S.Button 
          type="submit"
          value="다음"
        ></S.Button>
      </form>
    </S.MyGoalWrapper>
</Container>
  )
}

export default GoalNutrient;