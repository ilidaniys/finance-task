import React from 'react';
import styled from "styled-components";
import ItemLayout from "./ItemLayout";


const Tittle = styled.div`
  text-transform: capitalize;
  color: #ffffff;
  background: #444B6E;
  padding: .4rem;
  font-weight: 700;
  border-radius: 1rem;
`
const Name = styled.div`

`

const NameTag = ({title, name}) => {
    return (
        <ItemLayout>
            <Tittle>
                {title}
            </Tittle>
            <Name>
                {name}
            </Name>
        </ItemLayout>
    );
};

export default NameTag;