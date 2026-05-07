// function with generic type
function identity<T>(arg: T): T[] {
    return [arg];
}

console.log(identity<string>("Hello")); // ["Hello"]
console.log(identity<number>(42)); // [42]