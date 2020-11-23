import React, { useEffect, useState } from 'react'
import Song from './song.json'

const Context = React.createContext();
function ContextProvider(props) {
  const [allSong, setAllSong] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [songLyrics, setSongLyrics] = useState({});
  const [songStyle, setSongStyle] = useState([])
 
  useEffect(() => {
    const lsSongs = JSON.parse(localStorage.getItem('allSong'));
    lsSongs ? setAllSong(lsSongs) : setAllSong(Song)
  } ,[])
  useEffect (() => {
    localStorage.setItem('allSong' , JSON.stringify(allSong))
  } ,[allSong])

  function getSong() {
    setAllSong(Song);
    console.log(allSong);
  }
  function addToCart(song) {
    setCartItems(prevItem => [...cartItems, song])
  }

  function ShowLyrucs(lyrics) {
    setSongLyrics(lyrics)
  }
  function StyleSong(song) {
    setSongStyle(prevItem => [...songStyle, song]);
  }

  function favoriteSong (songId) {
    const ArrayLyrucs = allSong.map(newSong => {
      if (newSong.id === songId) {
        return {
          ...newSong,
          isFavorite: !newSong.isFavorite,
        }
      }
      return newSong
    })
    setAllSong(ArrayLyrucs);
    console.log(songId);
  
  }

  function filterSong(song) {
    setAllSong(prevItem => prevItem.filter(item => item.style === song))
  }
  function removeFromCard(imgId) {
    setCartItems(preveItems => preveItems.filter(item => item.id !== imgId))
  }
  

  console.log(songLyrics);

  function emptyCart() {
    setCartItems([]);
  }
  useEffect(() => {
    getSong()
  }, [])
 
  return (
    <Context.Provider value={{ allSong, addToCart, cartItems, songLyrics, emptyCart, removeFromCard, ShowLyrucs, filterSong, StyleSong, setAllSong , favoriteSong }}>
      {props.children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
