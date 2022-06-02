import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";




const LastTradeTime = ({time, width}) => {
    return (
        <ItemLayout width={width}>
                {`${time}`}
        </ItemLayout>
    );
};

export default LastTradeTime;