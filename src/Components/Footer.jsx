import React,{useEffect} from 'react'
import "./Footer.css"
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Slider} from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import {useDataLayer} from "../DataProvider";

function Footer() {
    const {spotify,item,setItem,playing,setPlaying} = useDataLayer();
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r);
          setItem(r.item);
        //   setPlaying(r.is_playing);
        });
      }, [spotify]);
    //   const handlePlayPause = () => {
    //     if (playing) {
    //       spotify.pause();
    //       setPlaying(false);
    //     } else {
    //       spotify.play();
    //       setPlaying(true);
    //     }
    //   };
    
    //   const skipNext = () => {
    //     spotify.skipToNext();
    //     spotify.getMyCurrentPlayingTrack().then((r) => {
    //         setItem(r.item);
    //         setPlaying(true);
    //     });
    //   };
    
    //   const skipPrevious = () => {
    //     spotify.skipToPrevious();
    //     spotify.getMyCurrentPlayingTrack().then((r) => {
    //       setItem(r.item);
    //       setPlaying(true);
    //     });
    //   };
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__songImage' 
                src={item?.album.images[0].url}
                alt={item?.name}></img>
                <div className='footer__songDetails'>
                {item ? (
                        <div className="footer__songInfo">
                            <h4>{item.name}</h4>
                            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                        </div>
                        ) : (
                        <div className="footer__songInfo">
                            <h4>No song is playing</h4>
                            <p>...</p>
                        </div>
                        )}
                        <div className="footer__icon__left"><FavoriteBorderIcon className='footer__icon' fontSize="small" /></div>
                </div>
            </div>
            <div className='footer__middle'>
                <div className='footer__middleInner'>
                <div className="footer__middleLeft"><ShuffleIcon className='footer__icon' />
                <SkipPreviousIcon  className='footer__icon' /></div>
                <div className="footer__middleCenter">{playing
                    ?<PauseCircleFilledIcon  fontSize='large' className='footer__icon' />
                    :<PlayCircleFilledIcon  fontSize='large' className='footer__icon' />}</div>
                
                <div className="footer__middleRight"><SkipNextIcon  className='footer__icon' />
                <RepeatIcon className='footer__icon' /></div>
                </div>    
            </div>
            <div className='footer__right'>
                <div className='footer__rightIn'>
                <PlaylistPlayIcon fontSize='small' className='footer__icon' />
                <VolumeUpIcon fontSize='small' className='footer__icon' />
                <Slider sx={{
                                width: 120,
                                color: 'gray',
                            }}/>         
                </div>
                
            </div>
        </div>
    )
}

export default Footer
