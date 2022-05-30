import React from 'react';
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  height: var(--height-card);
  border-bottom: .1rem solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 .5rem;

  :hover {
    
  }
`

const Card = () => {
    return (
        <CardWrapper>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
            <div>Hello</div>
        </CardWrapper>
    );
};

export default Card;