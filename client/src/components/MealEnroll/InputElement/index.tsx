import * as S from './style';
import { useEffect, useState, useRef } from 'react';

function InputElement({ name }: { name: string }) {
  const [value, setValue] = useState('');
  const [isValue, setIsValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function checkInputValue() {
    if (inputRef.current) {
      if (inputRef.current.value) {
        setIsValue(true);
      } else {
        setIsValue(false);
      }
    }
  }

  return (
    <S.InputContainer>
      <S.InfoTitle>{name}</S.InfoTitle>
      <S.InputBox isValue={isValue}>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            checkInputValue();
          }}
        ></input>
        <span>g</span>
      </S.InputBox>
    </S.InputContainer>
  );
}

export default InputElement;
