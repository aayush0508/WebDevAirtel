import React from 'react'
import SidebarRow from './SidebarRow'
import './SidebarRow.css'
import './Sidebar.css'
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import { ReactComponent as Logo } from "./youtube-shorts-icon.svg";


import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';

function Sidebar() {
    return (
        <div className='sidebar'>

            <SidebarRow Icon={HomeSharpIcon} title="Home" />
            <SidebarRow Icon={Logo} title="Shorts" className="short_icons" />
            <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscriptions" />




        </div>
    )
}

export default Sidebar
