// union and intersection types

// union type
type StringOrNumber = string | number;

// intersection type
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: string;
  salary: number;
};

type EmployedPerson = Person & Employee;

const employee1: EmployedPerson = {
  name: "jhon",
  age: 30,
  employeeId: "E123",
  salary: 50000,
};

//Todo: ইউনিয়ন টাইপ হল একটি টাইপ যা একাধিক টাইপের মান গ্রহণ করতে পারে। 
// ? উদাহরণস্বরূপ, StringOrNumber টাইপটি string অথবা number হতে পারে।
// ? ইন্টারসেকশন টাইপ হল একটি টাইপ যা একাধিক টাইপের বৈশিষ্ট্য ধারণ করে। উদাহরণস্বরূপ, EmployedPerson টাইপটি Person এবং Employee উভয়ের বৈশিষ্ট্য ধারণ করে। 
// ?এটি তখনই উপকারী যখন আপনি একটি ভেরিয়েবলকে একাধিক টাইপের মান গ্রহণ করতে চান অথবা যখন আপনি একটি নতুন টাইপ তৈরি করতে চান যা একাধিক টাইপের বৈশিষ্ট্য ধারণ করে।

// Todo: ইন্টারসেকশন টাইপ তখনই উপকারী যখন আপনি একটি নতুন টাইপ তৈরি করতে চান যা একাধিক টাইপের বৈশিষ্ট্য ধারণ করে।
// ? উদাহরণস্বরূপ, EmployedPerson টাইপটি Person এবং Employee উভয়ের বৈশিষ্ট্য ধারণ করে, যা আমাদের একটি নতুন টাইপ তৈরি করতে সাহায্য করে যা উভয় ধরনের বৈশিষ্ট্য ধারণ করে। 
// * এটি আমাদের কোডকে আরও রক্ষণাবেক্ষণযোগ্য এবং পুনরায় ব্যবহারযোগ্য করতে সাহায্য করতে পারে।