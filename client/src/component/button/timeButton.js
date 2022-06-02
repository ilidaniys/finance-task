import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {regular} from "@fortawesome/fontawesome-svg-core/import.macro";

const TimeButtonWrapper = styled.div`
  height: 2.5rem;
  width: 5rem;
`
const Scale = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  text-transform: capitalize;
  cursor: pointer;
  border: none;
  background: #D4D2D5;
  border-radius: .6rem;
  transition: filter ease-in-out .05s;

  :hover {
    filter: brightness(80%);
  }
`

const TimeButton = ({children, onClick}) => {
    return (
        <TimeButtonWrapper>
            <Scale onClick={onClick}>
                <FontAwesomeIcon icon={regular('clock')}/>
                {children}
            </Scale>
        </TimeButtonWrapper>
    );
};

export default TimeButton;