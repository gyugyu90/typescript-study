type Person1 = {
    age: number;
    name: string;
    alive: boolean;
}

type Age = Person1["age"] // number

type I1 = Person1["age" | "name"] // string | number
type I2 = Person1[keyof Person1] // string | number | boolean

type AliveOrName = "alive" | "name"
type I3 = Person1[AliveOrName] // boolean | string

const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
]

type Person3 = typeof MyArray[number] // number가 keyword로 사용됨
type Age1 = typeof MyArray[number]["age"] // number

type Age2 = Person3["age"] // number