import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";

const DividendPrice = styled.div`

`
const Prof = styled.div`
`

const Dividend = ({dividend, profitability}) => {
    return (
        <ItemLayout>
            <DividendPrice>{dividend}</DividendPrice>
            <Prof>{profitability}</Prof>
        </ItemLayout>
    );
};

export default Dividend;