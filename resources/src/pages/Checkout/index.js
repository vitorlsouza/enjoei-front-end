import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import LoadingScreen from 'react-loading-screen';

import api from '../../services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProductActions from '../../store/actions/product';

import { Container, Header, Content, Coupons, Resumes, Footer } from './styles';

import Coupon from '../../components/Coupon';
import Resume from '../../components/Resume';

import Logo from '../../assets/logo.png';

class Checkout extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.getAllData();
  }

  getAllData = async () => {
    const response = await api.get('/api/checkouts/6544');
    this.props.getAllProduct(response.data.product);
    this.setState({ loading: false });
  };

  render() {
    console.log(this.props);
    const { image } = this.props.product;
    const { loading } = this.state;
    return (
      <Container>
        <LoadingScreen
          loading={loading}
          bgColor="#f1f1f1"
          spinnerColor="#f77274"
          textColor="#676767"
          logoSrc={Logo}
          text="Carregando"
        >
          <Header>
            <img src={Logo} alt="logo" />
          </Header>
          <Content>
            <img src={image} alt="camisa" />
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
        </LoadingScreen>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.product,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);
