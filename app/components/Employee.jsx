var React = require('react');

var Employee = React.createClass({
    render: function(){
        var {id, name, last, position, email, location, deleted} = this.props;
        return (
            <div className="container__header row">
                <div className="large-10 columns">
                    <h5><strong>{name} {last}</strong></h5> <h6><strong>Position:</strong> {position}</h6> <strong>Email:</strong> {email}, <p><strong>Location:</strong> {location}</p> <h6></h6>
                </div>
                <div className="large-2 columns">
                <div className="stacked-for-small button-group">
                    <div onClick= {()=> {
                        this.props.onToggle(id);    
                    }}>
                        <a className="alert button" onClick={deleted}>Delete</a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
});

module.exports = Employee;