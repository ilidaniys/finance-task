import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

const Button = styled.button`
  border: none;
  
  > .addIcon{
    height: 2.2rem;
    cursor: pointer;
    color: #444B6E;
    transition: color ease-in-out .1s;
    
    @keyframes shake {
      0% {
        transform: rotate(10deg);
      }
      50% {
        transform: rotate(-10deg);
      }
      70% {
        transform: rotate(10deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }
    :hover{
      color: var(--connect-button);
      animation: shake .2s ease-in-out;
    }
  }
`

const AddButton = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon icon={solid('plus')} className={'addIcon'}/>
        </Button>
    );
};

export default AddButton;