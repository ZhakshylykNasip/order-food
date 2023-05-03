import React from "react";
import styled from "styled-components";
import { OrderBucket } from "./OrderBucket";

export const Header = () => {
  return (
    <header>
      <Container>
        <h1>ReactMeals </h1>
        <OrderBucket> Your card</OrderBucket>
      </Container>
    </header>
  );
};

const Container = styled.div`
  width: 100%;
  height: 101px;
  background-color: #8a2b06;
  padding: 0px 120px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1{
    color: #fff;
  }
`;
