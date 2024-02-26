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
  },
  
  }

  export default Styles