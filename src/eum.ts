// Enum in TypeScript
enum Color {
    Red,
    Green,
    Blue
}

const myColor: Color = Color.Red;

// Enum with custom values
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

const myStatus: Status = Status.Active;

console.log(myColor); // 0
console.log(myStatus); // "ACTIVE"

// Enum with computed values
enum Direction {
    Up = 1,
    Down,
    Left = Up * 2,
    Right = Up * 3
}

console.log(Direction.Up); // 1
console.log(Direction.Down); // 2
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3


// Enum with string values
enum Weekday {
    Monday = "MONDAY",
    Tuesday = "TUESDAY",
    Wednesday = "WEDNESDAY",
    Thursday = "THURSDAY",
    Friday = "FRIDAY",
    Saturday = "SATURDAY",
    Sunday = "SUNDAY"
}

console.log(Weekday.Monday); // "MONDAY"

// Enum with mixed values
enum Mixed {
    A = "A",
    B = 2,
    C = "C",
    D = 4
}   

console.log(Mixed.A); // "A"
console.log(Mixed.B); // 2


// enum is not run time construct, it is only a compile time construct, so it will not be present in the compiled JavaScript code. It is only used for type checking and code completion in TypeScript.
// need to use flag node --experimental-transform-types  to use enums in JavaScript.