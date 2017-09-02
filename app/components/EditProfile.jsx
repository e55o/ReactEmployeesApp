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
        }, {
          id: 6,
          name: 'Samira',
          last: 'Abou Farah',
          email: 'samira.aboufarah@gmail.com',
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
                <div className="columns medium-8 large-8 small-centered">
                    <EmployeeList employees={employees}/>
                </div>
            
            </div>
        );
    }
});

module.exports = EditProfile;