// 1. keyof operator in ts

interface Person {
    name: string;
    age: number;
    city: string;
}; 

interface Employee {
    id: number;
    name: string;
    department: string;
}


type PersonKeys = keyof Person; // "name" | "age" | "city"

function getProperty<T>(obj: T, key: keyof T): T[keyof T] {
    return obj[key];
}; 

const person: Person = {
    name: "jhon",
    age: 30,
    city: "New York",
};

const employee: Employee = {
    id: 1,
    name: "jane",
    department: "HR",
};

// todo: Faulty code:
const nonEmployee = {
    id: 2,
    name: "doe",
};

console.log(getProperty(person, "name")); // jhon
console.log(getProperty(person, "age")); // 30
console.log(getProperty(person, "city")); // New York 
console.log(getProperty(employee, "id")); // 1
console.log(getProperty(employee, "name")); // jane
console.log(getProperty(employee, "department")); // HR

console.log(getProperty(nonEmployee, "id")); // 2