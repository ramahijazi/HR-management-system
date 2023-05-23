'use strict';

alert('welcome to our website')

const allEmployee= [];

function Employee ( FullName, Department, Level, MyImage, Salary ){
    // this.EmployeeID = EmployeeID,
    this.FullName = FullName,
    this.Department = Department,
    this.Level = Level,
    this.MyImage = MyImage,
    this.Salary =0,
    this.newSalary=function(){ this.Salary=this.calSalary()
        
    }}
    // allEmployee.push(this) }




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
    if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary}
    else if (this.Level == 'Senior') { min = 1500; max = 2000
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary }
    else { min = 500; max = 1000  

    // min = Math.ceil(min);
    // max = Math.floor(max);
    let salary = Math.floor(Math.random() * (max - min) + min);
    let NetSalary = salary -(0.075 *salary);
    return NetSalary
 }}

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






/*
let GhaziSamer = {
    EmployeeID: X(),
    FullName: 'Ghazi Samer',
    Department: 'Administration',
    Level: 'Senior',
    MyImage: 'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg',
    Salary: function () {
        var min;
        var max;
        if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        else if (this.Level == 'Senior') { min = 1500; max = 2000 }
        else { min = 500; max = 1000 }

        min = Math.ceil(min);
        max = Math.floor(max);
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary
    },
    intro: function () { return `my name is ${this.FullName},my department is ${this.Department},my level is ${this.Level} ` }
}

console.table(GhaziSamer);


let LanaAli = {
    EmployeeID: X(),
    FullName: 'Lana Ali',
    Department: 'Finance',
    Level: 'Senior',
    MyImage: 'https://static.vecteezy.com/system/resources/previews/009/952/670/original/female-profile-picture-vector.jpg',
    Salary: function () {
        var min;
        var max;
        if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        else if (this.Level == 'Senior') { min = 1500; max = 2000 }
        else { min = 500; max = 1000 }

        min = Math.ceil(min);
        max = Math.floor(max);
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary
    },
    intro: function () { return `my name is ${this.FullName},my department is ${this.Department},my level is ${this.Level}, ${this.MyImage}` }
}

console.table(LanaAli);


let TamaraAyoub = {
    EmployeeID: X(),
    FullName: 'Tamara Ayoub',
    Department: 'Marketing',
    Level: 'Senior',
    MyImage: 'https://static.vecteezy.com/system/resources/previews/009/952/670/original/female-profile-picture-vector.jpg',
    Salary: function () {
        var min;
        var max;
        if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        else if (this.Level == 'Senior') { min = 1500; max = 2000 }
        else { min = 500; max = 1000 }

        min = Math.ceil(min);
        max = Math.floor(max);
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary
    },
    intro: function () { return `my name is ${this.FullName},my department is ${this.Department},my level is ${this.Level}, ${this.MyImage}` }
}

console.table(TamaraAyoub);


let SafiWalid = {
    EmployeeID: X(),
    FullName: 'Safi Walid',
    Department: 'Administration',
    Level: 'Mid-Senior',
    MYImage: 'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg',
    Salary: function () {
        var min;
        var max;
        if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        else if (this.Level == 'Senior') { min = 1500; max = 2000 }
        else { min = 500; max = 1000 }

        min = Math.ceil(min);
        max = Math.floor(max);
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary
    },
    intro: function () { return `my name is ${this.FullName},my department is ${this.Department},my level is ${this.Level}, ${this.MyImage}` }
}

console.table(SafiWalid);



let OmarZaid = {
    EmployeeID: X(),
    FullName: 'Omar Zaid',
    Department: 'Development',
    Level: 'Senior',
    MyImage: 'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg',
    Salary: function () {
        var min;
        var max;
        if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        else if (this.Level == 'Senior') { min = 1500; max = 2000 }
        else { min = 500; max = 1000 }

        min = Math.ceil(min);
        max = Math.floor(max);
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary
    },
    intro: function () { return `my name is ${this.FullName},my department is ${this.Department},my level is ${this.Level}, ${this.MyImage}` }
}

console.table(OmarZaid);

let RanaSaleh = {
    EmployeeID: X(),
    FullName: 'Rana Saleh',
    Department: 'Development',
    Level: 'Junior',
    MyImage: 'https://static.vecteezy.com/system/resources/previews/009/952/670/original/female-profile-picture-vector.jpg',
    Salary: function () {
        var min;
        var max;
        if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
        else if (this.Level == 'Senior') { min = 1500; max = 2000 }
        else { min = 500; max = 1000 }

        min = Math.ceil(min);
        max = Math.floor(max);
        let salary = Math.floor(Math.random() * (max - min) + min);
        let NetSalary = salary -(0.075 *salary);
        return NetSalary
    },
    intro: function () { return `my name is ${this.FullName},my department is ${this.Department},my level is ${this.Level}, ${this.MyImage}` }
}

console.table(RanaSaleh);



let HadiAhmad = {
        /*EmployeeID: function () {
            random = Math.floor(Math.random() * 5);
            console.log(random);
            return random
        }*/
      /*  EmployeeID: X(),
        FullName: 'Hadi Ahmad',
        Department: 'Finance',
        Level: 'Senior',
        MyImage: 'https://www.shutterstock.com/image-illustration/male-profile-picture-silhouette-avatar-260nw-149290403.jpg',
        Salary: function () {
            var min;
            var max;
            if (this.Level == 'Mid-Senior') { min = 1000; max = 1500 }
            else if (this.Level == 'Senior') { min = 1500; max = 2000 }
            else { min = 500; max = 1000 }

            min = Math.ceil(min);
            max = Math.floor(max);
            let salary = Math.floor(Math.random() * (max - min) + min);
            let NetSalary = salary - (0.075 * salary);
            return NetSalary
        },
        intro: function () {
            return `Employee ID ${this.EmployeeID}, my name is ${this.FullName},
my department is ${this.Department},my level is ${this.Level}`
        }


    }



console.log(HadiAhmad.intro());

console.log(HadiAhmad.Salary());


console.table(HadiAhmad);
*/
// document.getElementById("demo1").innerHTML = `Employee Name: ${GhaziSamer.FullName}<br> Department: ${GhaziSamer.Department}<br>
// Employee Salary: ${GhaziSamer.y()}`;

// document.getElementById("demo2").innerHTML = `Employee Name: ${LanaAli.FullName}<br>Department: ${LanaAli.Department} <br>
// Employee Salary: ${LanaAli.y()}`;

// document.getElementById("demo3").innerHTML = `Employee Name: ${TamaraAyoub.FullName}<br> Department: ${TamaraAyoub.Department} <br>
// Employee Salary: ${TamaraAyoub.y()}`;

// document.getElementById("demo4").innerHTML = `Employee Name: ${SafiWalid.FullName}<br> Department: ${SafiWalid.Department}<br>
// Employee Salary: ${SafiWalid.y()}`;

// document.getElementById("demo5").innerHTML = `Employee Name: ${OmarZaid.FullName}<br> Department: ${OmarZaid.Department}<br>

// Employee Salary: ${OmarZaid.y()}`;

// document.getElementById("demo6").innerHTML = `Employee Name: ${RanaSaleh.FullName}<br>Department: ${RanaSaleh.Department}<br>
// Employee Salary: ${RanaSaleh.y()}`;

// document.getElementById("demo7").innerHTML = `Employee Name: ${HadiAhmad.FullName}<br>Department: ${HadiAhmad.Department}<br>
// Employee Salary: ${HadiAhmad.y()}`;
