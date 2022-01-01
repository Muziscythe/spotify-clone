import React from 'react';
import "./Header.css";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Avatar } from "@mui/material";
import {useDataLayer} from "../DataProvider";

function Header() {
    const {user} = useDataLayer();
    function description(str, len) {
        return str?.length > len ? str.substr(0, len - 1) + "..." : str;
      }
    
    return (
        <div className="header">
            <div className='header__left'>
                <ArrowBackIosOutlinedIcon fontSize='small' className='header__icon'/>
                <ArrowForwardIosOutlinedIcon fontSize='small' className='header__icon'/>
            </div>
            <div className='header__right'>
            <div className='header__rightInner'>
                <h4 className='header__upgrade'>UPGRADE</h4>
                <div className='header__profile'>
                    <Avatar alt="" src={user?.images[0].url} sx={{width:28,height:28}} />
                    <h4>{description(user?.display_name, 10)}</h4>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
