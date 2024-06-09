import React from 'react';
import './Timeline.css'

import Suggestions from './suggestions';
import Post from './post/post';
const Timeline = () => {
    return (
        <div className='timeline'>
        <div className='timeline_left'>
            <Post/>
        </div>
           <div className='timeline_right'>
               <Suggestions/>
               
           </div>
        </div>
    );
}

export default Timeline;
