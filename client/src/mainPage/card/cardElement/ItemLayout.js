import React from 'react';
import styled from "styled-components";

const ItemLayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`
const ItemLayout = ({children}) => {
    return (
        <ItemLayoutWrapper>
            {children}
        </ItemLayoutWrapper>
    );
};

export default ItemLayout;