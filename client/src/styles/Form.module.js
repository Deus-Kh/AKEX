const Styles = {
    snackbar: {
        "alignSelf": 'flex-end',
        stroke: "red",
        'textShadow': '0 0 2px #fffff06f',
        'WebkitTextStroke': '1px #ff000031',
        'color': '#fffff0cf',
        'fontWeight': '300',
        'background': 'rgba(255, 255, 240, 0.05)',
        'border-radius': '10px ',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'backdrop-filter': ' blur(5.5px)',
        '-webkit-backdrop-filter': 'blur(5.5px)',
        'border': '1px solid rgba(255, 255, 255, 0.4)'
    },
    typography: {
        'textShadow': '0 0 2px #fffff06f',
        'color': '#fffff0cf',
        'fontWeight': '300',
        'padding': '0 0.5rem'
    },
    inputStyles: {
        'color': '#fffff0',
        'fontWeight': '100',
        "border": 'none ',
        'borderRadius': 0,
        'borderBottom': '1px solid #fffff011',
        'backgroundColor': 'transparent',
        '--Input-paddingInline': ' 0.75rem 0',
        '&::before': {
            borderBottom: '1.5px solid #fffff08f',
            transform: 'scaleX(0)',
            bottom: 0,
            top: 'unset',
            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
            borderRadius: 0,
            boxShadow: '0 0 5px 0px #fffff0'
        },
        '&:focus-within::before': {
            transform: 'scaleX(1)',
        }
    },
    formControl: {
        'gap': '.5rem',
        'padding': '1.5rem 1rem',
        "height": '30%',
        'background': 'rgba(255, 255, 240, 0.05)',
        'border-radius': '10px ',
        'box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'backdrop-filter': ' blur(5.5px)',
        '-webkit-backdrop-filter': 'blur(5.5px)',
        'border': '1px solid rgba(255, 255, 255, 0.4)'
    },
    box:{
        'z-index': '999',
        'maxWidth': '50vw',
        'height': '100vh',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',

    }
}

export default Styles