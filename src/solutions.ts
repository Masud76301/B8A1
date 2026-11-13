// Problem 1
const multiplyValue = (value:number, multiplier?:number):number => {

    if (multiplier !== undefined){

        return value * multiplier ;
    } else

    return value * 2;

}

// Problem 2

type processValue = string | number | boolean ;


const processInput = (value:processValue):processValue => {


    if ( typeof(value) === "number"){
        return value * 10 ;
    }
    else if(typeof(value) === "string") {
        return value.toLowerCase().trim();
    }
    else {
        if(value) {


            return "Active";
        }
        else{
            return "Inactive"
        }
    }
}

// Problem 3

const formatCoordinate  = ([latitude,longitude,locationName]:readonly [number,number,string]):string => {

    return `Location: ${locationName} (${latitude} , ${longitude})`

}


// problem 4

const concatenateArrays  =<T> (...arrays: T[][]):T[] => {


    return arrays.flat();

}




// Problem 5


interface Course {
    title : string,
    students: number,
    isPublished : boolean
}


const getPopularCourses = (courses : Course[], miniStudents : number):Course[] => {
    return courses.filter((course => course.students> miniStudents  && course.isPublished ))
}

// Problem 6

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];


const pluckValues = <T,K extends keyof T>(items: T[],key:K):T[K][] => {
    return items.map((item => item[key]));
}

// Problem 7

class Employee {
    constructor(protected name : string, private baseSalary:number ){
   }

   getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
   }
}


class Manager extends Employee {

    constructor(name:string,baseSalary:number, private  department: string){
        super(name,baseSalary);
    }


    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`
    }
}



// Problem 8

const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};




