import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import ArrowUp from '../svg/arrow-up.svg'
import ArrowDown from '../svg/down-arrow.svg'
import FillHeart from '../svg/fill-heart.svg'
import LineHeart from '../svg/line-heart.svg'
import FillCart from '../svg/fill-cart.svg'
import Emoji from '../svg/emoji.svg'
import Fire from '../svg/fire.svg'
import LineCart from '../svg/line-cart.svg'
import Moredote from '../svg/moreDote.svg'
import { Context } from '../Context'

function PopularSong({ song }) {
  const [hover, setHover] = useState(false);
  const { ShowLyrucs } = useContext(Context);
  console.log(hover);
  const { cartItems, removeFromCard, addToCart } = useContext(Context);
  console.log(addToCart);
  const CartIcon = () => { 
  }

  return (
    <div className='popular-song'>
      <button><img src={LineHeart}></img></button>
      <div>
        <h3>{song.title}</h3>
        <p>{song.name}</p>
      </div>
      <button>{song.like}<img src={ArrowUp}></img></button>
      <button>{song.unlike} <img src={ArrowDown}></img></button>
      { hover ?
        <button ><img src={FillCart} onClick={() => setHover(song.id)}></img></button>
        : <button onClick={() => addToCart(song)}><img src={LineCart} onClick={() => setHover(song.id)}></img></button>}
      {CartIcon()}
      <Link to="/lyrucs" onClick={() => ShowLyrucs(song)}>
        <button><img src={Moredote}></img></button></Link>
    </div>
  )
}

export default PopularSong
