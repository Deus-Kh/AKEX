import React, { useState} from 'react';
import { FormControl } from "@mui/material";
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import '../App.css'


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
    'right':'2.5px',
    'left':'2.5px',
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


const Contact = () => {

 
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    message:''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    

    await fetch('http://localhost:5005/send-email', {
      method: 'POST',
      headers: {
        Accept:"application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to:"deus.kh05@gmail.com",
        subject: 'Message from '+ formData.username,
        text: "from:"+ formData.username +"\n"+ formData.message
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      console.log('Email sent successfully');
      setFormData({
        username:'',
        email:'',
        message:''
      })
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });

  };

    return (
      <Box
      className='formRoot'
      sx={{
        'z-index':'999',
        'maxWidth':'50vw',
        'height':'100vh',
        'display':'flex',
        'justifyContent':'center',
        'alignItems':'center'
       }}
      >
        <FormControl as="form" onSubmit={handleSubmit}
        className='contactRoot'
        sx={{
          'min-width':'50%',
          'gap':'1.2rem',
          'padding':'1.5rem 1rem',
          "minHeight":'30%',
          'background': 'rgba(255, 255, 240, 0.05)',
          'border-radius': '10px ',
          'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
          'backdrop-filter':' blur(5.5px)',
          '-webkit-backdrop-filter': 'blur(5.5px)',
          'border': '1px solid rgba(255, 255, 255, 0.4)'
       }}
        >
          <Typography level="h3" noWrap sx={{
                'textShadow': '0 0 2px #fffff06f',
                'color':'#fffff0cf',
                'fontWeight':'300',
                'textAlign':'center',
                'marginBottom':'1.5rem'
            }}
            >
                Contact with us
            </Typography>
        <Input 
        placeholder="Name..." 
        required={true} 
        type="text" 
        name="username"
        onChange={handleInputChange}
        value={formData.username}
        sx={inputStyles}
        />

        <Input 
        placeholder="Email..." 
        required={true} 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        sx={inputStyles}
        />

        <Textarea 
        minRows={2} 
        required={true} 
        placeholder="Message..."
        name="message"
        value={formData.message}
         onChange={handleInputChange}
         sx={Object.assign(inputStyles, {'minRows':'5'})}
         />

        <Button type="submit" sx={{
          'backgroundColor':'#fffff011',
          'transition':'all .2s',
          'color':'#fffff0 ',
          'fontWeight':'400',
          '&:hover':{
            'backgroundColor':'transparent',
            // 'border': '1px solid rgba(255, 255, 255, 0.4)',
            'color':'fffff0a1 !important',
            'boxShadow': '0 0 7px 0px #fffff0, inset 0 0 3px 0px #fffff0',
            // 'boxShadow': 'inset 0 0 10px 0px #fffff0',
          }
        }}>Submit</Button>
      </FormControl>
      </Box>
    )
  };
  
  export default Contact;