function createEmployee(id, name, birthYear, salary, city, country) {
    return {id, name, birthYear, salary, address: {city, country}}
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Gorgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
];
function getEmployee(employees, id) {
   const employee=employees.find(function(empl){
    return empl.id===id;
   })
   return employee;
   
    //returns reference to an Employee object with a given id value
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    const arr=employees.filter(function(empl){
        if(empl.salary>=salaryFrom && empl.salary<=salaryTo){
            return empl;
        }
    })
    return arr;
    //returns array of Employee objects that have salary in [salaryFrom, salaryTo]
}
function getEmployeesByCity(employees, city) {
    const arr=employees.filter(function(empl){
       return empl.address.city===city;
    })
    return arr;
    
    //returns array of Employee objects from a given city
}
function getEmployeeNames(employees) {
    const res=employees.map(function(empl){
        return empl.name;
        
    })
    return res;
    //returns array of all Employee names
}
function sortEmployeesByAge(employees) {
    const res=employees.sort(function(empl1,empl2){
        return empl2.birthYear-empl1.birthYear;

    })
    return res;
    //returns array of Employee objects sorted by age in ascending order
}
function computeSalaryBudget(employees) {
    const sum=employees.map(function(empl){
        return empl.salary;
    })
    budjetSum=sum.reduce(function(res,e1){
        res=res+e1;
        return res;
    })
    return budjetSum;


    //computes and returns total salary for all Employee objects
}
console.log(`getEmployee function:`)
console.log(`employee with "123" id is: `)
console.log(getEmployee(employees,123));
console.log("***********************************************************");
console.log(`getEmployeesBySalary:`)
console.log(`employee with salary is: `)
const ar=(getEmployeesBySalary(employees, 20000, 25000));
console.log("***********************************************************");
console.log(`getEmployeesByCity function:`)
console.log(`employee with "London" city is: `)
console.log(getEmployeesByCity(employees, "London"));
console.log("***********************************************************");
console.log(`getEmployeeNames function:`)
console.log(`All employees names `)
console.log(getEmployeeNames(employees));
console.log("***********************************************************");
console.log(`sortEmployeesByAge function:`)
console.log(`All employees sorted by age `)
console.log(sortEmployeesByAge(employees));
console.log("***********************************************************");
console.log(`computeSalaryBudget function:`)
console.log(`Salary Budjet is: `)
console.log(computeSalaryBudget(employees));
console.log("***********************************************************");








