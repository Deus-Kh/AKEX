const Styles = {
    select:{
        width:91,
        backgroundColor:'transparent',
        color:'#fffff080',
        fontWeight:'100 !important',
        textShadow: '0 0 3px #fffff06f',
        '--Select-radius':0,
        '&:hover': {
            transition:'all 0.3s',
            backgroundColor: 'transparent !important',
            color:'#fffff0',
          }
    },
    listbox:{
        'background': 'rgba(255, 255, 240, 0.05)',
        'border-radius': '10px ',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'backdrop-filter':' blur(5.5px)',
        '-webkit-backdrop-filter': 'blur(5.5px)',
        'border': '1px solid rgba(255, 255, 255, 0.4)'
    },
    option:{
        'backgroundColor':'#fffff011',
        'color':'#fffff0a1',
        '&:hover': {
            transition:'all 0.3s',
            backgroundColor: 'transparent !important',
            'color':'#fffff0 !important',
          },

    }
}
export default Styles