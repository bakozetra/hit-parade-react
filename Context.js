import React, { useEffect, useState } from 'react'
import Song from './song.json'

const Context = React.createContext();
function ContextProvider(props) {
  const [allSong , setAllSong] = useState([]);
  const [cartItems , setCartItems] = useState([]);
  const [songLyrics, setSongLyrics] = useState({});
  const [songStyle , setSongStyle] = useState([])

  function getSong () {
    setAllSong(Song);
    console.log(allSong);
  }
  
  function addToCart (song) {
        setCartItems (prevItem => [...cartItems , song])
  }
  function ShowLyrucs (lyrics) {
       setSongLyrics(lyrics)
  }
  function StyleSong (song) {
      setSongStyle(prevItem => [...songStyle , song]);
  }

  function toggleLyrucs (id) {
   const ArrayLyrucs = allSong.map( song => {
     if(song.id === id) {
       return {
         ...song ,
         isFavorite : !song.isFavorite,
       }
       return song
     }
   })
   setAllSong(ArrayLyrucs);
  }
  function filterSong (song) {
    setCartItems(prevItem => prevItem.filter(item => item.style === song))
  }
  function removeFromCard (imgId) {
    setCartItems(preveItems => preveItems.filter(item => item.id !== imgId))
  }   

  console.log(songLyrics);

  function emptyCart () {
    setCartItems([]);
  }
  useEffect(() => {
    getSong()
  } , [])
  return (
    <Context.Provider value = {{allSong , toggleLyrucs , addToCart , cartItems , songLyrics, emptyCart , removeFromCard ,ShowLyrucs ,filterSong}}>
      {props.children}
    </Context.Provider>
  )
}

export{ContextProvider,Context}
