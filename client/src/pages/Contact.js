import React, { useState } from 'react';
import { FormControl } from "@mui/material";
import {Box,Button,Textarea, Input, Typography} from '@mui/joy'
import '../App.css'
import Styles from '../styles/Contact.module'

const serverUrl = process.env.REACT_APP_SERVER;

const Contact = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
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


    await fetch(serverUrl + '/send-email', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'to':'deus.kh05@gmail.com',
        'subject': 'Message from ' + formData.username,
        'text': "from:" + formData.username + "\n" + formData.message
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
        console.log('Email sent successfully');
        setFormData({
          username: '',
          email: '',
          message: ''
        })
      })
      .catch(error => {
        console.error('Error sending email:', error);
      });

  };

  return (
    <Box
      className='formRoot'
      sx={Styles.box}
    >
      <FormControl as="form" onSubmit={handleSubmit}
        className='contactRoot'
        sx={Styles.formControl}
      >
        <Typography level="h3" noWrap sx={Styles.typography}>
          Contact with us
        </Typography>
        <Input
          placeholder="Name..."
          required={true}
          type="text"
          name="username"
          onChange={handleInputChange}
          value={formData.username}
          sx={Styles.inputStyles}
        />

        <Input
          placeholder="Email..."
          required={true}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          sx={Styles.inputStyles}
        />

        <Textarea
          minRows={2}
          required={true}
          placeholder="Message..."
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          sx={{...Styles.inputStyles,  'minRows': '5'} }
        />

        <Button type="submit" sx={Styles.button}>Submit</Button>
      </FormControl>
    </Box>
  )
};

export default Contact;