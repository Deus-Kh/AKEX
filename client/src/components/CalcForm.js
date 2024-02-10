import React, { useState, useEffect } from 'react';
import MySelect from './Select';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';

import MyInput from './Input';


const FormContext = React.createContext()

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