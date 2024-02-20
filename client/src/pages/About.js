import {Box, Stack, Typography, IconButton } from '@mui/joy'
import {Facebook, Instagram, Language} from '@mui/icons-material'


const Styles ={
  rootBox:{
    'z-index':'999',
    'maxWidth':'50vw',
    'height':'100vh',
    'display':'flex',
    'justifyContent':'center',
    'alignItems':'center'
   },
   box:{
    'width':'70%',
    'gap':'1.2rem',
    'padding':'1.5rem 1rem',
    "minHeight":'30%',
    'background': 'rgba(255, 255, 240, 0.05)',
    'border-radius': '10px ',
    'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
    'backdrop-filter':' blur(5.5px)',
    '-webkit-backdrop-filter': 'blur(5.5px)',
    'border': '1px solid rgba(255, 255, 255, 0.4)'
 },
 iconButtonStyles:{
  '&:nth-child(n)':{
    color:'#fffff0cf ',
  },
  '&:hover':{
    background:'#fffff0cf !important',
    '&:nth-child(n)':{
      color:'#00000fcf ',
    }
  }
}
}

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
          }}
            >
              Hello! {<br/>}
              My name is Artak. This project is a website for calculating exchange rates, which is my coursework. It's developed on MERN stack.

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