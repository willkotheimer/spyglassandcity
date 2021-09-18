import React, { Component } from 'react';
import getAllCoffeeItems from '../helpers/data/CoffeeFB';
import getAllMenuItems from '../helpers/data/MenuFB';

export default class Customer extends Component {
  state = {
    coffee: [],
    menu: [],
  };

  componentDidMount() {
    this.getAllCoffeeItems();
    this.getAllMenuItems();
  }

  getAllCoffeeItems = () => getAllCoffeeItems().then((response) => {
    this.setState({ coffee: response });
  });

  getAllMenuItems = () => getAllMenuItems().then((response) => {
    this.setState({ menu: response });
  });

  render() {
    return (
      <div>
        <h1>Customer page</h1>
      </div>
    );
  }
}
