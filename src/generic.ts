// generic types

// জেনেরিক টাইপগুলি টাইপস্ক্রিপ্টে একটি ফাংশন, ক্লাস, বা ইন্টারফেসের জন্য একটি টেমপ্লেট তৈরি করতে ব্যবহৃত হয় যা বিভিন্ন ধরনের ডেটা গ্রহণ করতে পারে। এটি কোড পুনঃব্যবহারযোগ্যতা এবং টাইপ সুরক্ষা উন্নত করতে সাহায্য করে। জেনেরিক টাইপগুলি একটি টাইপ প্যারামিটার ব্যবহার করে সংজ্ঞায়িত করা হয়, যা একটি প্লেসহোল্ডার হিসাবে কাজ করে এবং ফাংশন, ক্লাস, বা ইন্টারফেসের ব্যবহার করার সময় একটি নির্দিষ্ট টাইপ দ্বারা প্রতিস্থাপিত করা হয়।

// জেনেরিক টাইপগুলি ফাংশন, ক্লাস, এবং ইন্টারফেসের জন্য সংজ্ঞায়িত করা যেতে পারে। তারা একটি ফাংশন বা ক্লাসের জন্য একাধিক টাইপ গ্রহণ করতে সক্ষম করে, যা কোড পুনঃব্যবহারযোগ্যতা এবং টাইপ সুরক্ষা উন্নত করতে সাহায্য করে।

type GenericArray<T> = {
    items: T[];
    addItem(item: T): void;
};

const stringArray: GenericArray<string> = {
    items: [],
    addItem(item: string) {
        this.items.push(item);
    },
};

const numberArray: GenericArray<number> = {
    items: [],
    addItem(item: number) {
        this.items.push(item);
    },
};

stringArray.addItem("Hello");
stringArray.addItem("Hello");
stringArray.addItem("Hello");
stringArray.addItem("Hello");
numberArray.addItem(42);
console.log(stringArray.items); 


// tuple with generic types
type GenericTuple<T, U> = [T, U];

const tuple1: GenericTuple<string, number> = ["Hello", 42];
const tuple2: GenericTuple<boolean, string> = [true, "World"];
console.log(tuple1, tuple2); 

// object with generic types
type GenericObject<T> = {
    name: string;
    value: T;
};

const obj1: GenericObject<string> = {
    name: "String Object",
    value: "Hello",
};

const obj2: GenericObject<number> = {
    name: "Number Object",
    value: 42,
};
console.log(obj1);

// array of objects with generic types

type GenericArrayOfObjects<T> = {
    items: T[  ];
}

const arrayOfObjects1: GenericArrayOfObjects<string> = {
    items: ["Hello", "World"],
};

const arrayOfObjects2: GenericArrayOfObjects<{ name: string; age: number }> = {
    items: [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
    ],
};
console.log(arrayOfObjects1);
console.log(arrayOfObjects2);