var React = require('react');

var About = React.createClass({
    render: function(){
        return(
            <div>
                <h3 className= "AddEmployeeTitle"> About the App</h3>
                <p>This applicaion is an Employee Directory App. It was done as a challenge, in order to familiarize myself with NodeJS, ReactJS, JSX Syntax, Webpack, SCSS and so many tools and frameworks.</p>
            </div>
        );
    }
});

module.exports = About;