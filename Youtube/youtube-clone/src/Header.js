import React from 'react'
import './Header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import { Avatar } from '@mui/material';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import App from './App';

// es7 snippets extension used from VSC


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuSharpIcon />
                <img
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20220605194644"
                    alt=""
                />
            </div>



            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchSharpIcon className='header__inputButton' />
            </div>



            <div className="mic__logo">
                <MicSharpIcon />
            </div>



            <div className="header__right">
                <VideoCallSharpIcon className='header__icon' />
                <AppsSharpIcon className='header__icon' />
                <NotificationsNoneSharpIcon className='header__icon' />
                <Avatar
                    alt="Aayush Gupta"
                    src="https://yt3.ggpht.com/yti/AOXPAcWgx2gYAORr1otBgCQjSKJKoiPmSMrNTKKIkQ=s88-c-k-c0x00ffffff-no-rj"
                />
            </div>





        </div>
    );
}

export default Header
