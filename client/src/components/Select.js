import React, { useState, useEffect } from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Styles from '../styles/Select.module'
const url = process.env.REACT_APP_API_URL;


function MySelect(props) {
    const [list, setList] = useState([])
    const [Value, setValue] = useState(props.value)


    useEffect(() => {
        fetch(url + "currencies")
            .then(res => res.json())
            .then(text => {
                setList(text)
                // const result =Object.keys(text)
                // console.log(result);
                // setList(result)
            })

    }, [props.value])

    function changeHandler(e) {
        setValue(e.target.textContent.toLowerCase())
        props.onChange(e.target.textContent.toLowerCase())

    }


    return (
        <Select
            indicator={<KeyboardArrowDown />}
            size="md"
            id={props.id}
            variant="plain"
            // defaultValue={props.value} 
            value={Value}
            sx={Styles.select}
            slotProps={{
                listbox: { sx: { ...Styles.listbox } }
            }}

            onChange={e => { changeHandler(e) }}
        >
            {list.map((item, index) => (

                <Option sx={Styles.option} key={index} value={item} label={item.toUpperCase()}>{item.toUpperCase()}</Option>


            ))}
        </Select>)
}

export default MySelect;