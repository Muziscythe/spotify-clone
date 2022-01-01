import React, {useEffect} from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "../spotify";
import Player from "./Player";
import { useDataLayer } from "../DataProvider";

export default function App() {
  const {user,setUser,playlists,setPlaylists,setDiscoverWeekly,token,setToken,spotify} = useDataLayer();

  useEffect(() => {
    const access_token = getTokenFromUrl();
    window.location.hash= "";
    spotify.setAccessToken(access_token)
    spotify.getMe().then(user => {
      // console.log(user);
      setUser(user)
    })
    spotify
  .getUserPlaylists() 
  .then((playlists) =>{
    setPlaylists(playlists)
  }
  );
  spotify.getPlaylist('37i9dQZEVXcUldeyEClOXF')
  .then(function(data) {
    setDiscoverWeekly(data)
  }, function(err) {
    console.error(err);
  });
    // console.log(access_token);
    if(access_token){
      setToken(access_token)
    }
    
    // return () => {
    //   cleanup
    // }
  }, [spotify])
  console.log(user);
  console.log(token);
  console.log(playlists)
  return (
    <div className="app">
    {token? <Player />: <Login /> }
    </div>
  );
}
