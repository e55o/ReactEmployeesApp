var React = require('react');
var ReactDOM= require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// it simply means "var Route = require('react-route').Route;", syntax reduced only
var Main = require('Main');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyle')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}> 
            
        </Route>
    </Router>,
    document.getElementById('app')
);
