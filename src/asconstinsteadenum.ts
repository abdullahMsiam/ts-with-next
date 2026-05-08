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

