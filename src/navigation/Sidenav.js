import React from 'react';
import './Sidenav.css'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Sidenav = () => {
    return (
        <div className='sidenav'>
          <h2>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h2>
         
     <div className='sidenav_buttons'>
       <button className='side_button'>
           <HomeIcon className='button-icon'/>
           <span className='button-span'>Home</span>
       </button>
       <button className='side_button'>
           <SearchIcon className='button-icon'/>
           <span className='button-span'>Search</span>
       </button>
       <button className='side_button'>
           <ExploreIcon className='button-icon'/>
           <span className='button-span'>Explore</span>
       </button>
       <button className='side_button'>
           <SlideshowIcon className='button-icon'/>
           <span className='button-span'>Reels</span>
       </button>
       <button className='side_button'>
           <ChatIcon className='button-icon'/>
           <span className='button-span'>Messages</span>
       </button>
       <button className='side_button'>
           <FavoriteBorderIcon className='button-icon'/>
           <span className='button-span'>Notifications</span>
       </button>
       
       <button className='side_button'>
           <AddCircleOutlineIcon className='button-icon'/>
           <span className='button-span'>Create</span>
       </button>
       <button className='side_button'>
           <AccountCircleIcon className='button-icon'/>
           <span className='button-span'>Profile</span>
       </button>
       <div className='more'>
       <button className='side_button'>
           <MenuIcon className='button-icon'/>
           <span className='button-span'>More</span>
       </button>
       </div>
     </div>
     

        </div>

    );
}

export default Sidenav;
