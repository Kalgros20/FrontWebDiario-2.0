import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './views/login/Login';
import Home from './views/home/Home';
import Teste from './views/teste/Teste';
import Semester from './views/register/Semester';
import Occurrence from './views/register/Ocurrence';

class Routes extends Component {

    render() {

        return (
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/teste" component={Teste} />
                <Route path="/register/semester" component={Semester}/>
                <Route path="/register/occurrence" component={Occurrence}/>
                <Route path="/teste" component={Teste} />
            </Switch>
        );

    }

}

export default Routes;
