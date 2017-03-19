import React from 'react'
// import Product from './Product'
import './Cart.css';


const Cart=({products, onRemove, total}) => (
  
        <ul className='list-group'>
           
            {
                products.map(
                    ({id, name, buy, price})=>(
                     <li key={id}>             
                        <div>
                            <span>
                                <img  alt="Smiley face" src="http://site.nd.co.th/thaiwahclub/mypic/no_img.gif"  height="100" width="100" />
                            </span>
                            <div style={{position:'absolute',  marginTop:'-80px', marginLeft:'100px'}}>
                                <b>{name}</b><br/>
                            </div>
                            <span> 
                                <b>$200</b><br/>
                            </span>
                            <span style={{position:'absolute',  marginTop:'-40px', marginLeft:'100px', fontSize:'12px'}}>
                                Quantity: {buy}
                            </span>
                              <span style={{float:'right'}}>
                                Total: {buy * price}
                            </span>
                            <div>
                                <button style={{'border-radius': '4px'}}
                                    className='btn-danger'
                                    onClick={()=>onRemove(id)}>
                                    remove
                                </button>
                            </div>
                        </div>
                           <hr />    
                     </li>
                  
                    )
                )
            }
             <div>
                 <b>
                    <span style={{float:'left',fontSize:'18px' }}>TOTAL:</span>
                    <span style={{float:'right', fontSize:'18px'  }}> ${total.totalPrice} </span>
                 </b>
            </div>
        </ul>   
    
)
export default Cart
