import React, { useState, useEffect } from 'react';
import MySelect from './Select';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';






const url = process.env.REACT_APP_API_URL;

function MyForm(props) {
    const request = (e,first,second)=>{
        fetch(url+first)
        .then(res => res.json())
        .then(text =>{ setConvertedValue((e.target.value * text.conversion_rates[second]).toFixed(3)  )})
    }
    const [Value, setValue] = useState()
    const [convertedValue, setConvertedValue] = useState()
    const [fromCurrency, setFromCurrency] = useState("AMD")
    const [toCurrency, setToCurrency] = useState("USD")

    // useEffect(() => {
    //     request(firstValue,firstRateValue,secondRateValue,setsecondValue )
    
    // }, [firstValue])
    // useEffect(() => {
    //     request(secondValue,secondRateValue,firstRateValue,setfirstValue )
    
    // }, [secondValue])

    useEffect(() => {
    
    }, [Value,fromCurrency,toCurrency])

    const inputHandler = (e)=>{
        setValue(e.target.value)
        request(e,fromCurrency,toCurrency)
    }
    // const secondInputHandler = (e,firstRate,secondRate)=>{

    //     request(e,firstRate,secondRate,setfirstValue )
    // }

    return ( 
    // <FormContext.Provider value={setfirstRateValue}>
        <form>
        <MySelect id="firstRate" value="AMD"  onChange={setFromCurrency}/>
        <Input type='number'  
        onChange={inputHandler} 
        />
        {/* <MyInput onChange={setfirstValue} value={firstValue}></MyInput> */}
        
        <MySelect id="secondRate" value="USD"  onChange={setToCurrency}/>
        <Typography>{convertedValue}</Typography>
        {/* <MyInput onChange={setsecondValue} value={secondValue} ></MyInput> */}
        
    </form>
    // </FormContext.Provider>
    );
}

export default MyForm;


// import * as React from 'react';
// import { ClickAwayListener } from '@mui/base/ClickAwayListener';
// import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Chip from '@mui/joy/Chip';
// import List from '@mui/joy/List';
// import ListDivider from '@mui/joy/ListDivider';
// import ListItem from '@mui/joy/ListItem';
// import ListItemContent from '@mui/joy/ListItemContent';
// import ListItemButton from '@mui/joy/ListItemButton';
// import ListItemDecorator from '@mui/joy/ListItemDecorator';
// import HomeRounded from '@mui/icons-material/HomeRounded';
// import { NavLink } from "react-router-dom";
// import styles from "../styles/header.module.css"



// export default function MyForm() {

//   return (
//     <Box sx={{ minHeight: 190 }}>
//       <List
//         role="menubar"
//         orientation="horizontal"
//         sx={{
//           '--List-radius': '8px',
//           '--List-padding': '4px',
//           '--List-gap': '8px',
//           '--ListItem-gap': '0px',
//         }}
//       >
//         <ListItem role="none">
//           <ListItemButton role="menuitem">
            
//             <ListItemDecorator>
//               <HomeRounded />
//             </ListItemDecorator>
//             <NavLink to="/" activeClassName={styles.active}>Home</NavLink>
//           </ListItemButton>
//         </ListItem>
//         <ListItem role="none">
//         <ListItemButton role="menuitem">
            
//             <NavLink to="/about"  activeClassName={styles.active}>About us</NavLink>
//           </ListItemButton>
//         </ListItem>
//         <ListItem role="none">
//         <ListItemButton role="menuitem">
            
//             <NavLink to="/contact"  activeClassName={styles.active}>Contact</NavLink>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </Box>
//   );
// }