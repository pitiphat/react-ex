import React from 'react'

const Product=({id, name, amount, onClick, btnTxt}) => (
    <li className='list-group-item'>
        <div className='justify-content-between d-flex w-100'>
            {name}
            <div className='text-right badge' style={{float:'right'}}>
                {amount}
            </div>

            <div>
                <button
                className='btn btn-default btn-sm'
                onClick={()=>onClick(id)}>
                {btnTxt}
                </button>
            </div>
        </div>    
    </li>
)

export default Product