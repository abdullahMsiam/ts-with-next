// destructuring in an array

const friends: string[] = ["jhon", "michael", "sarah"];

const [friend1, friend2, friend3] = friends;

//comma operator can be used to skip elements in the array

// const [firstFriend, , thirdFriend] = friends;

const [,, thirdFriend] = friends;

// console.log(firstFriend); // jhon
console.log(thirdFriend); // sarah

// destructuring in an object
const person: {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
  email?: string;
} = {
  name: "jhon",
  age: 30,
  address: {
    city: "new york",
    country: "usa",
  },
};

// nested destructuring
const {
  name,
  age,
  address: { city, country },
} = person;

console.log(name); // jhon
console.log(age); // 30
console.log(city); // new york
console.log(country); // usa

// destructuring with default values
const { name: personName, age: personAge, email = "not provided" } = person;
console.log(personName); // jhon
console.log(personAge); // 30
console.log(email); // not provided


// name is renamed to personName, age is renamed to personAge, and email has a default value of "not provided"
// name aliasing is useful when you want to avoid naming conflicts or when you want to give a more meaningful name to the variable. Default values are useful when you want to ensure that a variable has a value even if the property is missing in the object.
