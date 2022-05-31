import React from 'react';
import styled from "styled-components";


const TimeButtonWrapper = styled.div`
  height: auto;
  width: 3rem;

`

const Scale = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  background: #D4D2D5;
  border-radius: .6rem;
  transition: filter ease-in-out .05s;

  :hover {
    filter: brightness(80%);
  }
`

const TimeButton = ({scale = 'x1'}) => {
    return (
        <TimeButtonWrapper>
            <Scale>
                {scale}
            </Scale>
        </TimeButtonWrapper>
    );
};

export default TimeButton;