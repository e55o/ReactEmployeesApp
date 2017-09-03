var React = require('react');

var Employee = React.createClass({
    render: function(){
        var {id, name, last, position, email, location, deleted} = this.props;
        return (
            <div>
                <div>
                    <h6>{name} {last}</h6> <h6>Position: {position}</h6>({email}), Location: {location} <h6></h6>
                </div>
                <div className="stacked-for-small button-group">
                    <a className="success button">Edit</a>
                    <div onClick= {()=> {
                        this.props.onToggle(id);    
                    }}>
                        <a className="alert button" onClick={deleted}>Delete</a>
                    </div>
                    
                </div>
            </div>
        )
    }
});

module.exports = Employee;