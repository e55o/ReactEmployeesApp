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
        }, {
          id: 6,
          name: 'Samira',
          last: 'Abou Farah'
        }
      ]
    };
  },
    render: function(){
        var {employees} =this.state;

        return(
            <div>
                <h3 className="AddEmployeeTitle">Add New Employee</h3>
                <form onSubmit = {this.onFormSubmit} data-abide>

                    <div className="name-field">
                      <label>First Name <small>*</small>
                          <input type="text" ref="firstName" placeholder="First Name" required pattern="[a-zA-Z]+"/>
                        </label>
                    </div>

                    <div className="last-field">
                      <label>Last Name <small>*</small>
                          <input type="text" ref="lastName" placeholder="Last Name" required pattern="[a-zA-Z]+"/>
                      </label>
                    </div>

                    <div className="email-field">
                      <label>Email <small>*</small>
                        <input type="email" ref="email" placeholder="Email" required/>
                      </label>
                    </div>

                    <div className="location-field">
                      <label>Location
                          <input type="text" ref="location" placeholder="Location" pattern="[a-zA-Z]+"/>
                      </label>
                    </div>
                    
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