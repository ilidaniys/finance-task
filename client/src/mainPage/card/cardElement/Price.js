import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";



const Price = ({price}) => {
    return (
        <ItemLayout>
            {`${price}$`}
        </ItemLayout>
    );
};

export default Price;