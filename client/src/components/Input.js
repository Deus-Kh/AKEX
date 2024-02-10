import Input from '@mui/joy/Input';
import React, { useState } from 'react';

function MyInput() {

    const [value, setValue] = useState(0)

    const valueChangeHandler= (e)=>{
        setValue(e.target.value)
    }

    return ( <Input  
         type='number'
         value={value}
         onChange={(e)=>{valueChangeHandler(e)}}
        /> );
}

export default MyInput;