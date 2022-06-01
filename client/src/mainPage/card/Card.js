import React from 'react';
import styled from "styled-components";
import NameTag from "./cardElement/NameTag";
import Price from "./cardElement/Price";
import ChangePrice from "./cardElement/ChangePrice";
import LastTradeTime from "./cardElement/LastTradeTime";
import Dividend from "./cardElement/Dividend";
import {useSelector} from "react-redux";


const CardWrapper = styled.div`
  width: 100%;
  height: var(--height-card);
  border-bottom: .1rem solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 0 .5rem;
  cursor: pointer;
  background: inherit;
  transition: filter ease-in-out .1s;


  :hover {
    filter: brightness(90%);
  }
`

const Card = () => {
    const finance = useSelector(state => state.finance.stocks)

    const renderCards = (cardList) => {
       return  cardList.map((cardItem, key) => (
            <CardWrapper key={key}>
                <NameTag title={cardItem.title} name={cardItem.name}/>
                <Price price={cardItem.price}/>
                <ChangePrice price={cardItem.changePrice} interest={cardItem.changePriceInterest}/>
                <Dividend dividend={cardItem.dividend} profitability={cardItem.profit}/>
                <LastTradeTime time={cardItem.date}/>
            </CardWrapper>
        ))
    }



    return (
        <>
            {renderCards(finance)}
        </>
    );
};

export default Card;