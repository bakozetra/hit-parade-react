import React, { useContext } from 'react'
import LyrucsComponent from '../component/LyrucsComponent'
import { Context } from '../Context'


function Lyrucs() {
  const { songLyrics } = useContext(Context);
  console.log(songLyrics);
  return (
    <div>
     <LyrucsComponent lyrics={songLyrics}/>
    </div>
  )
}

export default Lyrucs
