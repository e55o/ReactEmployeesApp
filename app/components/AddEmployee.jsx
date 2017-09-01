var React = require('react');

var AddEmployee = React.createClass({
    render: function(){
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
            
            </div>
        );
    }
});

module.exports = AddEmployee;