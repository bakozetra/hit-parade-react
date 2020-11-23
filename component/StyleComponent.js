import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import styleName from './styleName'


function StyleComponent({song }) {
  const {filterSong } = useContext(Context)
  return (
    <div>
      {song.map((style , id) => {
        return (
          <Link to = {`/styleName/${style}`}key={id}>
            <p className="style"> 🎧{style}</p>
          </Link>)
      })}
    </div>
  )
}

export default StyleComponent
