import React ,{ createContext,useContext, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

export const DataLayerContext = createContext();
export function useDataLayer(){
    return useContext(DataLayerContext);
}
const spotify = new SpotifyWebApi();

//BQDZIuHNcR7EYzeWsXUpPHOMzNAWsXFUPyrpTIMmace6sdG2R-QrA-ZONpCRRLP_QcY1W3iUg2gSC-CsZkRQnqzUyyBXDalG4ruLKn69Kt39ihtbkGXvAKQQ5KHtGkUf_s8L83TM5U1Nzhr-AYa7F89rKklC7RZeFv-Zsf1PozHPvPeSDSaa

const DataProvider = (props) =>{

    const [user,setUser] = useState();
    const [playlists , setPlaylists] = useState();
    const [discoverWeekly,setDiscoverWeekly] = useState();
    const [item,setItem] = useState();
    const [playing,setPlaying] = useState(false);
    const [token,setToken ] = useState();
    const value = {
        user,
        setUser,
        playlists,
        setPlaylists,
        discoverWeekly,
        setDiscoverWeekly,
        item,
        setItem,
        playing,
        setPlaying,
        token,
        setToken,
        spotify
    }

    return <DataLayerContext.Provider value={value}>
        {props.children}
    </DataLayerContext.Provider>
}

export default DataProvider;