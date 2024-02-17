
import React, { useState, useEffect } from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const url = process.env.REACT_APP_API_URL;



function MySelect(props) {
    const [list, setList] = useState([])
    const [Value, setValue] = useState(props.value)

    useEffect(() => {
        fetch(url + props.value)
            .then(res => res.json())
            .then(text => {
                const result = Object.keys(text.conversion_rates);
                setList(result)
            })
            
    }, [props.value])
    
    const changeHandler = (e)=>{
        setValue(e.target.textContent)
        props.onChange(e.target.textContent)
    }


    return ( 
    <Select 
        indicator={<KeyboardArrowDown />} 
        size="md" 
        id={props.id} 
        variant="plain"
        // defaultValue={props.value} 
        value={Value} 
        sx={{
            width:91,
            backgroundColor:'transparent',
            color:'#fffff080',
            fontWeight:'100 !important',
            textShadow: '0 0 3px #fffff06f',
            '--Select-radius':0,
            '&:hover': {
                transition:'all 0.3s',
                backgroundColor: 'transparent !important',
                color:'#fffff0',
              },
        }} 
        slotProps={{
            listbox:{
                sx:{
                    'background': 'rgba(255, 255, 240, 0.05)',
            'border-radius': '10px ',
            'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter':' blur(5.5px)',
            '-webkit-backdrop-filter': 'blur(5.5px)',
            'border': '1px solid rgba(255, 255, 255, 0.4)'
                }
            }
        }}
        
        onChange={e=>{changeHandler(e)}}
        >
        {list.map((item, index) => (
            
                <Option sx={{
                    'backgroundColor':'#fffff011',
                    'color':'#fffff0a1',
                    '&:hover': {
                        transition:'all 0.3s',
                        backgroundColor: 'transparent !important',
                        'color':'#fffff0 !important',
                      },

                }} 
                key={index} value={item} label={item}>{item}</Option>
                
            
        ))}
    </Select>)
}

export default MySelect;