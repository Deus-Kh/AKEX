import React, { useState, useEffect } from 'react';
import MySelect from './Select';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import { FormControl } from "@mui/material";
import Box from '@mui/joy/Box';
import '../App.css'
import Snackbar from "@mui/joy/Snackbar";
import Styles from '../styles/Form.module'




const url = process.env.REACT_APP_API_URL;

function MyForm(props) {

    const request = (e, first, second, setValueFn, rateChanged=false) => {
        fetch(url + '?id=' + first, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(text => { 
            setValueFn((e * text[first][second]).toFixed(3));
             if(rateChanged)setDb(text[firstRateValue]);
            })
    }
    const [firstValue, setfirstValue] = useState(1)
    const [secondValue, setsecondValue] = useState()
    const [firstRateValue, setfirstRateValue] = useState("amd")
    const [secondRateValue, setsecondRateValue] = useState("usd")
    const [db, setDb] = useState()
    useEffect(() => {
        request(firstValue, firstRateValue, secondRateValue, setsecondValue,true)
    }, [firstRateValue, secondRateValue])



    const firstInputHandler = (e, firstRat, secondRat) => {
        setfirstValue(e)
        request(e, firstRat, secondRat, setsecondValue)

    }
    const secondInputHandler = (val, firstRate, secondRate) => {
        setsecondValue(val)
        request(val, firstRate, secondRate, setfirstValue)
    }

    return (

        <Box
            sx={Styles.box}
            className={"formRoot"}>
            <FormControl sx={Styles.formControl}>
                <Typography level="h3" noWrap sx={{
                    'textShadow': '0 0 2px #fffff0',
                    'color': '#fffff0cf',
                    'fontWeight': '300',
                    'textAlign': 'center'
                }}
                >
                    Currency converter
                </Typography>

                <Input type='number'
                    onChange={e => {  
                        firstInputHandler(e.target.value, firstRateValue, secondRateValue) 
                    }} value={firstValue}
                    placeholder='From'
                    sx={Styles.inputStyles}
                    endDecorator={
                        <React.Fragment>
                            <MySelect id="firstRate" value="amd" onChange={setfirstRateValue} />
                        </React.Fragment>
                    }
                />


                <Input type='number'
                    placeholder='To'
                    onChange={e => { 
                        secondInputHandler(e.target.value, secondRateValue, firstRateValue) 
                    }} value={secondValue}
                    sx={Styles.inputStyles}
                    endDecorator={
                        <React.Fragment>
                            <MySelect id="secondRate" value="usd" onChange={setsecondRateValue} />
                        </React.Fragment>
                    }
                />
                <Typography level="h4" noWrap sx={Styles.typography}
                >
                    1{db ? " " + firstRateValue.toUpperCase() + " = " + db[secondRateValue] + " " + secondRateValue.toUpperCase() : " "}

                </Typography>
                <Typography level="h5" noWrap sx={Styles.typography}
                >
                    1{db ? " " + secondRateValue.toUpperCase() + " = " + (1 / db[secondRateValue]).toFixed(5) + " " + firstRateValue.toUpperCase() : " "}

                </Typography>
            </FormControl>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={firstValue < 0 || secondValue < 0}
                level="body-xs"
                sx={Styles.snackbar}>
                Please enter an amount greater than 0
            </Snackbar>
        </Box >

    );
}

export default MyForm;