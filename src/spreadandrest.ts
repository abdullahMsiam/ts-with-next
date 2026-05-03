// spread in an array

const friends:string[] = [ "jhon" ]

const newFriends:string[] = [ "michael", "sarah", ...friends ]

console.log(newFriends) // [ 'michael', 'sarah', 'jhon' ]

// spread in an object

const person = {
    name: "jhon",
    age: 30
}

const newPerson = {
    ...person,  
    email: "jhon@example.com"
}

console.log(newPerson) // { name: 'jhon', age: 30, email: 'jhon@example.com' }


