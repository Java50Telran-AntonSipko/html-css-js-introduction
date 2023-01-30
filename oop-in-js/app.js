//HW 21
function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}

let empl = createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel");
let empl2=createEmployee(124, "David", 1975, 15500, "Tel Aviv", "Israel");
let empl3=createEmployee(125, "Sara", 1985, 20000, "New York", "USA");


class Company {
    #employees //object key: <id value>, value: reference to Employee object
    constructor() {
        this.#employees = {};
    }
    addEmployee(empl) {
        let addingOrExists;
        if (this.#employees[empl.id] != undefined) {
            addingOrExists = false;
        }
        else {
            this.#employees[empl.id] = empl;
            addingOrExists = true;


        }
        return addingOrExists;
        //adds empl into #employees object
        //returns true if added new employee object
        //returns false if employee with a given id value already exists
    }
    removeEmployee(id) {
        let deletingOrNotExisted;
        if (this.#employees[id] != undefined) {
            delete this.#employees[id]
            deletingOrNotExisted = true;
        }
        else {
            deletingOrNotExisted = false;

        }
        return deletingOrNotExisted;
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
    }
    getEmployeesCountry(country) {
        const arrEmplByCountries = [];
        const arrayOfEmpl = Object.entries(this.#employees);
        arrayOfEmpl.forEach(empl => {
            let emplCountry = empl[1].address.country;
            if (emplCountry == country) {
                arrEmplByCountries.push(empl[1])
            }

        })
        return arrEmplByCountries;


        //returns array of employee objects having field "country" equaled to a given country

    }

    getEmployeesByAge(age) {
        const todayYear = 2023;
        const arrEmplByAges = [];
        const arrayOfEmpl = Object.entries(this.#employees);
        arrayOfEmpl.forEach(empl => {
            let birthYearNum = parseInt(empl[1].birthYear);
            if ((todayYear - birthYearNum) == age) {
                arrEmplByAges.push(empl[1]);
            }

        })
        return arrEmplByAges;
        //returns array of employee objects with a given age
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        const arrEmplBySalary = [];
        const arrayOfEmpl = Object.entries(this.#employees);
        arrayOfEmpl.forEach(empl => {
            let salary = empl[1].salary;
            if (salaryTo > 0) {
                if (salary >= salaryFrom && salary <= salaryTo) {
                    arrEmplBySalary.push(empl[1])
                }
            } else if (salary >= salaryFrom) {
                arrEmplBySalary.push(empl[1])
            }else if(salaryTo<=0 &&salaryFrom<=0){
                arrEmplBySalary.push(empl[1])

            }
        


        })
        return arrEmplBySalary;
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
    }
}
let company = new Company;
console.log(company);
console.log(company.addEmployee(empl));//true and adding
console.log(company.addEmployee(empl))// false,not adding
company.addEmployee(empl2)//addind without output
company.addEmployee(empl3)//addind without output
console.log(company.removeEmployee(125));//removing empl3 with true
console.log(company.getEmployeesCountry("Israel"))//array with 2 persons
console.log(company.getEmployeesByAge(23))//return 1 person with id 123
console.log(company.getEmployeesBySalaries(10000,20000))//returns array with two objects












