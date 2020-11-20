import React from 'react'
// import {Context} from '../Context'
// import UseHover from '../hook/useHover'
function CartItem({item}) {
  return (
    <div className ="cart-item">
     <p>{item.name}</p>
    </div>
  )
}

export default CartItem