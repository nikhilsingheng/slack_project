import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core"
// import AccessTimeIcon from '@material-ui/icon/AccessTimeIcon'
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"



// export default (
//   <AccessTime
//     fontSize="inherit"
//     style={{ fontSize: "200px" }}
//   />
// );


function Header() {
  return ( 
  <div className="header">
   <div className="header_left">
    <Avatar className="header_avatar" alt="Rafeh Qazi" src=""/>

    
    <AccessTimeIcon/>
    
    
  

   </div>
   <div className="header_search">
    <SearchIcon/>
    <input placeholder="Search Clever Programmer" ></input>

   </div>
   <div className="header_rigth">
       <HelpOutlineIcon/>

   </div>
 
  </div>
  )
}

export default Header;
