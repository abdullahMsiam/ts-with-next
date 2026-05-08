// constrain in ts

function constrain<T extends number>(value: T, min: T, max: T): T {
    if (value < min) {
        return min;
    } else if (value > max) {
        return max;
    } else {
        return value;
    } 
}

console.log(constrain(5, 1, 10));

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}