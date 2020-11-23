import React, { useContext } from 'react'
import {Context} from '../Context';
import PopularSong from '../component/PopularSong'

function popular() {
   
	function sortSongsByPopularity(songA, songB) {
		const ratioA = songA.like - songA.unlike;
		const ratioB = songB.like - songB.unlike;
		return ratioB - ratioA;
	}

  const { allSong } = useContext(Context);
  return (
    <div>
     {allSong.sort(sortSongsByPopularity).map((song) => {
   return (
     <PopularSong key={song.id} song={song}></PopularSong>
   )
     } 
    )}
    </div>
  )
}

export default popular
