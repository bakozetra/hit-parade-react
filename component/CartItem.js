import React, { useContext } from 'react'
import { Context } from '../Context';
import deleteIcon from '../svg/delete.svg'

function CartItem({ item }) {
 const {removeFromCard} = useContext(Context);
  return (
    <div className="cart-item">
      <button><img src={deleteIcon} onClick={() => removeFromCard(item.id)}></img></button>
      <div>
        <h2>{item.title}</h2>
        <p>{item.name}</p>
      </div>
      <p>{item.price}</p>
    </div>
  )
}

export default CartItem