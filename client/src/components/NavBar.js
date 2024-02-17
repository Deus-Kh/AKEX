
// import React from 'react';
// // import ReactDOM from 'react-dom';
// import { NavLink } from "react-router-dom";
// import styles from "../styles/header.module.css"

//  function OldNavBar() {
//   return ( <><nav>
//     <h1 className={styles.logo}>AK</h1>
//     <ul>
//       <li>
//         <NavLink to="/" activeClassName={styles.active}>Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/about"  activeClassName={styles.active}>About us</NavLink>
//       </li>
//       <li>
//       <NavLink to="/contact"  activeClassName={styles.active}>Contact</NavLink>
//       </li>
      
//     </ul>
//   </nav> </>);
// }

// export default OldNavBar;


import * as React from 'react';
// import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
// import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
// import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HomeRounded from '@mui/icons-material/HomeRounded';
import { NavLink } from "react-router-dom";
import styles from "../styles/header.module.css"
import Typography from '@mui/joy/Typography';


export default function Navbar() {

  return (
    
    <Box role="navigation" sx={{"width":"37%","display":'flex',"justify-content": "space-between", "position":'fixed','margin':'0 2em'}}>
      <Box>
      <Typography noWrap
      level="h1"
      textOverflow="clip"
      fontFamily="Anurati-Regular"
      textColor="#fffff0cf"
      fontSize="2.5rem"
      sx={{textShadow: '0 0 3.5px  #fffff0'}}
      
       > KE
       </Typography>
      </Box>
      <Box>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          '--List-radius': '8px',
          '--List-padding': '4px',
          '--List-gap': '8px',
          '--ListItem-gap': '0px',
          
        }}
      >
        <ListItem role="none">
          <ListItemButton role="menuitem" sx={{
        '&:hover': {
          backgroundColor: 'transparent !important'
        },
      }}>
            
            <NavLink to="/" >Home</NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
        <ListItemButton role="menuitem" sx={{
        '&:hover': {
          backgroundColor: 'transparent !important'
        },
      }}>
            
            <NavLink to="/about"  >About </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
        <ListItemButton role="menuitem" sx={{
        '&:hover': {
          backgroundColor: 'transparent !important'
        },
      }}>
            
            <NavLink 
              to="/contact" 
              
              >
              Contact</NavLink>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}