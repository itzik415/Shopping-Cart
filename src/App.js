import React, { Component } from 'react';
import Header from './Components/header';
import Item from './Components/item';
import ItemProperties from './Components/itemProperties';
import { shirtsList } from './shirtsList';
import CustomerHelp from './Components/customerHelp';
import Checkout from './Components/checkout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: [],
      totalItems: 0,
      size: ['S', 'M', 'L'],
      color: ['red', 'blue', 'black'],
      cart: shirtsList
    }
  }
  
  handleRemoveItem = (shirt) => {
    const newCart = this.state.cart.filter((item) => {
      return shirt.id !== item.id
    })
    this.setState({cart: newCart})
  }

  getQuantity = () =>{
    const array = shirtsList.map((shirt) => {
      return {amount: shirt.quantity}
    })
    console.log(this.state.quantity) 
    this.setState({quantity: array})
    console.log(array)
  }

  getTotalItems = () =>{
    let total = 0;
    for(let i = 0; i < this.state.quantity.length; i++){
      total = total + this.state.quantity[i];
      console.log(this.state.quantity[i].amount)
    }
    this.setState({totalItems: total})
    // console.log(this.state.totalItems)
	}

  componentWillMount(){
    this.getQuantity();
    this.getTotalItems();
	}
    
  render() {
    return (
      <div>
        <Header />
        <ItemProperties amount={this.state.totalItems}/>
        <div className="itemInTheCart">
        
        {
          this.state.cart.map((shirt, i) => {
          return ( 
            <Item 
              name={shirt.name} 
              price={shirt.price} 
              oldPrice={shirt.oldPrice} 
              color={shirt.color} 
              style1={shirt.style} 
              image={shirt.image}
              // quantity={this.state.quantity[i].amount}
              size={this.state.size}
              key={shirt.id}
              onClick={(e) => this.handleRemoveItem(shirt)}
            />
            ) 
          })
        }
        </div>
        <div className="checkout__section">
          <CustomerHelp />
          <Checkout />
        </div>
      </div>
    );
  }
}

export default App;
