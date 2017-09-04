var React = require('react');
var Employee = require('Employee');

var EmployeeList = React.createClass({

    getInitialState: function() {
        return {
            activePage: 15
        }
    },
    
    handlePageChange: function (pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    },

    render: function(){
        var {employees} = this.props;
        var {activePage} = this.props;
        var renderEmployees = () => {
            if(employees.length ===0){
                return (
                    <p className="container__message"> No Employees Found </p>
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