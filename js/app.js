'use strict';

alert('welcome to our website')


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



function X() {// https://stackoverflow.com/questions/29640432/generate-4-digit-random-number-using-substring
    var a = Math.floor(1006 + Math.random() * 1000)
    a = a.toString().substring(0, 4);

    a = parseInt(a);
    console.log(a);
    return (a);
}



let HadiAhmad = {
        /*EmployeeID: function () {
            random = Math.floor(Math.random() * 5);
            console.log(random);
            return random
        }*/
        EmployeeID: X(),
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

document.getElementById("demo1").innerHTML = `Employee Name: ${GhaziSamer.FullName},
Employee Salary: ${GhaziSamer.Salary()}`;

document.getElementById("demo2").innerHTML = `Employee Name: ${LanaAli.FullName},
Employee Salary: ${LanaAli.Salary()}`;

document.getElementById("demo3").innerHTML = `Employee Name: ${TamaraAyoub.FullName},
Employee Salary: ${TamaraAyoub.Salary()}`;

document.getElementById("demo4").innerHTML = `Employee Name: ${SafiWalid.FullName},
Employee Salary: ${SafiWalid.Salary()}`;

document.getElementById("demo5").innerHTML = `Employee Name: ${OmarZaid.FullName},

Employee Salary: ${OmarZaid.Salary()}`;

document.getElementById("demo6").innerHTML = `Employee Name: ${RanaSaleh.FullName},
Employee Salary: ${RanaSaleh.Salary()}`;

document.getElementById("demo7").innerHTML = `Employee Name: ${HadiAhmad.FullName},
Employee Salary: ${HadiAhmad.Salary()}`;
