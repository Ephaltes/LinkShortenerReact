import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'



const RedirectSluge = () => {

    const sluge = useParams().sluge;

    useEffect(() => {
        axios.get('https://api.ephaltes.de/api/Link/'+sluge)
            .then(res => {
                window.location.assign(res.data.data)
            },() => {
                window.location.assign("/");
            });

    }, [sluge]);

    return<>
    </>
}

export default RedirectSluge;