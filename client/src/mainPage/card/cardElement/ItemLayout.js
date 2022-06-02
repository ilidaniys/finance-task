import React from 'react';
import styled from "styled-components";

const ItemLayoutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  min-width: ${props => props.width};
`
const ItemLayout = ({children, width}) => {
    return (
        <ItemLayoutWrapper width={width}>
            {children}
        </ItemLayoutWrapper>
    );
};

export default ItemLayout;