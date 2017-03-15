import React from 'react'
// import Product from './Product'
import './Cart.css';

const Cart=({products, onRemove}) => (
    <div>
        <ui className='list-group'>
            <li className=''></li>
            {
                products.map(
                    ({id, name, buy})=>(
                     <li className=''>
                        <div className=''>
                            <img src="data:image/jpeg;base64,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" />
                            {name}
                            <div className='text-right badge' style={{float:'right'}}>
                                {buy}
                            </div>

                            <div>
                                <button
                                    className='btn btn-default btn-sm'
                                    onClick={()=>onRemove(id)}>
                                    remove
                                </button>
                            </div>
                        </div>    
                    </li>
                    )
                )
            }
            </ui>   
    </div>
)
export default Cart
