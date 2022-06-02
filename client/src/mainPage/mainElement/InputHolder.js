import React, {useCallback} from 'react';
import styled from "styled-components";
import Input from "../../component/button/Input";
import AddButton from "../../component/button/AddButton";
import {useDispatch} from "react-redux";
import {addNewTicker, changeInputValue} from "../../store/reduxer/financeSlice";

export const InputWrapper = styled.div`
  width: 100%;
  min-height: var(--height-card);
  border-bottom: .1rem solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 .5rem;
  background: inherit;
`


const InputHolder = () => {
    const dispatch = useDispatch()
    const takeValue = useCallback(() => (event) => {
        console.log(event.target.value)
        dispatch(changeInputValue(event.target.value))
    }, [dispatch])

    const addNewTickerHolder = useCallback(() => (event) => {
        event.preventDefault()
        dispatch(addNewTicker())
    }, [])
    return (
        <InputWrapper>
            <Input onChange={takeValue()}/>
            <AddButton onClick={addNewTickerHolder()}/>
        </InputWrapper>
    );
};

export default InputHolder;