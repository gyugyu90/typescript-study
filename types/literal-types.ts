// const를 사용하게 되면 같은 타입이더라도 값을 변경할 수 없음.
// 이걸 마치 enum 처럼 사용할 수 있음

const constantString = "Hello World"; // 이건 죽었다 깨어나도 Hello World임

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log(`${s} ${alignment}`)
}

printText("Hello", "left"); // allowed
// printText("Hello", "centre"); // not allowed

// 리턴 타입도 제한할 수 있음
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

// 다른 거랑 혼합해서 사용할 수도 있다
interface Options {
    width: number;
}
function configure(x: Options | "auto") {
    // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // not allowed