import {Box, Stack, Typography, IconButton} from '@mui/joy'
import {Facebook, Instagram, Language} from '@mui/icons-material'
import Styles from '../styles/About.module'
// import React, { Link } from 'react-';
import {  Link } from "react-router-dom";




const About = () => {
    return (
      <Box
      className='formRoot'
      sx={Styles.rootBox}
      >
        <Box
        className='contactRoot'
        sx={Styles.box}
        >
          <Typography level="h3" noWrap sx={{
                'textShadow': '0 0 2px #fffff06f',
                'color':'#fffff0cf',
                'fontWeight':'300',
                'textAlign':'center',
                'marginBottom':'1rem'
            }}
            >
                About us
            </Typography>
            <Typography 
            level='body-lg'
            sx={{
              'textShadow': '0 0 2px #fffff06f',
              'color':'#fffff0cf',
              'fontWeight':'300',
              'WebkitTextStroke':'.1px #fffff0',
              'padding':'.5rem',
          }}>
              Hello! {<br/>}
              My name is Artak. This project is a website for calculating exchange rates, which is my coursework. It's developed on React + Express stack. In addition, the project provides a free API with which you can get currency rates that are updated every day. To find out how to use the API, you need to write a request to <Link to="/contact" >Contact</Link>

            </Typography>
            
            <Stack direction={'row'} spacing={2}>
              <IconButton 
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={Styles.iconButtonStyles}
                >
                  <Facebook  />
              </IconButton>

              <IconButton
                component="a"
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagran"
                sx={Styles.iconButtonStyles}
                >
                  <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://linktr.ee/deus_kh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link"
                sx={Styles.iconButtonStyles}
                >
                  <Language/>
              </IconButton>
            </Stack>
      </Box>
      </Box>
    );
  };
  
  export default About;