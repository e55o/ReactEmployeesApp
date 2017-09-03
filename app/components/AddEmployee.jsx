var React = require('react');

var AddEmployee = React.createClass({
    
  onFormSubmit: function(e){
    e.preventDefault();
    var name = this.refs.firstName.value;
    var last = this.refs.lastName.value;
    var email = this.refs.email.value;
    var location = this.refs.location.value;

    if(name.length>0 && last.length>0 && email.length>0){
      this.refs.firstName.value = '';
      this.refs.lastName.value = '';
      this.refs.email.value= '';
      this.refs.location.value = '';
      

      this.props.onAddEmployee(name, last, email, location);
      
    } else {
        this.refs.name.focus();
    }
  },
    render: function(){

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

                    <div className="position-field">
                      <label>Position <small>*</small>
                          <input type="text" ref="location" placeholder="Position" pattern="[a-zA-Z]+ required"/>
                      </label>
                    </div>
                    
                    <button className="button expanded">Add Employee</button>
                </form>
              
            </div>
        );
    }
});

module.exports = AddEmployee;