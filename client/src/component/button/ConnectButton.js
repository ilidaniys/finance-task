import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {connectToServer} from "../../store/reduxer/financeSaga";



const ButtonWrapper = styled.div`
  align-self: end;

`
const Button = styled.button`
  width: auto;
  height: 3rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1vh;
  text-transform: uppercase;
  cursor: pointer;
  transition: filter .2s;
  background: ${props => props.status ? 'red' : 'var(--connect-button)'};

  :hover {
    filter: brightness(80%);
  }
`

const ConnectButton = () => {
    const status = useSelector(state => state.finance.status)
    const dispatch = useDispatch()

    const onClickHandler = () => {
        if (status === false) {
            dispatch(connectToServer())
        } else {

        }
    }

    return (
        <ButtonWrapper>
            <Button
                connect={status}
                onClick={()=>onClickHandler()}
            >
                {!status
                    ? 'Connect'
                    : 'Disconnect'
                }
            </Button>
        </ButtonWrapper>
    );
};

export default ConnectButton;