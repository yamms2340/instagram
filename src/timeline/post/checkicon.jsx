import { Height } from '@mui/icons-material';
import { blueGrey } from '@mui/material/colors';
import { lineHeight } from '@mui/system';
import React from 'react';
import { line } from 'stylis';

const Checkicon = () => {
    const stylesk = {
        p: {
            fontWeight: 400,
            fontSize: 20,
            lineHeight:0.3,

            marginLeft:30,
        },
        sm:{
           color:blueGrey,
           lineHeight:0.3,
            
        },
        image:{
            height:129,
            marginLeft:85,
           marginTop:30,
        },
        suggest:{
            marginBottom:18,
            marginLeft:170,
            fontWeight:400,
            fontSize:20,

        }
    };

    return (
        <>
        <div>
        <div style={{marginLeft:'250px'}}>
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDK7wbcJ_zjDSvpGej_ha-eGDmYFXIqnKvrV9CgqPNTWlB8anO" alt="ok" style={stylesk.image} />
            <p style={stylesk.p}>you've completely caught up</p>
            <p style={stylesk.sm}>You've seen all new posts from the past 14 days. </p>
        </div>
        <hr style={{marginTop:'70px',marginLeft:'170px',borderWidth:"0.1px"}}></hr>
        <p style={stylesk.suggest}>Suggested posts</p>
        </div>
</>
    );
};

export default Checkicon;