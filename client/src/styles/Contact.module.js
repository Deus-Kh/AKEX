const Styles ={
    box:{
      'z-index':'999',
      'maxWidth':'50vw',
      'height':'100vh',
      'display':'flex',
      'justifyContent':'center',
      'alignItems':'center'
    },
    formControl:{
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
    },
   typography:{
    'textShadow': '0 0 2px #fffff06f',
    'color':'#fffff0cf',
    'fontWeight':'300',
    'textAlign':'center',
    'marginBottom':'1.5rem'
    },
    button:{
      'backgroundColor':'#fffff011',
      'transition':'all .2s',
      'color':'#fffff0 ',
      'fontWeight':'400',
      '&:hover':{
        'backgroundColor':'transparent',
        'color':'fffff0a1 !important',
        'boxShadow': '0 0 7px 0px #fffff0, inset 0 0 3px 0px #fffff0',
        
      }
    },
    inputStyles:{
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
  }

  export default Styles