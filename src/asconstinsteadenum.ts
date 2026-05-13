// Using as const instead of enum
const Direction = {
    Up: 1,
    Down: 2,
    Left: 3,
    Right: 4
} as const;


type Direction = typeof Direction[keyof typeof Direction];

const myDirection: Direction = Direction.Up;
console.log(myDirection); // 1


const userRoles = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST", 
} as const;

type UserRole = typeof userRoles[keyof typeof userRoles];

const myRole: UserRole = userRoles.Admin;
console.log(myRole); // "ADMIN"
