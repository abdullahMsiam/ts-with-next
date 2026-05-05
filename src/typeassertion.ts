// type assertion

// টাইপ অ্যাসারশন হল একটি বৈশিষ্ট্য যা আপনাকে একটি ভেরিয়েবলকে একটি নির্দিষ্ট টাইপ হিসাবে বিবেচনা করতে দেয়, এমনকি যদি TypeScript এটি স্বয়ংক্রিয়ভাবে নির্ধারণ করতে না পারে। এটি তখনই উপকারী যখন আপনি জানেন যে একটি ভেরিয়েবল একটি নির্দিষ্ট টাইপের মান ধারণ করবে, কিন্তু TypeScript এটি সঠিকভাবে অনুমান করতে পারে না।

// type assertion এর দুটি সিনট্যাক্স রয়েছে: angle-bracket syntax এবং as-syntax। angle-bracket syntax হল <type>variable, এবং as-syntax হল variable as type। উদাহরণস্বরূপ: 

let someValue: unknown = "this is a string";

// angle-bracket syntax
// let strLength1: number = (<string>someValue).length;

// as-syntax
let strLength2: number = (someValue as string).length;
// console.log(strLength1); // 16
console.log(strLength2); // 16