interface Box<Type> {
    contents: Type;
}

let boxA: Box<string> = { contents: "hello" };
console.log(boxA.contents);

// type으로 선언하기
type BoxType<Type> = {
    contents: Type;
};

