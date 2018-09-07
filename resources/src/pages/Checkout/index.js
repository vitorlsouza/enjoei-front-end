import React from 'react';

import Button from '@material-ui/core/Button';

import { Container, Header, Content, Coupons, Resumes, Footer } from './styles';

import Coupon from '../../components/Coupon';
import Resume from '../../components/Resume';

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
      <Resumes>
        <Resume />
      </Resumes>
    </Content>
    <Footer>
      <Button
        className="cancelar"
        variant="outlined"
        size="large"
        color="default"
      >
        cancelar
      </Button>
      <Button
        className="confirmar"
        variant="contained"
        size="large"
        color="default"
      >
        confirmar
      </Button>
    </Footer>
  </Container>
);

export default Checkout;
