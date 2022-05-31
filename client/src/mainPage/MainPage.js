import React from 'react';
import styled from "styled-components";
import Card from "./card/Card";
import MainTittle from "./mainElement/MainTittle";


const MainWrapper = styled.main`
  width: var(--width-main);
  height: var(--height-main);
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  background: var(--background-wrapper);
`

const MainPage = () => {


    return (
        <MainWrapper>
            <MainTittle/>
            <Card/>
        </MainWrapper>
    );
};

export default MainPage;