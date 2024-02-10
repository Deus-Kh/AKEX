import React, { useState, useEffect } from 'react';
import { FormControl } from "@mui/material";
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';

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
    const msg = {
      to:"deus.kh05@gmail.com",
      from:formData.email,
      subject: 'Message from '+ formData.username,
      text:formData.message
    }

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
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
  };

    return (
      <FormControl as="form" onSubmit={handleSubmit}>
        <Input 
        placeholder="Name..." 
        required={true} 
        type="text" 
        name="username"
        onChange={handleInputChange}
        value={formData.username}
        />

        <Input 
        placeholder="Email..." 
        required={true} 
        type="email" 
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        />

        <Textarea 
        minRows={2} 
        required={true} 
        placeholder="Message..."
        name="message"
        value={formData.message}
         onChange={handleInputChange}
         />

        <Button type="submit">Submit</Button>
      </FormControl>
    )
  };
  
  export default Contact;