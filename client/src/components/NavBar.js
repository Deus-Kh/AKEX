import * as React from 'react';
import { NavLink } from "react-router-dom";
import "../styles/header.module.css"
import {Typography, ListItemButton, ListItem, List, Box} from '@mui/joy/';


export default function Navbar() {
  return (
    <Box role="navigation" 
    sx={{
      "width":"37%",
      "display":'flex',
      "justify-content": "space-between", 
      "position":'fixed',
      'margin':'0 2em'
      }}>
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
            <NavLink to="/contact" >Contact</NavLink>
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}