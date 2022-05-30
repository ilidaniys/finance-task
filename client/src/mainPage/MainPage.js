import React from 'react';
import styled from "styled-components";
import Card from "./card/Card";

const MainWrapper = styled.main`
  width: var(--width-main);
  height: var(--height-main);
  border-radius: 1rem;
  padding: 2rem 1rem;
  background: var(--background-wrapper);
`
const MainTittle = styled.div`
  width: 100%;
  height: var(--height-card);
  border-bottom: .1rem solid;
  font-size: 1.8rem;
  font-weight: 700;
`

const MainPage = () => {
    return (
        <MainWrapper>
            <MainTittle>
                You may be interested in!
            </MainTittle>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </MainWrapper>
    );
};

export default MainPage;