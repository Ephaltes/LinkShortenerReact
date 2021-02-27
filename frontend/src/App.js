import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import React from 'react'
import ShortenUrlForm from "./ShortenUrlForm";
import {BrowserRouter as Router, Route , Switch , Redirect} from 'react-router-dom'
import RedirectSluge from "./RedirectSluge";


function App() {


  return <>
      <h1 className='text-center mt-5 text-light'>Url Shortener</h1>
      <Router>
          <Switch>

              <Route exact path='/:sluge' children={<RedirectSluge/>} >
                  <RedirectSluge/>
              </Route>

              <Route exact path='/'>
                  <Container>
                      <ShortenUrlForm />
                  </Container>
              </Route>

              <Route path='*'>
                  <Redirect to='/'/>
              </Route>

          </Switch>
      </Router>
  </>
}




export default App;
