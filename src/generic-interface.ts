// generic with interfaces

// ইন্টারফেসের সাথে জেনেরিক টাইপগুলি টাইপস্ক্রিপ্টে একটি ইন্টারফেসের জন্য একটি টেমপ্লেট তৈরি করতে ব্যবহৃত হয় যা বিভিন্ন ধরনের ডেটা গ্রহণ করতে পারে। এটি কোড পুনঃব্যবহারযোগ্যতা এবং টাইপ সুরক্ষা উন্নত করতে সাহায্য করে। জেনেরিক টাইপগুলি একটি টাইপ প্যারামিটার ব্যবহার করে সংজ্ঞায়িত করা হয়, যা একটি প্লেসহোল্ডার হিসাবে কাজ করে এবং ইন্টারফেসের ব্যবহার করার সময় একটি নির্দিষ্ট টাইপ দ্বারা প্রতিস্থাপিত করা হয়।

// জেনেরিক টাইপগুলি ইন্টারফেসের জন্য সংজ্ঞায়িত করা যেতে পারে, যা একটি ইন্টারফেসের জন্য একাধিক টাইপ গ্রহণ করতে সক্ষম করে, যা কোড পুনঃব্যবহারযোগ্যতা এবং টাইপ সুরক্ষা উন্নত করতে সাহায্য করে।

interface IGenericInterface<T> {
    value: T;
    getValue(): T;
}

class GenericClass<T> implements IGenericInterface<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

const genericString = new GenericClass<string>("Hello");
const genericNumber = new GenericClass<number>(42);



interface Developer<T, U, V = null> {
    name: string;
    skills: T[];
    company: string;
    personalInfo: U;
    additionalInfo?: V;
}

const frontendDeveloper: Developer<string, {
    experience: number;
    position: string;
    about: string;
}> = {
    name: "Alice",
    skills: ["HTML", "CSS", "JavaScript"],
    company: "TechCorp",
    personalInfo: {
        experience: 5,
        position: "Frontend Developer",
        about: "Passionate about creating responsive and user-friendly web applications."
    }, 
    additionalInfo: null
};

const backendDeveloper: Developer<string, {
    experience: number;
    position: string;
    about: string;
}, {
    specialization: string;
    yearsOfExperience: number;
}> = {
    name: "Bob",
    skills: ["Python", "Django", "PostgreSQL"],
    company: "DataTech",
    personalInfo: {
        experience: 8,
        position: "Backend Developer",
        about: "Experienced in building scalable backend systems."
    },
    additionalInfo: {
        specialization: "API Development",
        yearsOfExperience: 8
    }
};

console.log(frontendDeveloper);
console.log(backendDeveloper);