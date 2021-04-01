import React from "react"

const Playlist = props => {
  // debugger

  return(
    <p className={props.selected} onClick={props.handleClick}>{props.playlist}</p>
  )
}

export default Playlist