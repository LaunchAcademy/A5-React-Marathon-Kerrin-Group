import React from 'react'

import PlaylistCollection from './PlaylistCollection.js';
import SongCollection from "./SongCollection"

const App = (props) => {

  return (
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      <div className="musicPlayer">
        <PlaylistCollection data={props.data.playlists}/>
        <SongCollection />
      </div>
    </div>
  );
}

export default App
