var React = require('react');

var Employee = React.createClass({
    render: function(){
        var {id, name, last, email, location} = this.props;
        return (
            <div>
                <h5>{id}. {name} {last}</h5> <h6>{email}</h6> {location} <h6></h6>
            </div>
        )
    }
});

module.exports = Employee;