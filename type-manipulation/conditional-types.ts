interface Animal2 {
    live(): void
}

interface Dog extends Animal2 {
    woof(): void;
}

type Example1 = Dog extends Animal2 ? number : string; // string
type Example2 = RegExp extends Animal2 ? number : string // number


interface IdLabel {
    id: number;
}

interface NameLabel {
    name: string;
}

type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
}

let labelA = createLabel("typescript")
let labelB = createLabel(2.8)
let labelC = createLabel(Math.random() ? "hello" : 42)


type MessageOf<T extends { message: unknown }> = T["message"];
interface Email {
    message: string;
}

type EmailMessageContents = MessageOf<Email> // string

type Flatten<T> = T extends any[] ? T[number] : T;

// extracts out the element type
type Str = Flatten<string[]>; // string

// leaves the type alone
type Num = Flatten<number>; // number

type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

// parameter가 뭐가 됐든 리턴 타입이 
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return : never;
type Num2 = GetReturnType<() => number> // number
type Str2 = GetReturnType<(x: string) => string>; // string
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean> // boolean

type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr2 = ToArrayNonDist<string | number>; // (string | number)[]
