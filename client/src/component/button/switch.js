import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import {useDispatch, useSelector} from "react-redux";
import {removeTicker, turnOffTicker, turnOnTicker} from "../../store/reduxer/financeSlice";
import ItemLayout from "../../mainPage/card/cardElement/ItemLayout";

const Button = styled.button`
  border: none;
  cursor: pointer;
  background: inherit;

  > .ban {
    color: ${props => props.pause ? 'red' : '#788AA3'};
    transition: color ease-in-out .1s;

    :hover {
      color: red;
    }
  }
`


const Switch = ({ticker}) => {
    const pauseStocks = useSelector(state => state.finance.pauseStocks?.includes(ticker))
    const dispatch = useDispatch()
    const offTicker = (ticker) => {
        if (pauseStocks === true) {
            dispatch(turnOnTicker(ticker))
        } else {
            dispatch(turnOffTicker(ticker))
        }
    }

    return (
        <ItemLayout>
            <Button onClick={() => offTicker(ticker)} pause={pauseStocks}>
                <FontAwesomeIcon
                    icon={pauseStocks ? solid('circle-play') : solid('circle-pause')}
                    size='xl'
                    className="ban"/>
            </Button>
            <Button onClick={() => dispatch(removeTicker(ticker))}>
                <FontAwesomeIcon
                    icon={solid('trash-can')}
                    size='xl'
                    className="ban"/>
            </Button>
        </ItemLayout>
    );
};

export default Switch;