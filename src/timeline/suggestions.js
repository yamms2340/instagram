import React from 'react';
import './suggestions.css'
import Suggest from './suggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Suggestions = () => {
    return (
        <div style={{marginLeft:"68px"}}>
        <div style={{marginLeft:"53px",marginTop:"40px",alignItems:"center"}}>
         
        <div style={{display:"flex",justifyContent:"space-between"}}>

        <div style={{display:"flex",flexDirection:"row"}}>
<AccountCircleIcon className='suggestions__profile__my' style={{fontSize:60}}/>

<div style={{display:"flex",flexDirection:"column"}}>
<span>yamini__reddy</span>
<span>yamini</span>
</div>

</div>

<div>
<a href="hi" style={{textDecoration:"none",color:'rgb(35, 134, 191)',marginRight:"98px"}}>switch</a>
</div>
</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
<p>Suggested for you</p>
<p style={{marginRight:"100px",color:'black'}}>see All</p>
</div>
</div>
 <Suggest avatar="M" name="mohan@19"/> 
 <Suggest avatar="S" name="swathi__01"/> 
 <Suggest avatar="K" name="karan__"/>
 <Suggest avatar="A" name="ashwin__reddy"/> 
 <Suggest avatar="P" name="prudvi__kothi" /> 
 </div>
    );
}

export default Suggestions;
