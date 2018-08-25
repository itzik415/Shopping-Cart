import React, { Component } from 'react';
import Header from './Components/header';
import Item from './Components/item';
import ItemProperties from './Components/itemProperties';
import { shirtsList } from './shirtsList';
import CustomerHelp from './Components/customerHelp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      size: ['S', 'M', 'L'],
      color: ['red', 'blue', 'black']
    }
  }
  render() {
    const cart = shirtsList.map((shirt, i) => {
      if(shirtsList.length > shirt.id){
        return ( 
          <Item 
            name={shirtsList[i].name} 
            price={shirtsList[i].price} 
            oldPrice={shirtsList[i].oldPrice} 
            color={shirtsList[i].color} 
            style={shirtsList[i].style} 
            image={shirtsList[i].image}
            quantity={this.state.quantity}
            size={this.state.size}
          />
        )
      } 
      if(shirtsList.length === shirt.id) {
        return (
          <Item 
            name={shirtsList[i].name} 
            price={shirtsList[i].price} 
            oldPrice={shirtsList[i].oldPrice} 
            color={shirtsList[i].color} 
            style1={shirtsList[i].style} 
            image={shirtsList[i].image}
            quantity={this.state.quantity}
            size={this.state.size}
          />
        )
      }
    })
    return (
      <div>
        <Header />
        <ItemProperties itemsAmout={this.state.quantity} />
        {cart}
        <CustomerHelp />
      </div>
    );
  }
}

export default App;
