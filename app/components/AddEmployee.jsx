var React = require('react');
var EmployeeList = require('EmployeeList');

var AddEmployee = React.createClass({
    getInitialState: function () {
    return {
      employees: [
        {
          id: 1,
          name: 'Marc'
        }, {
          id: 2,
          name: 'Andrew'
        }, {
          id: 3,
          name: 'Toni'
        }
      ]
    };
  },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <h3 className="AddEmployeeTitle">Add New Employee</h3>
                <form onSubmit = {this.onFormSubmit}>
                    <input type="text" ref="firstName" placeholder="First Name"/>
                    <input type="text" ref="lastName" placeholder="Last Name"/>
                    <input type="text" ref="email" placeholder="Email"/>
                    <input type="text" ref="location" placeholder="Location"/>
                    <button className="button expanded">Add Employee</button>
                </form>
                <EmployeeList employees={employees}/>
            
            </div>
        );
    }
});

module.exports = AddEmployee;