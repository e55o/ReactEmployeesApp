var React = require('react');
var EmployeeList = require('EmployeeList');

var AddEmployee = React.createClass({
    getInitialState: function () {
    return {
      employees: [
        {
          id: 1,
          name: 'Marc',
          last: 'Esso'
        }, {
          id: 2,
          name: 'Andrew',
          last:'Johnson'
        }, {
          id: 3,
          name: 'Toni',
          last: 'Rameh'
        },{
          id: 4,
          name: 'Jean',
          last: 'Fares'
        }, {
          id: 5,
          name: 'Jessica',
          last: 'Frenn'
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
                <div className="row">
                  <div className="small-12 small-centered columns">
                    <EmployeeList employees={employees}/>
                  </div>
                </div>
                
            
            </div>
        );
    }
});

module.exports = AddEmployee;