import React from 'react';
import ItemLayout from "./ItemLayout";

const LastTradeTime = ({time, width}) => {
    return (
        <ItemLayout width={width}>
                {`${time}`}
        </ItemLayout>
    );
};

export default LastTradeTime;