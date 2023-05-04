import React from "react";
import { Modal } from "../UI/Modal";
import { DUMMY_ITEMS } from "../utils/constants";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";

export const Basket = () => {
  return (
    <Modal>
      <Content>
        {DUMMY_ITEMS.length ? (
          <FixedWidthContainer>
            {DUMMY_ITEMS.map((item) => (
              <BasketItem
                title={item.title}
                price={item.price}
                amount={item.amount}
                key={item.id}
              />
            ))}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount totalPrice={1} />
      </Content>
    </Modal>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 245px;
  overflow-y: auto;
`;
