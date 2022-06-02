import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  align-items: center;

`

const InputPlace = styled.input`
  width: 11rem;
  height: 2.5rem;
  border: .1rem #444B6E solid;
  border-radius: 1rem;
  padding: .2rem .5rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;

  ::placeholder {
    color: #444B6E;
    text-transform: uppercase;
    text-align: center;
  }


  :focus {
    outline: none;
    background: #444B6E;
    color: #F0F4EF;
  }

`

const ErrorMassage = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  color: #fa4545;
`
const Input = ({onChange}) => {
    const inputValue = useSelector(state => state.finance.inputValue)
    const errorMassage = useSelector(state => state.finance.errorMassage)
    return (
        <InputWrapper>
            <InputPlace placeholder={'ADD your Ticker'} onChange={onChange} value={inputValue}/>
            {errorMassage
                ? <ErrorMassage>{errorMassage}</ErrorMassage>
                : null
            }
        </InputWrapper>
    );
};

export default Input;