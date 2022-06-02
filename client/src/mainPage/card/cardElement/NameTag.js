import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";


const Tittle = styled.div`
  text-transform: uppercase;
  color: #ffffff;
  background: #444B6E;
  padding: .4rem;
  font-weight: 700;
  border-radius: 1rem;
`

const NameTag = ({title, width}) => {
    return (
        <ItemLayout width={width}>
            <Tittle>
                {title}
            </Tittle>
        </ItemLayout>
    );
};

export default NameTag;