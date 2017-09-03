var React = require('react');
var AddEmployee = require ('AddEmployee');
var EditProfile = require('EditProfile');
var uuid = require('node-uuid');

var EmployeeList = require('EmployeeList');
var EmployeeSearch = require('EmployeeSearch');

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
          position: 'Developer'
        }, {
          id: uuid(),
          name: 'Jad',
          last: 'Joubran',
          email: 'jad.joubran@gmail.com',
          location: 'New York City',
          position: 'Delivery Manager'
        }, {
          id: uuid(),
          name: 'Samira',
          last:'Abou Farah',
          email: 'samira.aboufarah@gmail.com',
          location: 'Beirut',
          position: 'Head Manager'
        }, {
          id: uuid(),
          name: 'Walid',
          last: 'Fares',
          email:'walid.fares@gmail.com',
          location: 'Beirut',
          position: 'Financial Consultant'
        }
      ]
    };
  },
  handleAddEmployee: function(name, last, email, location){
    this.setState({
        employees: [
            ...this.state.employees,
            {
              id: uuid(),
              name: name, 
            }
        ]
    })
  },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <EmployeeList employees={employees}/>
                <AddEmployee onAddEmployee={this.handleAddEmployee}/>
            </div>
        );
    }
});

module.exports = EmployeeApp;