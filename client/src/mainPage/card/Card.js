import React, {useCallback} from 'react';
import styled from "styled-components";
import NameTag from "./cardElement/NameTag";
import Price from "./cardElement/Price";
import ChangePrice from "./cardElement/ChangePrice";
import LastTradeTime from "./cardElement/LastTradeTime";
import Dividend from "./cardElement/Dividend";
import {useSelector} from "react-redux";
import Switch from "../../component/button/switch";


const CardWrapper = styled.div`
  width: 100%;
  min-height: var(--height-card);
  border-bottom: .1rem solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 .5rem;
  background: ${props => props.status === false ? 'red' : 'inherit'};
  transition: filter ease-in-out .1s;

  :hover {
    filter: brightness(90%);
  }
`

const Card = () => {
    const stocks = useSelector(state => state.finance.stocks)

    const renderCards = useCallback((cardList) => {
        return cardList.map((cardItem, key) => {
            return (
                <CardWrapper key={key} status={cardItem.status}>
                    <NameTag title={cardItem.ticker} name={cardItem.name} width={'5rem'}/>
                    <Price price={cardItem.price} width={'5rem'}/>
                    <ChangePrice
                        price={cardItem.change}
                        interest={cardItem.change_percent}
                        compare={cardItem.compare}
                        width={'9rem'}
                    />
                    <Dividend
                        dividend={cardItem.dividend}
                        profitability={cardItem.profit}
                        width={'8rem'}
                    />
                    <LastTradeTime time={cardItem.last_trade_time}/>
                    <Switch ticker={cardItem.ticker}/>
                </CardWrapper>
            )
        })
    }, [stocks])


    return (
        <>
            {renderCards(stocks)}
        </>
    );
};

export default Card;