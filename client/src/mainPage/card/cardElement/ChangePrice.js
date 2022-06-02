import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";


const Price = styled.div`
  min-width: 12rem;
  padding: .5rem .5rem;
  //border: .1rem solid;
  text-align: center;
  color: ${props => props.compare === true ? 'green' : 'red'};
  //font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const ChangePrice = ({price, interest, compare, width}) => {
    return (
        <ItemLayout width={width}>
            <Price compare={compare}>
                {compare === true
                ? <FontAwesomeIcon icon={solid('arrow-trend-up')} size={'xl'}/>
                : <FontAwesomeIcon icon={solid('arrow-trend-down')} size={'xl'}/>}
                <div>{`${price}$ or ${interest}%`}</div>
            </Price>
        </ItemLayout>
    );
};

export default ChangePrice;