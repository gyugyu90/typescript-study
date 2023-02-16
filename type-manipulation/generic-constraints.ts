interface Lengthwise {
    length: number
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}


// Key가 Type의 Key인 것으로 generic constraint를 설정
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let typeObject = { a: 1, b: 2, c: 3, d: 4 };

getProperty(typeObject, "a");
  // getProperty(typeObject, "m"); 'm' is not assignable