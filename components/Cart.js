import React from 'react'
import Product from './Product'

const Cart=({products, onRemove}) => (
    <div>
        <ui className='list-group'>
            <li className='list-group-item active'>Cart</li>
            {
                products.map(
                    ({id, name, buy})=>(
                        <Product
                            key={id}
                            id={id}
                            name={name}
                            amount={buy}
                            onClick={onRemove}
                            btnTxt='Remove'
                        />
                    )
                )
            }
            </ui>   
    </div>
)
export default Cart
