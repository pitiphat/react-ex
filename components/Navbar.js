import React from 'react';

  
const Navbar = ({cart_count}) => (
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
      <li>
        <span className='text-right badge' style={{float:'right', margin:'0px,0px,0px,0px'}}>
                   
                   {
                     cart_count.total
                   }
        </span>
        <a href="#">cart</a> 
          
      </li>

    </ul>
  </div>
</nav>
)

export default Navbar