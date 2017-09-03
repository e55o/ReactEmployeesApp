var $ = require('jquery');

module.exports = {
  setEmployees: function (employees) {
    if ($.isArray(employees)) {
      localStorage.setItem('employees', JSON.stringify(employees));
      return employees;
    }
  },
  getEmployees: function () {
    var stringEmployees = localStorage.getItem('employees');
    var employees = [];

    try {
      employees = JSON.parse(stringEmployees);
    } catch (e) {

    }

    return $.isArray(employees) ? employees : [];
  },
  filterEmployees: function (employees, showId1, searchText) {
      var filteredEmployees = employees;

      filteredEmployees = filteredEmployees.filter((employee) => {
        return !employee.deleted || showId1;
      });

      filteredEmployees.sort((a,b) => {
         if (!a.deleted && !b.deleted){
             return -1;
         } else if (a.deleted && !b.deleted) {
             return 1;
         } else {
             return 0;
         }
      });

      filteredEmployees = filteredEmployees.filter((employee) => {
        var text = employee.name.toLowerCase();
        return searchText.length === 0 || text.indexOf(searchText) > -1;
      });

      return filteredEmployees;
  }
};