import React, { Component, Fragment } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import { BlackFriday } from './styles';

class Coupon extends Component {
  state = {
    value: 'sem',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <h3>cupons</h3>
        <RadioGroup
          aria-label="coupon"
          name="coupon"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="sem"
            control={<Radio />}
            label="não usar cupom"
          />
          <BlackFriday>
            <FormControlLabel
              value="com"
              control={<Radio />}
              label="black friday"
            />
            <span>R$ -12,00</span>
          </BlackFriday>
        </RadioGroup>
      </Fragment>
    );
  }
}

export default Coupon;
