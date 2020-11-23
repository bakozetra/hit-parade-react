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
  const { allSong ,favoriteSong } = useContext(Context);
  const [hover, setHover] = useState(false);
  const { ShowLyrucs } = useContext(Context);
  const [likeSong, setLikeSong] = useState(song.like);
  const [unlkiesong, setUnlikeSong] = useState(song.unlike);
  

  const IncrementLikes = (id) => {
    console.log(allSong);
    const addLike = allSong.find(newId => newId.id == id);
    const incrementLike = addLike.like++;
    setLikeSong(incrementLike);
  }
  const decrementLikes = (id) => {
    console.log(allSong);
    const addLike = allSong.find(newId => newId.id == id);
    const incrementLike = addLike.unlike--;
    setUnlikeSong(incrementLike);
  }

  const { addToCart } = useContext(Context);
  console.log(addToCart);
  const CartIcon = () => {
  }
 
console.log(song);
  return (
    <div className='popular-song'>
      <div onClick = {() => favoriteSong(song.id)}>
      {song.isFavorite ? 
      <button><img src={LineHeart}></img></button>
      : <img src={FillHeart}></img>}
      </div>
      
      <div>
        <h3>{song.title}</h3>
        <p>{song.name}</p>
      </div>
      <button>{likeSong}<img src={ArrowUp} onClick={() => IncrementLikes(song.id)}></img></button>
      <button>{unlkiesong}<img src={ArrowDown} onClick={() => decrementLikes(song.id)}></img></button>
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
