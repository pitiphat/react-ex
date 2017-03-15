import React from 'react';
import './Navbar.css';
import Cart from './Cart'
  
const Navbar = ({products, onRemove,cart_count}) => (
  
 <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
      <li className="cart-list">
        <span className='text-right badge' style={{float:'right', margin:'0px,0px,0px,0px'}}>
                   
            {
              cart_count.total
            }
        </span>
        <i className="fa fa-cart-plus fa-3x" style={{color:'white', margin:'0px,0px,0px,0px'}}></i>
           <div className="dropdown-content">
            {
               
                    <Cart 
                          products={products}
                          onRemove={onRemove}
                    />
                
             }
          </div>
          
      </li>

    </ul>
  </div>
  
</nav>


)

export default Navbar