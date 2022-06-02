import React from 'react';
import ItemLayout from "./ItemLayout";

const Price = ({price, width}) => {
    return (
        <ItemLayout width={width}>
            {`${price}$`}
        </ItemLayout>
    );
};

export default Price;