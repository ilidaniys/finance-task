import React from 'react';
import styled from "styled-components";
import Card from "./card/Card";
import MainTittle from "./mainElement/MainTittle";
import ConnectButton from "../component/button/ConnectButton";

const AllWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const MainWrapper = styled.div`
  width: auto;
  max-width: var(--width-main);
  height: auto;
  min-height: var(--height-main);
  border-radius: 1rem;
  padding: 1rem 1rem 2rem 1rem;
  background: var(--background-wrapper);
`

const MainPage = () => {



    return (
        <AllWrapper>
            <MainWrapper>
                <MainTittle/>
                <Card/>
            </MainWrapper>
            <ConnectButton/>
        </AllWrapper>
    );
};

export default MainPage;