'use strict';

alert('welcome to our website')

const allEmployee = [];

function Employee(FullName, Department, Level,Salary) {
    this.FullName = FullName,
        // this.EmployeeID = X(),
        this.Department = Department,
        this.Level = Level,
        // this.MyImage = MyImage,
        this.Salary = 0,
        this.newSalary = function () {
        this.Salary = this.calSalary()

        }
}
// allEmployee.push(this) }




let GhaziSamer = new Employee("Ghazi Samer", "Administration", "Senior");
let LanaAli = new Employee("Lana Ali", "Finance", "Senior");
let TamaraAyoub = new Employee("Tamara Ayoub","Marketing", "Senior");
let SafiWalid = new Employee("Safi Walid",  "Administration", "Mid-Senio");
let OmarZaid = new Employee("Omar Zaid",  "Development", "Senior");
let RanaSaleh = new Employee("Rana Saleh",  "Development", "Junior");
let HadiAhmad = new Employee("Hadi Ahmad",  "Finance", "Senior");
console.log(allEmployee);

// prototype 
Employee.prototype.calSalary = function () {
    var min = 0;
    var max = 0;
    if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
    // let salary = Math.floor(Math.random() * (max - min) + min);
    // let NetSalary = salary -(0.075 *salary);
    // return NetSalary}
    else if (this.Level == 'Senior') { min = 1500; max = 2000 }
    // let salary = Math.floor(Math.random() * (max - min) + min);
    // let NetSalary = salary -(0.075 *salary);
    // return NetSalary }
    else {
        min = 500; max = 1000

        //min = Math.ceil(min);
        // max = Math.floor(max); 
    }

    let salary = Math.floor(Math.random() * (max - min) + min);
    let NetSalary = salary - (0.075 * salary);
    return NetSalary
}

Employee.prototype.EmployeeID = function () {
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}



GhaziSamer.newSalary()
LanaAli.newSalary()
TamaraAyoub.newSalary()
SafiWalid.newSalary()
OmarZaid.newSalary()
RanaSaleh.newSalary()
HadiAhmad.newSalary()



Employee.prototype.renderEmployee = function () {

    // let divE = document.createElement("div");
    // divE.classList.add("card");
    // let body = document.getElementsByTagName("body")[0];
    // body.appendChild(divE);

    // let EmployeeName = document.createElement("h2");
    // EmployeeName.textContent = `Name: ${this.FullName}-`;
    // divE.appendChild(EmployeeName);

    // let EmployeeID = document.createElement("h3");
    // EmployeeID.textContent = `ID: ${this.EmployeeID}`;
    // divE.appendChild(EmployeeID);

    // let EmployeeDepartment = document.createElement("h4");
    // EmployeeDepartment.textContent = `Department: ${this.Department}`;
    // divE.appendChild(EmployeeDepartment);


    // let EmployeeImag = document.createElement("img");
    // EmployeeImag.src = this.MyImage;
    // divE.appendChild(EmployeeImag);

    // let EmployeeSalary = document.createElement("h5");
    // EmployeeSalary.textContent = ` salary : ${this.Salary}`;
    // divE.appendChild(EmployeeSalary);



        document.write(`<h1> Employee Name: ${this.FullName}<br>Department: ${this.Department} <br> Employee Salary: ${this.Salary} </h1> `)
}
GhaziSamer.renderEmployee()
LanaAli.renderEmployee()
TamaraAyoub.renderEmployee()
SafiWalid.renderEmployee()
OmarZaid.renderEmployee()
RanaSaleh.renderEmployee()
HadiAhmad.renderEmployee()
