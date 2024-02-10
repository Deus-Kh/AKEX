import React, { useState, useEffect } from 'react';
import MySelect from './Select';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MyInput from './Input';
import { FormControl } from "@mui/material";


// const FormContext = React.createContext()

const url = process.env.REACT_APP_API_URL;

function MyForm(props) {
    const request = (e,first,second,setValueFn)=>{
        fetch(url+first).then(res => res.json()).then(text =>{ setValueFn((e.target.value * text.conversion_rates[second]).toFixed(3)  )})
    }
    const [firstValue, setfirstValue] = useState()
    const [secondValue, setsecondValue] = useState()
    const [firstRateValue, setfirstRateValue] = useState("AMD")
    const [secondRateValue, setsecondRateValue] = useState("USD")

    // useEffect(() => {
    //     request(firstValue,firstRateValue,secondRateValue,setsecondValue )
    
    // }, [firstValue])
    // useEffect(() => {
    //     request(secondValue,secondRateValue,firstRateValue,setfirstValue )
    
    // }, [secondValue])

    

    const firstInputHandler = (e,firstRat,secondRat)=>{
        
        request(e,firstRat,secondRat,setsecondValue )
        
    }
    const secondInputHandler = (e,firstRate,secondRate)=>{
        setsecondValue(e.target.value)
        request(e,firstRate,secondRate,setfirstValue )
    }

    return ( 
    
        <FormControl>
        <MySelect id="firstRate" value="AMD"  onChange={setfirstRateValue}/>
        <Input type='number'  
        onChange={e=>{setfirstValue(e.target.value) ;firstInputHandler(e,firstRateValue,secondRateValue)}} value={firstValue}
        />
        <Typography level="body-xs" sx={{ alignSelf: 'flex-end', color: '#8a0f0f' }}>
            {firstValue<0 && 'Please enter an amount greater than 0'}
        </Typography>
        {/* <MyInput onChange={setfirstValue} value={firstValue}></MyInput> */}
        
        <MySelect id="secondRate" value="USD"  onChange={setsecondRateValue}/>
        <Input  type='number' 
        onChange={e=>{secondInputHandler(e,secondRateValue,firstRateValue)}} value={secondValue}
        />
        <Typography level="body-xs" sx={{ alignSelf: 'flex-end', color: '#8a0f0f' }}>
            {secondValue<0 && 'Please enter an amount greater than 0'}
        </Typography>
        {/* <MyInput onChange={setsecondValue} value={secondValue} ></MyInput> */}
        
    </FormControl>
    
    );
}

export default MyForm;