import React from 'react'
import "./SongRow.css"

function SongRow({track,playSong}) {
    function description(str, len) {
        return str?.length > len ? str.substr(0, len - 1) + "..." : str;
      }
    return (
        <div className='songRow' onClick={() => playSong(track)}>
            <img src={track?.album.images[0].url} alt="" className="songImage" />
            <div className="songRow__info">
                <h4>{description(track?.name,30)}</h4>
                <p >{description(track?.artists.map((artist)=> artist.name).join(", "),30)}
                <span>{track?.album.name}</span></p>
            </div>
        </div>
    )
}

export default SongRow;
