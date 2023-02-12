// const를 사용하게 되면 같은 타입이더라도 값을 변경할 수 없음.
// 이걸 마치 enum 처럼 사용할 수 있음
const constantString = "Hello World"; // 이건 죽었다 깨어나도 Hello World임
function printText(s, alignment) {
    console.log(`${s} ${alignment}`);
}
printText("Hello", "left"); // allowed
// printText("Hello", "centre"); // not allowed
// 리턴 타입도 제한할 수 있음
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // not allowed
