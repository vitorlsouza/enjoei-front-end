import React, { Component, Fragment } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { Container, Content } from './styles';

class Coupon extends Component {
  state = {
    value: 'sem',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const styles = {
      color: '#f77274',
    };
    return (
      <Container>
        <h1>cupons</h1>
        <Content>
          <RadioGroup
            aria-label="coupon"
            name="coupon"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="sem"
              control={<Radio style={styles} />}
              label="não usar cupom"
            />
            <FormControlLabel
              value="com"
              control={<Radio style={styles} />}
              label="black friday"
            />
          </RadioGroup>
          <span className="discount">R$ -12,00</span>
        </Content>
      </Container>
    );
  }
}

export default Coupon;
