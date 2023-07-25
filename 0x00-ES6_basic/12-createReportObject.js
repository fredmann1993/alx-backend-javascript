export default function createReportObject(employeesList) {
  const showEmployees = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
  return showEmployees;
}
