import React, { useContext, useState } from 'react'
import { Context } from '../Context'


function AddComponent() {
  const { allSong, setAllSong } = useContext(Context);
  const [newSong, setNewSong] = useState([]);
  console.log(newSong);
  function AddNewSong(event) {
    event.preventDefault();
   const {title , name , price , style ,lyrics} = event.target;

   console.log(title.value);
    const newListSong = {
      title: title.value,
      name: name.value,
      price:price.value,
      style: style.value,
      lyrics: lyrics.value,
      isFavorite: false,
      id: Date.now(),
    }
    setAllSong([...allSong, newListSong])
  }
  
  return (
    <form  onSubmit={AddNewSong}>
      <input
        name="title"
        type="text"
        value={newSong.title}
      />
      <input
        name ="name"
        type="text"
        value={newSong.name}
        placeholder="Artist"
      />
      <input
       name="price"
        type="text"
        value={newSong.price}
        placeholder="Price" />

      <input
        name ="style"
        type="text"
        value={newSong.style}
        placeholder="Style"
      />
      <textarea
       name ="lyrics"
        placeholder="Lyrics"
        value={newSong.lyrics}
      />
      <button>Add</button>
    </form>
  )
}

export default AddComponent
