var React = require('react');
var EmployeeList = require('EmployeeList');
var EmployeeSearch = require('EmployeeSearch');

var EditProfile = React.createClass({
    getInitialState: function () {
    return {
        showId1: false,
        searchText: '',
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
          email: 'andrew.johnson@gmail.com',
          location: 'London'
        }, {
          id: 3,
          name: 'Toni',
          last: 'Rameh',
          email: 'toni.rameh@gmail.com',
          location: 'jbeil'
        },{
          id: 4,
          name: 'Jean',
          last: 'Fares',
          email: 'jean.fares@gmail.com',
          location: 'Beirut'
        }, {
          id: 5,
          name: 'Jessica',
          last: 'Frenn',
          email: 'jessica.frenn@gmail.com',
          location: 'New York City'
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
    handleSearch: function(showId1, searchText) {
        this.setState ({
            showId1: showId1,
            searchText: searchText.toLowerCase()
        });
    },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <h3 className="AddEmployeeTitle">Edit Employee Profile</h3>
                <EmployeeSearch onSearch = {this.handleSearch} />
                <div className="columns medium-10 large-10 small-centered">
                    <EmployeeList employees={employees}/>
                </div>
            
            </div>
        );
    }
});

module.exports = EditProfile;