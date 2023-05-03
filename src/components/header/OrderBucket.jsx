import React from "react";
import styled from "styled-components";
import { ReactComponent as BascketIcon } from "../../assets/icons/Vector.svg";

export const OrderBucket = ({ children }) => {
  return (
    <Button>
      <BascketIcon />
      <OrsedBucketTitle> {children} </OrsedBucketTitle>
      <OrderBucketCount>7</OrderBucketCount>
    </Button>
  );
};

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4d1601;
  }
  &:active {
    background-color: #993108;
  }
`;
const OrsedBucketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0 24px 0 13px;
`;

const OrderBucketCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 13px;
  color: #fff;
`;
