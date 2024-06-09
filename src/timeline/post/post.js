import { MoreHoriz } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import Postvideo from './Postvideo';
import './post.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Checkicon from './checkicon';
const Post = () => {
  const [isfilled,setisfilled]=React.useState(false);
  const toggle=()=>{
    setisfilled(!isfilled)
  }
  const [dosave,setdosave]=React.useState(false);
  const turn=()=>{
    setdosave(!dosave);
  }
    return (
      <>
                    <Checkicon style={{marginLeft:'940px'}}/>

        <div className='post'> 

            <div className='post__header'>
            <div className='post__profile'>
            <div className='post__avatar'>
             <Avatar>Y</Avatar>
             </div>

               <div className='post__details'>
             <div className='post__details1'>
            yamini@re •
             <span>2h</span>•
             <span className='post__follow'><a href='go'>Follow</a></span>
             </div>
             <span>Original__ Hyderabad</span>
             </div>

             </div>
             <div className='post__more'>
                <MoreHoriz/>
             </div>
            </div>
            <div className='post__body'>
            <img src="https://w0.peakpx.com/wallpaper/129/256/HD-wallpaper-beautiful-girl-cute-feelings-girl-love-painting.jpg" alt="cute"></img>

            </div>
            <div className='post__footer'>
            <div className='post__footer__left'>
            <div className='post__like' onClick={toggle}>
                  {isfilled?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderOutlinedIcon/>}
            </div>
            <ModeCommentOutlinedIcon style={{marginLeft:'14px'}}/>
            <ScreenShareOutlinedIcon style={{marginLeft:'14px'}}/>
            </div>
            <div className='post__footer__right' onClick={turn}>
              {dosave?<TurnedInIcon/>:<TurnedInNotIcon/>}
            </div>
            </div>
            <small style={{lineHeight:"2px"}}>456,3400 likes</small>
            <hr style={{margin:"20px 2px 20px 2px",width:'16'}}></hr>
        </div>
        <Postvideo/>
        </>

    );
}

export default Post;
