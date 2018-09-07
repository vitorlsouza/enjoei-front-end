import React from 'react';

import { Container, Content, Item, Total } from './styles';

const Resume = () => (
  <Container>
    <h3>Resumo</h3>
    <Content>
      <Item>
        <span>valor original</span>
        <span>R$ 100,00</span>
      </Item>
      <Item>
        <span>cupom</span>
        <span>- R$ 12,00</span>
      </Item>
      <Item>
        <span>frete</span>
        <span>R$ 20,00</span>
      </Item>
      <Total>
        <span>total</span>
        <span>R$ 108,00</span>
      </Total>
    </Content>
  </Container>
);

export default Resume;
