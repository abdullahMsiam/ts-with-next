// interface is a way to define the structure of an object in TypeScript. It is a contract that defines the shape of an object. It can be used to define the properties and methods of an object.

// interfaces can be used to define the structure of an object, but they cannot be used to create an instance of an object. They are only used for type checking and code completion.

// ইন্টারফেস হল টাইপস্ক্রিপ্টে একটি অবজেক্টের কাঠামো সংজ্ঞায়িত করার একটি উপায়। এটি একটি চুক্তি যা একটি অবজেক্টের আকার সংজ্ঞায়িত করে। এটি একটি অবজেক্টের বৈশিষ্ট্য এবং পদ্ধতিগুলি সংজ্ঞায়িত করতে ব্যবহার করা যেতে পারে।

// ইন্টারফেসগুলি একটি অবজেক্টের কাঠামো সংজ্ঞায়িত করতে ব্যবহার করা যেতে পারে, তবে এগুলি একটি অবজেক্টের একটি উদাহরণ তৈরি করতে ব্যবহার করা যেতে পারে না। তারা শুধুমাত্র টাইপ চেকিং এবং কোড সম্পূর্ণতার জন্য ব্যবহৃত হয়।

// টাইপ ও ইন্টারফেসের মধ্যে পার্থক্য হল টাইপগুলি একটি নতুন নাম দিয়ে একটি টাইপ সংজ্ঞায়িত করতে ব্যবহৃত হয়, যখন ইন্টারফেসগুলি একটি অবজেক্টের কাঠামো সংজ্ঞায়িত করতে ব্যবহৃত হয়। টাইপগুলি ইউনিয়ন, ইন্টারসেকশন, এবং টুপল টাইপ সহ আরও জটিল টাইপ সংজ্ঞায়িত করতে ব্যবহার করা যেতে পারে, যখন ইন্টারফেসগুলি শুধুমাত্র অবজেক্টের কাঠামো সংজ্ঞায়িত করতে ব্যবহার করা যেতে পারে।

//todo: Interface usage in only object types: 
// *object , 
// *array, 
// *function, 
// *class, etc. 
// ? but not in primitive types: string, number, boolean, etc.

// todo: ===========> interface for function: 
interface IAdd {
    (a: number, b: number): number;
}

const add: IAdd = (a, b) => a + b;

console.log(add(2, 3)); // 5



// todo: ===========> interface for class:
interface IAnimal {
    name: string;
    age: number;
    makeSound(): void;
}; 

class Dog implements IAnimal {
    name: string; 
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("Woof!");
    }
}


// todo: ===========> interface for array:
interface IStringArray {
    [index: number]: string;
}

const myArray: IStringArray = ["Hello", "World"];

console.log(myArray[0]);


// todo: ===========> interface for object:

interface IPerson {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
    email?: string; // optional property
}

const person: IPerson = {
    name: "jhon",
    age: 30,
    address: {
        city: "new york",
        country: "usa",
    },
};