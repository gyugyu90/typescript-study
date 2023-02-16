function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// Key가 Type의 Key인 것으로 generic constraint를 설정
function getProperty(obj, key) {
    return obj[key];
}
let typeObject = { a: 1, b: 2, c: 3, d: 4 };
getProperty(typeObject, "a");
// getProperty(typeObject, "m"); 'm' is not assignable
