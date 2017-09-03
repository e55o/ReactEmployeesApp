var React = require('react');
var uuid = require('node-uuid');

var AddEmployee = require ('AddEmployee');
var EmployeeList = require('EmployeeList');
var EmployeeSearch = require('EmployeeSearch');
var EmployeeAPI = require ('EmployeeAPI');

var EmployeeApp = React.createClass({
    getInitialState: function () {
    return {
        showId1: false,
        searchText: '',
        employees: [
        {
          id: uuid(),
          name: 'Marc',
          last: 'Esso',
          email: 'marc.esso01@gmail.com',
          location: 'Beirut',
          position: 'Developer',
          deleted: 'false'
        }, {
          id: uuid(),
          name: 'Jad',
          last: 'Joubran',
          email: 'jad.joubran@gmail.com',
          location: 'New York City',
          position: 'Delivery Manager',
          deleted: 'true'
        }, {
          id: uuid(),
          name: 'Samira',
          last:'Abou Farah',
          email: 'samira.aboufarah@gmail.com',
          location: 'Beirut',
          position: 'Head Manager',
          deleted: 'false'
        }, {
          id: uuid(),
          name: 'Walid',
          last: 'Fares',
          email:'walid.fares@gmail.com',
          location: 'Beirut',
          position: 'Financial Consultant',
          deleted: 'false'
        }
      ]
    };
  },
  componentDidUpdate: function() {
    EmployeeAPI.setEmployees(this.state.employees);
  },
  handleAddEmployee: function(name, last, email, location, position){
    this.setState({
        employees: [
            ...this.state.employees,
            {
              id: uuid(),
              name: name, 
              last: last,
              email: email,
              location: location,
              position: position,
              deleted: false
            }
        ]
    })
  },
  handleToggle: function (id) {
    var deletedEmployees = this.state.employees.map((employee)=> {
        if (employee.id === id) {
            employee.deleted = !employee.deleted;
        }
        return employee;
    });
    
    this.setState({employees: deletedEmployees});
  },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <EmployeeSearch />
                <EmployeeList employees={employees} onToggle={this.handleToggle}/>
                <AddEmployee onAddEmployee={this.handleAddEmployee}/>
            </div>
        );
    }
});

module.exports = EmployeeApp;