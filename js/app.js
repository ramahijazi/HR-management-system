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
        this.Salary = this.calSalary()}}







let GhaziSamer = new Employee("Ghazi Samer","Administration","Senior");
let LanaAli = new Employee("Lana Ali","Finance","Senior");
let TamaraAyoub = new Employee("Tamara Ayoub","Marketing");
let SafiWalid = new Employee("Safi Walid","Administration","Mid-Senio");
let OmarZaid = new Employee("Omar Zaid","Development","Senior");
let RanaSaleh = new Employee("Rana Saleh","Development","Junior");
let HadiAhmad = new Employee("Hadi Ahmad","Finance","Senior");

console.log(allEmployee);

// prototype 
Employee.prototype.calSalary =function(){
    var min=0;
    var max=0;
    if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        // let salary = Math.floor(Math.random() * (max - min) + min);
        // let NetSalary = salary -(0.075 *salary);
        // return NetSalary}
    else if (this.Level == 'Senior') { min = 1500; max = 2000}
        // let salary = Math.floor(Math.random() * (max - min) + min);
        // let NetSalary = salary -(0.075 *salary);
        // return NetSalary }
    else { min = 500; max = 1000  

    //min = Math.ceil(min);
    // max = Math.floor(max); 
 }
 
 let salary = Math.floor(Math.random() * (max - min) + min);
 let NetSalary = salary -(0.075 *salary);
 return NetSalary}

 Employee.prototype.X =function(){
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

 Employee.prototype.renderEmployee = function(){
    document.write(`<h1> Employee Name: ${this.FullName}<br>Department: ${this.Department} <br> Employee Salary: ${this.Salary} </h1> `)
 }
 GhaziSamer.renderEmployee()
 LanaAli.renderEmployee()
 TamaraAyoub.renderEmployee()
 SafiWalid.renderEmployee()
 OmarZaid.renderEmployee()
 RanaSaleh.renderEmployee()
 HadiAhmad.renderEmployee()

// salary
// function y()   
// {
//     var min;
//     var max;
//     if (Employee.Level == 'Mid-Senior') { min = 1000; max = 1500 }
//     else if (Employee.Level == 'Senior') { min = 1500; max = 2000 }
//     else { min = 500; max = 1000 }

//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let salary = Math.floor(Math.random() * (max - min) + min);
//     let NetSalary = salary -(0.075 *salary);
//     return NetSalary
// } 


// EmployeeID
function X() {// https://stackoverflow.com/questions/29640432/generate-4-digit-random-number-using-substring
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}





