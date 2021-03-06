var React = require ('react');

var EmployeeSearch = React.createClass({
    handleSearch: function(){

        var showId1 = this.refs.showId1.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showId1, searchText);
    },

    render: function () {
        return (
            <div className="container__header">
                <div>
                <input type="search" ref="searchText" placeholder="Search Employee" onChange={this.handleSearch}/>
                </div>
                <div>
                <label>
                    <input type="checkbox" ref="showId1" onChange={this.handleSearch}/>
                    <small>Show Resigned Employees</small>
                </label>
                </div>
            </div>
        );
    }
});

module.exports = EmployeeSearch; 