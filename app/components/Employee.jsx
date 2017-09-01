var React = require('react');

var Employee = React.createClass({
    render: function(){
        var {id, name} = this.props;

        return (
            <div>
                {id}. {name}
            </div>
        )
    }
});

module.exports = Employee;