import React from 'react'
import PopularSong from './PopularSong'
function LyrucsComponent({lyrics}) {
  return (
    <div className="Lyrics">
      <h2>{lyrics.title}</h2>
      <p>{lyrics.lyrics}</p>
      <p>{lyrics.name}</p>
    </div>
  )
}

export default LyrucsComponent
