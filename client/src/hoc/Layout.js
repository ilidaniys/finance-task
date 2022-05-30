import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
`

const Layout = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default Layout;