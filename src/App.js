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
      quantity: {},
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
    ///////////////////////////////////////////////////////////
    const newQuantity = this.state.quantity.filter((item) => {
      return shirt.id !== item.id
    })
    this.setState({quantity: newQuantity})
    console.log(newQuantity)
    ///////////////////////////////////////////////////////////
    let totall = 0;
    for(let i = 0; i < newQuantity.length; i++){
      totall = totall + newQuantity[i].amount;
    }
    this.setState({totalItems: totall})
  }

  subTotalPrice = () => {
    let total = 0;
    const quantity = this.state.quantity;
    const cart = this.state.cart;
    for(let i = 0; i < quantity.length; i++){
      if(cart[i].price === cart[i].oldPrice){
        total = total + quantity[i].amount * cart[i].price;
      } else {
        total = total + quantity[i].amount * cart[i].oldPrice;
      }
    }
    return total.toFixed(2)
  }

  getQuantity = () =>{
    const array = shirtsList.map((shirt, i) => {
      return {amount: shirt.quantity,id: i+1}
    })
    this.setState({quantity: array})
  }

  getTotalItems = () =>{
    let total = 0;
    for(let i = 0; i < this.state.quantity.length; i++){
      total = total + this.state.quantity[i].amount;
    }
    this.setState({totalItems: total})

  }

  componentWillMount(){
    this.getQuantity();
  }
  
  componentDidMount(){
    this.getTotalItems();
    this.subTotalPrice();
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
              quantity={this.state.quantity[i].amount}
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
          <Checkout 
            change={this.subTotalPrice()}
          />
        </div>
      </div>
    );
  }
}

export default App;
