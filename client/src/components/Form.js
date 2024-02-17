import React, { useState, useEffect } from 'react';
import MySelect from './Select';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { FormControl } from "@mui/material";
import Box  from '@mui/joy/Box';
import '../App.css'
import  Snackbar  from "@mui/joy/Snackbar";

const inputStyles ={
    'color':'#fffff0',
    'fontWeight':'100',
    "border":'none ',
    'borderRadius':0,
    'borderBottom':'1px solid #fffff011',
    'backgroundColor':'transparent',
    '--Input-paddingInline':' 0.75rem 0',
    '&::before': {
      borderBottom: '1.5px solid #fffff08f',
      transform: 'scaleX(0)',
      bottom: 0,
      top: 'unset',
      transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
      borderRadius: 0,
      boxShadow: '0 0 5px 0px #fffff0'
    },
    '&:focus-within::before': {
      transform: 'scaleX(1)',
    },
  }


// const FormContext = React.createContext()

const url = process.env.REACT_APP_API_URL;

function MyForm(props) {
    
    const request = (e,first,second,setValueFn)=>{
        fetch(url+first).then(res => res.json()).then(text =>{ setValueFn((e* text.conversion_rates[second]).toFixed(3)  )})
    }
    const [firstValue, setfirstValue] = useState(1)
    const [secondValue, setsecondValue] = useState()
    const [firstRateValue, setfirstRateValue] = useState("AMD")
    const [secondRateValue, setsecondRateValue] = useState("USD")
    const [db,setDb] = useState()
    useEffect(() => {
      
        request(firstValue,firstRateValue,secondRateValue,setsecondValue )
        fetch(url+firstRateValue).then(res => res.json()).then(text=>{setDb(text.conversion_rates)})
    }, [firstValue, firstRateValue, secondRateValue])
    
    

    const firstInputHandler = (e,firstRat,secondRat)=>{
        
        request(e,firstRat,secondRat,setsecondValue )
        
    }
    const secondInputHandler = (val,firstRate,secondRate)=>{
        setsecondValue(val)
        request(val,firstRate,secondRate,setfirstValue )
    }

    return ( 
    
       <Box 
       sx={{
        'z-index':'999',
        'maxWidth':'50vw',
        'height':'100vh',
        'display':'flex',
        'justifyContent':'center',
        'alignItems':'center',
        
       }} 
       className={"formRoot"}
       >
         <FormControl
         sx={{
            'gap':'.5rem',
            'padding':'1.5rem 1rem',
            "height":'30%',
            'background': 'rgba(255, 255, 240, 0.05)',
            'border-radius': '10px ',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter':' blur(5.5px)',
            '-webkit-backdrop-filter': 'blur(5.5px)',
            'border': '1px solid rgba(255, 255, 255, 0.4)'
         }}
         >
            <Typography level="h3" noWrap sx={{
                'textShadow': '0 0 2px #fffff0',
                'color':'#fffff0cf',
                'fontWeight':'300',
                'textAlign':'center'
            }}
            >
                Currency converter
            </Typography>
        
        <Input type='number' 
        onChange={e=>{setfirstValue(e.target.value) ;firstInputHandler(e.target.value,firstRateValue,secondRateValue)}} value={firstValue}
        placeholder='From'
        sx={inputStyles}
        endDecorator={
            <React.Fragment>
                <MySelect id="firstRate" value="AMD"  onChange={setfirstRateValue}/>
            </React.Fragment>
        }
        />
        
        {/* <MyInput onChange={setfirstValue} value={firstValue}></MyInput> */}
        
        
        <Input  type='number' 
        placeholder='To'
        onChange={e=>{secondInputHandler(e.target.value,secondRateValue,firstRateValue)}} value={secondValue}
        sx={inputStyles}
        endDecorator={
            <React.Fragment>
                <MySelect id="secondRate" value="USD"  onChange={setsecondRateValue}/>
            </React.Fragment>
        }
        />
        {/* <MyInput onChange={setsecondValue} value={secondValue} ></MyInput> */}
        <Typography level="h4" noWrap sx={{
                'textShadow': '0 0 2px #fffff06f',
                'color':'#fffff0cf',
                'fontWeight':'300',
                'padding':'0 0.5rem'
                // 'textAlign':'center'
            }}
            >
                1{db?  " "+firstRateValue+ " = "+ db[secondRateValue]+" "+secondRateValue  : " " }

            </Typography>
            <Typography level="h5" noWrap sx={{
                'textShadow': '0 0 2px #fffff06f',
                'color':'#fffff0cf',
                'fontWeight':'300',
                'padding':'0 0.5rem'
                // 'textAlign':'center'
            }}
            >
                1{db?  " "+secondRateValue+ " = "+ (1/db[secondRateValue]).toFixed(5)+" "+firstRateValue  : " " }
                
            </Typography>
    </FormControl>
    <Snackbar 
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
    open={firstValue<0||secondValue<0} 
    level="body-xs"
     sx={{
         "alignSelf": 'flex-end',
         stroke:"red",
        'textShadow': '0 0 2px #fffff06f',
        'WebkitTextStroke':'1px #ff000031',
        'color':'#fffff0cf',
        'fontWeight':'300',
        'background': 'rgba(255, 255, 240, 0.05)',
        'border-radius': '10px ',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'backdrop-filter':' blur(5.5px)',
        '-webkit-backdrop-filter': 'blur(5.5px)',
        'border': '1px solid rgba(255, 255, 255, 0.4)' 
         }}>
             Please enter an amount greater than 0
        </Snackbar>
       </Box >
    
    );
}

export default MyForm;