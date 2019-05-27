import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './Form/login_form_container';
import SignupFormContainer from './Form/signup_form_container';
import SearchContainer from './benches/search_container';
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/rout_util';


const App = () => (
    <div>
        <h1>Bench BnB</h1>
        <GreetingContainer />
    

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path='/' component={SearchContainer} /> 
    </div>
);

export default App;
