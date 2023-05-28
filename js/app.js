'use strict';



const allEmployee = [];

function Employee(FullName, EmployeeID, Department, Level, MyImage, Salary) {
    this.FullName = FullName,
        this.EmployeeID = X(),
        this.Department = Department,
        this.Level = Level,
        this.MyImage = MyImage,
        this.Salary = 0,
        this.newSalary = function () {
            this.Salary = this.calSalary()

        }
}

// constructor 
let GhaziSamer = new Employee("Ghazi Samer", X(), "Administration", "Senior", "https://raw.githubusercontent.com/LTUC/amman-basic-d02-d03/master/Class-10/Task/assets/Ghazi.jpg");
let LanaAli = new Employee("Lana Ali", X(), "Finance", "Senior", "https://raw.githubusercontent.com/LTUC/amman-basic-d02-d03/master/Class-10/Task/assets/Lana.jpg");
let TamaraAyoub = new Employee("Tamara Ayoub", X(), "Marketing","Senior", "https://raw.githubusercontent.com/LTUC/amman-basic-d02-d03/master/Class-10/Task/assets/Tamara.jpg");
let SafiWalid = new Employee("Safi Walid", X(), "Administration", "Mid-Senio", "https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Safi.jpg?raw=true");
let OmarZaid = new Employee("Omar Zaid", X(), "Development", "Senior", "https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Omar.jpg?raw=true");
let RanaSaleh = new Employee("Rana Saleh", X(), "Development", "Junior", "https://raw.githubusercontent.com/LTUC/amman-basic-d02-d03/master/Class-10/Task/assets/Rana.jpg");
let HadiAhmad = new Employee("Hadi Ahmad", X(), "Finance", "Senior", "https://github.com/LTUC/amman-basic-d02-d03/blob/master/Class-10/Task/assets/Hadi.jpg?raw=true");

console.log(allEmployee);


// salary
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


// EmployeeID
Employee.prototype.EmployeeID = function () {
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}


function X() {// https://stackoverflow.com/questions/29640432/generate-4-digit-random-number-using-substring
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}

Employee.prototype.EmployeeID = function () {
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}



// dom

GhaziSamer.newSalary()
LanaAli.newSalary()
TamaraAyoub.newSalary()
SafiWalid.newSalary()
OmarZaid.newSalary()
RanaSaleh.newSalary()
HadiAhmad.newSalary()

Employee.prototype.renderEmployee = function () {



    let divE = document.createElement("div");
    divE.classList.add("card");
    let main= document.getElementsByTagName("main")[0];
    main.appendChild(divE);
 
    let EmployeeImag = document.createElement("img");
    EmployeeImag.src = this.MyImage;
    divE.appendChild(EmployeeImag);

    let EmployeeName = document.createElement("h2");
    EmployeeName.textContent = `Name: ${this.FullName} - ID: ${this.EmployeeID}`;
    divE.appendChild(EmployeeName);

    // let EmployeeID = document.createElement("h3");
    // EmployeeID.textContent = `ID: ${this.EmployeeID}`;
    // divE.appendChild(EmployeeID);

    let EmployeeDepartment = document.createElement("h4");
    EmployeeDepartment.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
    divE.appendChild(EmployeeDepartment);

    let EmployeeSalary = document.createElement("h5");
    EmployeeSalary.textContent = ` salary : ${this.Salary}`;
    divE.appendChild(EmployeeSalary);
     
    //     document.write(`<h1> Employee Name: ${this.FullName}<br>Department: ${this.Department} <br> Employee Salary: ${this.Salary} </h1> `)
  
    divE.style.backgroundColor ="#FA9884";
    divE.style.color="white";
    divE.style.margin="10px";
    divE.style.width="450px";
    divE.style.height="500px";
    main.style.display="flex";
    main.style.flexWrap="wrap";
    divE.style.textAlign="center";
    main.style.justifyContent="center";
    divE.style.borderRadius="10";
    divE.style.lineHeight="1.7";
    main.style.alignContent="center";
    EmployeeImag.style.width="280px";
    EmployeeImag.style.height="280px";
    EmployeeImag.style.margin="15px";
  
}

GhaziSamer.renderEmployee()
LanaAli.renderEmployee()
TamaraAyoub.renderEmployee()
SafiWalid.renderEmployee()
OmarZaid.renderEmployee()
RanaSaleh.renderEmployee()
HadiAhmad.renderEmployee()