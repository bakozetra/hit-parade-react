import React from 'react'
import {Link} from 'react-router-dom'

function header() {
  return (
    <div>
    <h1>Hit Parad</h1> 
    <div>
      <nav>
        <ul className ="menu">
          <Link to="/"><li>🔥Popular Songs</li></Link>
          <Link to ="/style"><li>💗Styles</li></Link>
          <Link to ="/add"><li>🧔🏿Add</li></Link>
          <Link to ="/cart"><li>🛒Cart</li></Link>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default header
