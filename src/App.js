import React, { Component } from 'react';
import Header from './Components/header';
import Item from './Components/item';
import ItemProperties from './Components/itemProperties';
import { shirtsList } from './shirtsList';
import CustomerHelp from './Components/customerHelp';
import Checkout from './Components/checkout';
import EditPage from './Components/editPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: {},
      searchField: '',
      totalItems: 0,
      rightToGetCoupon: false,
      sizing: {},
      editItem: [],
      cart: shirtsList
    }
  }

  
// Item component

  handleRemoveItem(shirt) {
    const newCart = this.state.cart.filter((item) => {
      return shirt.id !== item.id
    })
    this.setState({cart: newCart})
    //--------------------------------------------------------//
    const newQuantity = this.state.quantity.filter((item) => {
      return shirt.id !== item.id
    })
    this.setState({quantity: newQuantity})
    //--------------------------------------------------------//
    const newSizing = this.state.sizing.filter((item) => {
      return shirt.id !== item.id
    })
    this.setState({sizing: newSizing})
    //--------------------------------------------------------//
    let totall = 0;
    for(let i = 0; i < newQuantity.length; i++){
      totall = totall + newQuantity[i].amount;
    }
    this.setState({totalItems: totall})
  }

  openItemEvent(shirt) {
    const itemToEdit = this.state.cart.filter((item) => {
      return shirt.id === item.id
    })
    this.setState({editItem: itemToEdit})
    document.querySelector('.mainEditPage').style.display = 'flex';
    
}


// Checkout component
  subTotalPrice = () => {
    let total = 0;
    let quantity = this.state.quantity;
    let cart = this.state.cart;
    for(let i = 0; i < quantity.length; i++){
      if(cart[i].price === cart[i].oldPrice && cart.length > 0){
        total = total + quantity[i].amount * cart[i].price;
      } else{
        total = total + quantity[i].amount * cart[i].price;
      }
    }
    return total.toFixed(2);
  }

  onKeyPress = (event) => {
    this.rightCode = event.target.value + "5";
    if (event.key === 'Enter' && event.target.value === 'itzik415') {
      this.setState({searchField: event.target.value})
      this.setState({rightToGetCoupon: true})
    }
  }

  onClickApply = () => {
    if (this.rightCode === 'itzik415') {
      this.setState({searchField: this.rightCode})
      this.setState({rightToGetCoupon: true})
    }
  }

// EditPage component

  changingSize = (event, shirt) =>{
    let currentSize = event.target.value;
    this.newSizes = this.state.sizing.map((i, num) => {
      if(i.id === shirt.id){
        return {size: currentSize,id: num+1}
      }else {
        return {size: i.size ,id: num+1}
      }
    })
  }

  changingQuantity = (event, shirt) =>{
    let currentQuantity = event.target.value;
    this.newQuantity = this.state.quantity.map((i, num) => {
      if(i.id === shirt.id){
        return {amount: Number(currentQuantity), id: num+1}
      }else {
        return {amount: Number(i.amount) ,id: num+1}
      }
    })
  }

  editButton = () =>{
    let total = 0;
    
    // Setting up "sizing" state after pressing the edit button
    if(this.newSizes === undefined) {
      this.setState({sizing: this.state.cart.map((shirt, i) => {
        return {size: shirt.size,id: i+1}
      })})
    }else {
      this.setState({sizing: this.newSizes})
    }

    // Setting up "quantity" and "totalItems" state after pressing the edit button
    if(this.newQuantity === undefined) {
      this.setState({quantity: this.state.cart.map((shirt, i) => {
        return {amount: shirt.quantity,id: i+1}   
      })})

      for(let i = 0; i < this.state.quantity.length; i++){
        total = total + this.state.quantity[i].amount;
      }
      this.setState({totalItems: total})

    }else {
      this.setState({quantity: this.newQuantity})  

      for(let i = 0; i < this.newQuantity.length; i++){
        total = total + this.newQuantity[i].amount;
      }
      this.setState({totalItems: total})
    }

    document.querySelector('.mainEditPage').style.display = 'none';

  }

  exitButton() {
    document.querySelector('.mainEditPage').style.display = 'none';
  }


// React lifeCycle methods

componentWillMount(){
  this.getQuantity();
  this.getSize();
}

componentDidMount(){
  this.getTotalItems();
}

//--------------------------------------------------------//

  
  getSize = () =>{
    const array = shirtsList.map((shirt, i) => {
      return {size: shirt.size,id: i+1}
    })
    this.setState({sizing: array})
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
              size={this.state.sizing[i].size}
              key={shirt.id}
              handleRemoveItem={() => {this.handleRemoveItem(shirt)}}
              openItemEvent={() => {this.openItemEvent(shirt)}}
            />
            ) 
          })
        }
        </div>
        <div className="checkout__section">
          <CustomerHelp />
          <Checkout 
            change={this.subTotalPrice()}
            onKeyPress={this.onKeyPress}
            onClickApply={this.onClickApply}
            search={this.state.searchField}
            getCoupon={this.state.rightToGetCoupon}
          />
        </div>
        <div className="mainEditPage">  

          {
            this.state.editItem.map((shirt) => {
              return ( 
                <EditPage
                  image={shirt.image}
                  name={shirt.name}
                  price={shirt.price}
                  style={shirt.style}
                  color={shirt.color}
                  key={shirt.id}
                  size={shirt.size}
                  exitButton={() => {this.exitButton()}}
                  changingSize={(event) =>{this.changingSize(event, shirt)}}
                  changingQuantity={(event) =>{this.changingQuantity(event, shirt)}}
                  editButton={() => {this.editButton()}}
                />
              )  
            })
          }

        </div>
      </div>
    );
  }
}

export default App;
