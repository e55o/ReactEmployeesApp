var React = require('react');
var Employee = require('Employee');
var Pagination = require('Pagination');

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
                {/* <Pagination
                    activePage={activePage}
                    itemsCountPerPage={2}
                    totalItemsCount={50}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange} /> */}
                
            </div>
        )
    }
});

module.exports = EmployeeList;