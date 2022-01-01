import React from 'react'
import "./PlayerBody.css";
import Header from "./Header";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useDataLayer} from "../DataProvider";
import SongRow from "./SongRow";

function PlayerBody() {

    const {discoverWeekly,setItem,setPlaying,spotify} = useDataLayer();
    // const playPlaylist = (id) => {
    //     spotify
    //       .play({
    //         context_uri: `spotify:playlist:37i9dQZEVXcUldeyEClOXF`,
    //       })
    //       .then((res) => {
    //         spotify.getMyCurrentPlayingTrack().then((r) => {
    //           setItem(r.item)
    //           setPlaying(true)
    //         });
    //       });
    //   };
    
      const playSong = (track) => {
          setItem(track)
        // below code is for plpaying song but works for premium users if you want uncomment it
        //   const song_api = `spotify:track:${id}`;
        //   console.log(song_api);
        // spotify
        //   .play({
        //     context_uri: `${song_api}`,
        //   })
        //   .then((res) => {
        //       console.log(res);
        //     spotify.getMyCurrentPlayingTrack().then((r) => {
        //         setItem(r.item)
        //         setPlaying(true)
        //     });
        //   });
      };
    console.log(discoverWeekly);
    return (
        <div className='playerBody'>
            <Header />
            <div className="playerBody__banner">
                <img src={discoverWeekly?.images[0]?.url} alt="Banner picture" className="banner__image" />
                <div className="playerBody__info">
                    <strong>PLAYLIST</strong>
                    <h2>{discoverWeekly?.name}</h2>
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>
            <div className="playerBody__content">
                <div className="playerBody__iconRow">
                    <PlayCircleFilledIcon  className='playerBody__icon' sx={{color: "#1db954",fontSize: "60px"}}/>
                    <FavoriteBorderIcon className='playerBody__icon' sx={{fontSize: "40px",color:"#a4a4a4"}} />
                    <MoreHorizIcon className='playerBody__icon' sx={{fontSize: "40px",color:"#a4a4a4"}} />
                </div>
                <div className="playerBody__songRow">
                    {discoverWeekly?.tracks?.items.map((item)=>{
                        return <SongRow key={item?.track.id} playSong={playSong} track = {item.track} />
                    })}
                </div>
            </div>     
        </div>
    )
}

export default PlayerBody
