import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";


const Price = styled.div`

`
const Interest = styled.div`

`

const ChangePrice = ({price, interest}) => {
    return (
        <ItemLayout>
            <Price>{`${price}`}</Price>
            <Interest>{`${interest}%`}</Interest>
        </ItemLayout>
    );
};

export default ChangePrice;