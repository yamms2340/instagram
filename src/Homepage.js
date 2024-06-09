import React from 'react';
import Sidenav from './navigation/Sidenav';
import Timeline from './timeline/Timeline';
import './Homepage.css'
import Line from './navigation/Linemiddle.js'
const Homepage = () => {
    return (
            <div className='homepage'>
            
            <div className='nav'>
            <Sidenav/>
             </div>
             <div className='linemiddle'>
                <Line/>
            </div>
             <div className='timeline'>
             <Timeline/>
            </div>
              

            </div>



        
);
}

export default Homepage;
