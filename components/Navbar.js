import React from 'react';
import './Navbar.css';
import Cart from './Cart'
  
const Navbar = ({products, onRemove,cart_count, total_price}) => (

<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li className="cart-list">
        <span className="icon-cart">
          <i className="fa fa-cart-plus fa-2x" style={{color:'#9d9d9d', margin:'10px'}}></i>
          <span className='badge' style={{marginTop:'-8px'}}>    
            {
              
              cart_count.value
            }
          </span>
        </span>

        {cart_count.value > 0 && //เหมือนการใช้ if
           <div className="dropdown-content">
              {         
                  <Cart
                      products={products}
                      onRemove={onRemove}
                      total={total_price}
                  />         
              }
           </div>
        }
      </li>
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav>
)

export default Navbar