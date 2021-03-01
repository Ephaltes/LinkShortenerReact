import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Form,Col,Row , InputGroup } from 'react-bootstrap'
import React, {useState} from 'react'
import axios from 'axios'
import AlertMessage from "./AlertMessage";


const ShortenUrlForm = () =>
{
    const[link,setLink] = useState("");
    const[sluge,setSluge] = useState("");
    const[messageVariant,setMessageVariant] = useState("");
    const[responseMessage,setResponseMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let custom = false;

        if(sluge || sluge.length > 0)
            custom=true;

        axios.post('http://localhost:5080/api/Link',{
            link:link,
            sluge:sluge,
            customsluge:custom
        })
            .then((response) => {
               setMessageVariant("success");
               setResponseMessage(window.location.href+response.data.data);

            }, (error) => {
                let data = error.response.data;
                setMessageVariant("danger");
                setResponseMessage(data.errorMessage);
            });
    }

    const Sluge = () =>
    {
        return(
            <Form.Group as={Row} controlId="FormSlugeLink">
                <Col>
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>{window.location.href}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control value={sluge} onChange={(e) => setSluge(e.target.value)} placeholder="my_unique_sluge" />
                    </InputGroup>
                </Col>
            </Form.Group>
        );
    }

    return <>
        <Form onSubmit={handleSubmit} className='mt-3'>
            <Form.Group as={Row} controlId="FormLinkId">
                <Col sm="12">
                    <Form.Control type='text' placeholder='paste URL here' onChange={(e)=>setLink(e.target.value)} value={link} required />
                </Col>
            </Form.Group>

            {Sluge()}

            <Form.Group as={Row} controlId='SubmitId'>
                <Col>
                    <Button type='submit' className='float-right'>Shorten!</Button>
                </Col>
            </Form.Group>

        </Form>

        {messageVariant && <AlertMessage variant={messageVariant} message={responseMessage} /> }
    </>
}

export default ShortenUrlForm;