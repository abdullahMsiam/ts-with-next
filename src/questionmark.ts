// todo: ternary operator and optional chaining operator
// ?? nullish coalescing operator
// ?. optional chaining operator

const name: string | null = null;

// using nullish coalescing operator to provide a default value
const displayName = name ?? "Guest";
console.log(displayName); // Guest

// using optional chaining operator to access a property of an object that may be null or undefined
const person: { name: string; age: number; } | null = null;
const personName = person?.name ?? "Unknown";
console.log(personName); // Unknown

// todo: টারনারি অপারেটর হল একটি শর্টহ্যান্ড কন্ডিশনাল অপারেটর যা একটি এক্সপ্রেশনকে তিনটি অংশে ভাগ করে: 
// *একটি শর্ত, 
// *একটি এক্সপ্রেশন যা শর্ত সত্য হলে মূল্যায়ন করা হবে, এবং 
// *একটি এক্সপ্রেশন যা শর্ত মিথ্যা হলে মূল্যায়ন করা হবে। 
// *এটি কোডকে আরও সংক্ষিপ্ত এবং পাঠযোগ্য করতে সাহায্য করতে পারে। 
// ~ উদাহরণস্বরূপ, উপরের কোডে আমরা nullish coalescing operator (??) ব্যবহার করেছি একটি ডিফল্ট মান প্রদান করতে যখন name ভেরিয়েবল null হয়। একইভাবে, আমরা optional chaining operator (?.) ব্যবহার করেছি person অবজেক্টের name প্রপার্টি অ্যাক্সেস করতে যা null হতে পারে。

// নালিশ অপারেটর ও উদাহরণঃ নালিশ অপারেটর (??) হল একটি লজিক্যাল অপারেটর যা একটি ডিফল্ট মান প্রদান করতে ব্যবহৃত হয় যখন একটি এক্সপ্রেশন null বা undefined হয়। উদাহরণস্বরূপ, উপরের কোডে আমরা name ভেরিয়েবল null হলে displayName এ "Guest" সেট করেছি।

// অপশনাল চেইনিং অপারেটর ও উদাহরণঃ অপশনাল চেইনিং অপারেটর (?.) হল একটি লজিক্যাল অপারেটর যা একটি প্রপার্টি অ্যাক্সেস করতে ব্যবহৃত হয় যা null বা undefined হতে পারে। উদাহরণস্বরূপ, উপরের কোডে আমরা person অবজেক্টের name প্রপার্টি অ্যাক্সেস করতে ব্যবহার করেছি person?.name, যা null হলে "Unknown" সেট করবে।

const ternaryResult = () => {
    const age = 25;
    const isAdult = age >= 18 ? "Yes" : "No";
    console.log(isAdult); // Yes
}
