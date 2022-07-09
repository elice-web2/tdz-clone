import styled from 'styled-components';
interface Props {
  active ?: boolean;
  align ?: string;
}
export const MyGoalWrapper = styled.div`
  padding: 25px;
  text-align: center;
`
export const Button = styled.input`
  width: 220px;
  height: 30px;
  
  background-color: black;
  color: white;
  border-radius: 8px;
  border-style: none;
  font-style:none;
 
`
export const Mode = styled.div`
  border-style: none;
  font-style:none;
  width: 50%; 
  height: 100px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 20px;
  line-height: 100px;
  background-color: lightgrey;
  & + & {
    margin-left: 20px;
}

`

export const FlexContainer = styled.div`
  width:90%;
  margin: 10px auto;
  display:flex;
  justify-content: space-between;
  align-items : center;
  font-size: 14px;
  font-weight: 600;
  &.mode {
    margin-top: 30px;
  }
`
export const CircleContainer = styled.div`
  display:flex;
  margin : 20px 0;
  align-items: center;
`
export const StepCircle = styled.div<Props>`
  width:${props => props.active ? "40px":"30px"};
  height:${props => props.active ? "40px":"30px"};
  border-radius: 50%;
  background-color: ${props => props.active ? "grey":"lightgrey"};

  margin-right: 10px;
  &.activity {
    width: 50px;
    height: 50px;
    margin: 20px auto;
  }

`
export const Title = styled.div<Props>`
  text-align: ${props => props.align === "end" ? "end" : "start"};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  &.subTitle {
    font-weight: 500;
    font-size: 16px;
    margin: 40px 0 10px 0;
  }
  &.subCalorie {
    font-weight:400;
    text-align: center;
   
  }
  &.subCalorie:last-of-type {
    margin-bottom: 100px;
  }
  
  &.calorie {
    font-size: 50px;
    text-align: center;
  }
`
export const Step = styled.div`
  text-align:start;
  font-size: 12px;
  font-weight: 600;
  margin: 10px 0;
`

export const InputTag = styled.input<{widthSize : string}>`
  width: ${props => props.widthSize === "large" ? "60%" : "30%"};
  margin: 0 0 80px 0;
  width: 100%;
  height: 30px;
  background-color: lightgrey;
  font-size : 20px;
`