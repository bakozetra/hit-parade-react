import React, { useContext } from 'react'
import {Context} from '../Context';

function Style({song}) {
  const {cartItems} = useContext(Context);
  const {allSong , } = useContext(Context);
const FilterArray= () => {
  const AlreadInCart = cartItems.some(cart => cart.style === song.style)
  console.log(AlreaInCart);
  if (AlreadInCart) {
    return (
      <i className="ri-shopping-cart-fill cart" onClick={() => filterSong(song.style)}></i>
    ) 
}
else {
  console.log('mmmm');
}
  return (
    <div>
      <p onClick ={filterArray}>Folk</p>

      <p>Pop</p>
      <p>Kawitry</p>
    </div>
  )
}
}
export default Style
