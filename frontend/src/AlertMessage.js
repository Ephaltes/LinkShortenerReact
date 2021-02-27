import 'bootstrap/dist/css/bootstrap.min.css'
import {Alert} from 'react-bootstrap'
import React from 'react'


const AlertMessage = ({variant,message}) =>
{

    if(variant !=="danger")
        var link=message;

    return <>
        <Alert variant={variant}>
            <a href={link}>{message} </a>
        </Alert>
    </>
}

export default AlertMessage;