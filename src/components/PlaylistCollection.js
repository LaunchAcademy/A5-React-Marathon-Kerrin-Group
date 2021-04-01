import React, {useState} from 'react';
import Playlist from './Playlist.js'


const PlaylistCollection = props => {

  const [clickedPlaylist, setClickedPlaylist] = useState(null)

  const playlists = props.data.map((playlist) => {
   
    const handleClick = () => {
      // debugger
      setClickedPlaylist(playlist.id)
    }

    let selectedStatus = ""
    
    // debugger
    if (playlist.id === clickedPlaylist) {
      selectedStatus = "selected"
    }

    return (
      <Playlist 
        handleClick={handleClick}
        selected={selectedStatus}
        key={playlist.id} 
        playlist={playlist.name}
      />
    )
  })
  
  return (
    <div>
      <h3>Playlists</h3>
      {playlists}
    </div>
  )
}

export default PlaylistCollection;