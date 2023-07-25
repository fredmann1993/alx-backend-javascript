export default function createEmployeesObject(departmentName, employees) {
   let staff = {}
    for(let employee in employees) {
     staff[`${departmentName}`] = employees

    }

     return staff
}

