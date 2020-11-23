import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Context } from '../Context'
import { Link } from 'react-router-dom'

function styleName() {
  const { allSong, ShowLyrucs } = useContext(Context);
  const { styleNames } = useParams();
  const filterStyleName = allSong.filter(name => name.style === styleNames);
  console.log(filterStyleName);
  return (
    <div>
      {
        filterStyleName.map(song => {
          return (
            <div key={song.id}>
              <Link to="/lyrucs" onClick={() => ShowLyrucs(song)}>
                <div className='songLyrics'>
                  <h2>{song.title}</h2>
                  <p>{song.name}</p>
                </div></Link>
            </div>
          )
        })
      }

    </div>
  )
}

export default styleName
