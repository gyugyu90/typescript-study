// const로 정의했지만 obj2가 불변이지 내부 필드는 변할 수 있음.
const obj2 = { counter: 0 };
if (true) {
    obj2.counter = 1;
}
// req.method는 string 타입이고, "GET" 리터럴로 추론되지 않음.
const req = { url: "https://example.com", method: "GET" };
// 만약 그렇게 하고 싶다면
const req2 = { url: "https://example.com", method: "GET" };
const req3 = { url: "https://example.com", method: "GET" };
