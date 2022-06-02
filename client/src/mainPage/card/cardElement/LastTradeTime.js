import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";


const TimeWrapper = styled.div`

`

const LastTradeTime = ({time, width}) => {
    return (
        <ItemLayout width={width}>
            <TimeWrapper>
                {`${time}`}
            </TimeWrapper>
        </ItemLayout>
    );
};

export default LastTradeTime;