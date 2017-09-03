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
      return filteredEmployees;
  }
};