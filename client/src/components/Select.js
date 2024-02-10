
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
        // defaultValue={props.value} 
        value={Value} 
        sx={{width:91}} 
        onChange={e=>{changeHandler(e)}}
        >
        {list.map((item, index) => (
            
                <Option key={index} value={item} label={item}>{item}</Option>
                
            
        ))}
    </Select>)
}

export default MySelect;