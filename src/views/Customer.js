import React, { Component } from 'react';
import getAllCoffeeItems from '../helpers/data/CoffeeFB';
import getAllMenuItems from '../helpers/data/MenuFB';
import Coffee from '../components/Coffee';

export default class Customer extends Component {
  state = {
    coffee: [],
    menu: [],
  };

  componentDidMount() {
    this.getCoffeeItems();
    this.getMenuItems();
  }

  getCoffeeItems = () => getAllCoffeeItems().then((response) => {
    this.setState({ coffee: response });
  });

  getMenuItems = () => getAllMenuItems().then((response) => {
    this.setState({ menu: response });
  });

  render() {
    const { coffee } = this.state;

    return (
      <div>
        <h1>Customer page</h1>
        { console.warn(coffee) }
        {<Coffee coffeeItems={coffee} /> }
      </div>
    );
  }
}
