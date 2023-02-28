import React from 'react'
import "../App.css"
function Alert(props) {
    if(props.alert)
    {return (
        <div className='alert'>{props.alertMess}</div>
    )}else{
        <></>
    }
    
}

export default Alert