import React, {useCallback} from 'react';
import styled from "styled-components";
import TimeButton from "../../component/button/timeButton";
import {useDispatch} from "react-redux";
import {setNewTimer} from "../../store/reduxer/financeSlice";

const MainTittleWrapper = styled.div`
  width: 100%;
  height: var(--height-card);
  border-bottom: .1rem solid;
  display: flex;
  justify-content: space-between;
`

const Tittle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
`

const SwitchPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const MainTittle = () => {
    const dispatch = useDispatch()
    const changeTime = useCallback((count) => () => {
        dispatch(setNewTimer(count))
    }, [dispatch])

    return (
        <MainTittleWrapper>
            <Tittle>
                You may be interested in!
            </Tittle>
            <SwitchPanel>
                <TimeButton onClick={changeTime(3)}>
                    <sub>3s</sub>
                </TimeButton>
                <TimeButton onClick={changeTime(5)}>
                    <sub>5s</sub>
                </TimeButton>
                <TimeButton onClick={changeTime(7)}>
                    <sub>7s</sub>
                </TimeButton>
                <TimeButton onClick={changeTime(10)}>
                    <sub>10s</sub>
                </TimeButton>
            </SwitchPanel>
        </MainTittleWrapper>
    );
};

export default MainTittle;