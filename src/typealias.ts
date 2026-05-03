// type aliasing

type user = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  gender: "Male" | "Female"; 
};

const user1: user = {
  name: {
    firstName: "jhon",
    lastName: "doe",
  },
  age: 30,
  email: "jhon.doe@example.com",
  gender: "Male"
};


// type aliasing is useful when you want to create a new name for a type that is already defined. It can make your code more readable and easier to understand. In this example, we have created a type alias called "user" that represents an object with specific properties. We can then use this type alias to create variables of that type, which can help us avoid repetition and make our code more maintainable.
// টাইপ এলিয়াসিং তখনই উপকারী যখন আপনি ইতিমধ্যে সংজ্ঞায়িত একটি টাইপের জন্য একটি নতুন নাম তৈরি করতে চান। এটি আপনার কোডকে আরও পাঠযোগ্য এবং বোঝার জন্য সহজ করতে পারে। এই উদাহরণে, আমরা "user" নামে একটি টাইপ এলিয়াস তৈরি করেছি যা নির্দিষ্ট বৈশিষ্ট্য সহ একটি অবজেক্ট প্রতিনিধিত্ব করে। তারপর আমরা এই টাইপ এলিয়াস ব্যবহার করে সেই ধরনের ভেরিয়েবল তৈরি করতে পারি, যা আমাদের পুনরাবৃত্তি এড়াতে এবং আমাদের কোডকে আরও রক্ষণাবেক্ষণযোগ্য করতে সাহায্য করতে পারে।

// type aliasing for functions

type add = (a: number, b: number) => number;

const addNumbers: add = (a, b) => {
  return a + b;
}; 
