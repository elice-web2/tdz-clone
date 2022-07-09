import styled, { css } from 'styled-components';

export const MyGoalWrapper = styled.div`
  padding: 0 35px;
  text-align: center;
  position: relative;
  height: 570px;
`
export const Button = styled.input`
  width: 220px;
  height: 30px;
  
  background-color: black;
  color: white;
  border-radius: 8px;
  border-style: none;
  font-style:none;
  position: absolute;
  bottom: 20px;
  left: 75px;

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
  width:100%;
  margin: 10px auto;
  display:flex;
  justify-content: space-between;
  align-items : center;
  font-size: 14px;
  font-weight: 600;
  &.mode {
    margin-top: 30px;
  }
  .percentile {
    position: absolute;
    right: 170px;
  }
  &.fastNutrient{
    margin-bottom: 30px;
  }
`
export const CircleContainer = styled.div`
  display:flex;
  margin : 20px 0;
  align-items: center;
`
export const StepCircle = styled.div<{active ?: boolean}>`
  width:${props => props.active ? "40px":"30px"};
  height:${props => props.active ? "40px":"30px"};
  border-radius: 50%;
  background-color: ${props => props.active ? "grey":"lightgrey"};

  margin-right: 10px;

`
export const Activity = styled.div`
  .emoji {
    width: 50px;
    height: 50px;
    margin: 7px auto;
    display: block;
    border-radius: 50%;
    background-color: lightgray;
  }
  font-size: 12px;
  font-weight: 400;
`

export const Title = styled.div<{align ?: string;}>`
  text-align: ${props => props.align === "end" ? "end" : "start"};
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  &.subTitle {
    font-weight: 500;
    font-size: 16px;
    /* margin: 40px 0 10px 0; */
  }
  &.subCalorie {
    font-weight:400;
    text-align: center;
   
  }
  &.subCalorie:last-of-type {
    margin-bottom: 100px;
  }
  
  &.calorie {
    font-size: 40px;
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
  ${({widthSize}) => {
    if (widthSize === "large") {
      return css`
        width: 100%;
        margin: 0 0 80px 0;
        height: 45px;
        font-size : 20px;
        `
    } else if (widthSize === "medium") {
      return css`
        width: 40%;
        margin: 0;
        text-align: end;
        height: 45px;
        font-size : 20px;
        `
    } else if (widthSize === "small") {
      return css`
        width: 60%;
        height: 25px;
        font-size : 12px;
      `
    }
  }}
  background-color: #E1E1E1;
  border-style: none;
  padding: 4px 8px;
  box-sizing: border-box;
  border-radius: 4px;
`