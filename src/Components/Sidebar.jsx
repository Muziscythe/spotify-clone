import React from 'react';
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import { useDataLayer } from "../DataProvider";

function Sidebar() {

    const {playlists } = useDataLayer();
   
    return (
        <div className='sidebar'>
            <img className='sidebar__logo'
            src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png"
            alt='logo'></img>

            <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicOutlinedIcon} title="Your Library" />

            <hr></hr>

            {playlists?.items?.map((playlist)=>{
                <SidebarOption title={playlist.name} />
            })}

        </div>
    )
}

export default Sidebar
