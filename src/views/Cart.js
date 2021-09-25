import React, { Component } from 'react';
import getAllCartItems from '../helpers/data/CartFB';
import CartComponent from '../components/Cart/index';

export default class Cart extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    this.getCartItems();
  }

  getCartItems = () => getAllCartItems().then((response) => {
    this.setState({ cartItems: response });
  });

  render() {
    return (
      <div>
        <h1>Cart Page</h1>
        {<CartComponent cartItems={this.state.cartItems} />}
      </div>
    );
  }
}
