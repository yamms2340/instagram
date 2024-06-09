import React from 'react';
import { Avatar } from '@mui/material';
import './suggest.css'
const Suggest = (props) => {
    return (
        <div className='suggestions__box'>
            <div className='suggestions__profile'>
            <div className='suggestions__avatar'>
             <Avatar>{props.avatar}</Avatar>
             </div>
             <div className='suggest__details'>
             <div className='suggestions__details1'>
            {props.name}
            </div>
           <small className='suggestions__details2'>Suggested for you</small>
             </div>

             </div>
            <div className='suggest__follow'>
                <a href="gj">Follow</a>
            </div>
             
        </div>
       
    );
}

export default Suggest;
