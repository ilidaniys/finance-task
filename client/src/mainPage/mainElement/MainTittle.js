import React from 'react';
import styled from "styled-components";
import TimeButton from "../../component/button/timeButton";

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
    return (
        <MainTittleWrapper>
            <Tittle>
                You may be interested in!
            </Tittle>
            <SwitchPanel>
                <TimeButton scale={'x1'}/>
                <TimeButton scale={'x3'}/>
                <TimeButton scale={'x5'}/>
                <TimeButton scale={'x10'}/>
            </SwitchPanel>
        </MainTittleWrapper>
    );
};

export default MainTittle;