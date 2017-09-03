var React = require('react');
var Employee = require('Employee');

var EmployeeList = React.createClass({
    render: function(){
        var {employees} = this.props;
        var renderEmployees = () => {
            if(employees.length ===0){
                return (
                    <p className="container__message"> No Employees Added </p>
                );
            }
            return employees.map((employee) => {
                return (
                    <Employee key={employee.id} {...employee} onToggle={this.props.onToggle}/>
                );
            });
        }; //Custom Renderer

        return (
            <div>
                <h3 className="AddEmployeeTitle">Employees List</h3>
                {renderEmployees()}
            </div>
        )
    }
});

module.exports = EmployeeList;