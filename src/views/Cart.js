import React, { Component } from 'react';
import getAllCartItems from '../helpers/data/CartFB';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => getAllCartItems().then((response) => {
    this.setState({ cart: response });
  });

  render() {
    return (
      <div>
        <h1>Cart Page</h1>
      </div>
    );
  }
}
