var React = require('react');

var Employee = React.createClass({
    render: function(){
        var {id, name, last, position, email, location} = this.props;
        return (
            <div>
            <div>
                <h5>{name} {last}</h5> <h5>Position: {position}</h5>({email}), Location: {location} <h6></h6>
            </div>
            <div className="stacked-for-small button-group">
                <a className="success button">Edit</a>
                <a className="alert button">Delete</a>
            </div>
            </div>
        )
    }
});

module.exports = Employee;