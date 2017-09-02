var React = require('react');
var AddEmployee = require ('AddEmployee');

var EmployeeApp = React.createClass({
    getInitialState: function () {
    return {
      
    };
  },
  handleAddEmployee: function(name, last, email, location){
    alert ("New Employee Added: " + name + last + email + location);
  },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <AddEmployee onAddEmployee={this.handleAddEmployee}/>
            </div>
        );
    }
});

module.exports = EmployeeApp;