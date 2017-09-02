var React = require('react');
var EmployeeList = require('EmployeeList');

var EditProfile = React.createClass({
    getInitialState: function () {
    return {
      employees: [
        {
          id: 1,
          name: 'Marc',
          last: 'Esso',
          email: 'marc.esso01@gmail.com',
          location: 'Beirut'
        }, {
          id: 2,
          name: 'Andrew',
          last: 'Johnson',
          email: 'marc.esso01@gmail.com',
          location: 'Beirut'
        }, {
          id: 3,
          name: 'Toni',
          last: 'Rameh',
          email: 'marc.esso01@gmail.com',
          location: 'Beirut'
        },{
          id: 4,
          name: 'Jean',
          last: 'Fares',
          email: 'marc.esso01@gmail.com',
          location: 'Beirut'
        }, {
          id: 5,
          name: 'Jessica',
          last: 'Frenn',
          email: 'marc.esso01@gmail.com',
          location: 'Beirut'
        }
      ]
    };
  },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <h3 className="AddEmployeeTitle">Edit Employee Profile</h3>
                <EmployeeList employees={employees}/>
            
            </div>
        );
    }
});

module.exports = EditProfile;