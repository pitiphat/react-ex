import React, { Component } from 'react';
import {Products, Navbar} from '../components';



class App extends Component {


     state={
        products:[
            { id: 1, name: 'Product#1', amount: 10, buy: 0,  price:100},
            { id: 2, name: 'Product#2', amount: 9, buy: 0, price:200},
            { id: 3, name: 'Product#3', amount: 8, buy: 0, price:300},
            { id: 4, name: 'Product#4', amount: 7, buy: 0, price:400},
            { id: 5, name: 'Product#5', amount: 6, buy: 0, price:500}
        ],
        amounts:{total: 0},
        totalPrices:{totalPrice: 0}
    }

changeBuy =(id, amount)=>{
  const{ products } = this.state
  const index = products.findIndex(product => product.id === id)
  const product = products[index]

  const {amounts} = this.state
  const {totalPrices} = this.state

  this.setState({
    products:[
      ...products.slice(0, index),
      {...product, buy: product.buy + amount},
      ...products.slice(index+1)
    ]
  })

  this.setState({
    amounts:
      {...amounts, total:amounts.total+amount}
    
  })
    this.setState({
    totalPrices:
      {...totalPrices, totalPrice:totalPrices.totalPrice+(product.price*amount)}
    
  })
}

getAvailableProducts=()=>{
    return this.state.products.filter(({ amount, buy }) => amount !== buy)
}

getProductInCart=()=>{
  return this.state.products.filter(({buy}) => buy > 0)
}

reduceBuy = ()=>id=>this.changeBuy(id, -1)

increaseBuy = () =>id=>this.changeBuy(id, +1)

count_item=()=>{
  return this.state.amounts;
}
total_price=()=>{
  return this.state.totalPrices;
}

  render() {
    return (
      
      <div className="container-fluid" style={{'font-family': 'Crimson Text'}}>
        <Navbar 
          products={this.getProductInCart()}
          cart_count={this.count_item()}
          total_price={this.total_price()}
          onRemove={this.reduceBuy()}
        />
        <div className="row">
          <div className="col-md-4">


                <Products
                products={this.getAvailableProducts()}
                onAddToCart={this.increaseBuy()}/>

                 {/*<Cart 
                  products={this.getProductInCart()}
                  onRemove={this.reduceBuy()}
                />*/}
               
             
            </div>   
          </div>
      </div>
    );
  }
}

export default App;
