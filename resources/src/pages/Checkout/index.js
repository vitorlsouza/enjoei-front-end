import React from 'react';

import { Container, Header, Content, Coupons } from './styles';

import Coupon from '../../components/Coupon';

import Logo from '../../assets/logo.png';
import Camisa from '../../assets/camisa.png';

const Checkout = () => (
  <Container>
    <Header>
      <img src={Logo} alt="logo" />
    </Header>
    <Content>
      <img src={Camisa} alt="camisa" />
      <Coupons>
        <Coupon />
      </Coupons>
    </Content>
  </Container>
);

export default Checkout;
