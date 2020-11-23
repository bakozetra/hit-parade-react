import React from 'react'
import PopularSong from './PopularSong'
function LyrucsComponent({lyrics}) {
  return (
    <div className="Lyrics">
      <h2>{lyrics.title}</h2>
      <pre><p>{lyrics.lyrics}</p></pre>
      <p>{lyrics.name}</p>
    </div>
  )
}

export default LyrucsComponent
