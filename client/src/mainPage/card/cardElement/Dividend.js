import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";



const Dividend = ({dividend, profitability, width}) => {
    return (
        <ItemLayout width={width}>
            <div>{`${dividend}%`}</div>
            <div>{`${profitability}%`}</div>
        </ItemLayout>
    );
};

export default Dividend;