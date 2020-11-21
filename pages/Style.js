import React, { useContext } from 'react'
import {Context} from '../Context';
import StyleComponents from '../component/StyleComponent'
function Style(id) {
const { allSong } = useContext(Context);
console.log(allSong);
const mapAllSong = allSong.map((song ,index) => song.style);
console.log(mapAllSong);
const allStyle = [...new Set(mapAllSong)]
  return (
    <div>
      <StyleComponents song={allStyle}/>
    </div>
  )
}

export default Style
