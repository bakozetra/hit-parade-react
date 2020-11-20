import React, { useContext } from 'react'
import {Context} from '../Context';
import PopularSong from '../component/PopularSong'

function popular() {
  const { allSong } = useContext(Context);
  return (
    <div>
     {allSong.map((song) => {
   return (
     <PopularSong key={song.id} song={song}></PopularSong>
   )
     } 
     )}
    </div>
  )
}

export default popular
