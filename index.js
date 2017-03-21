import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, Redirect, browserHistory} from 'react-router';
import App from './components/App';
import './components/indexStyle.css'


const router = (
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={App}/>

        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById('app'));
