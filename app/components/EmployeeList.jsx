var React = require('react');
var Employee = require('Employee');

var EmployeeList = React.createClass({
    render: function(){
        var {employees} = this.props;
        var renderEmployees = () => {
            return employees.map((employee) => {
                return (
                    <Employee key={employee.id} {...employee}/>
                );
            });
        }; //Custom Renderer

        return (
            <div>
                {renderEmployees()}
            </div>
        )
    }
});

module.exports = EmployeeList;