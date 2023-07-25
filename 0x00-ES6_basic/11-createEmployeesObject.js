/* eslint-disable no-unused-vars */
export default function createEmployeesObject(departmentName, employees) {
  const staff = {};
  for (const employee in employees) {
    if (true) {
      staff[`${departmentName}`] = employees;
    }
  }
  return staff;
}
