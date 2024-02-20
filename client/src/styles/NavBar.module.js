const Styles = {
    box: { 
      "width": "37%",
      "display": 'flex', 
      "justify-content": 
      "space-between", 
      "position": 'fixed', 
      'margin': '0 2em' 
    },
    typography:{ 
      textShadow: '0 0 3.5px  #fffff0',
      fontFamily:"Anurati-Regular",
      textColor:"#fffff0cf",
      fontSize:"2.5rem",
    },
    list:{
      '--List-radius': '8px',
      '--List-padding': '4px',
      '--List-gap': '8px',
      '--ListItem-gap': '0px',
    },
    listItemButton:{
      '&:hover': {
        backgroundColor: 'transparent !important'
      },
    }
  }

  export default Styles