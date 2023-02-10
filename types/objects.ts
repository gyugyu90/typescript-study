function printCoord2(pt: {x: number; y: number;}) { // 구분자로 ,를 써도 되고 ;를 써도 됨
    console.log(`The coordinate's x value is ${pt.x}`)
    console.log(`The coordinate's y value is ${pt.y}`)
}

printCoord2({x: 3, y: 7});

function printName(obj: {first: string, last?: string}) {
    console.log(`Hello ${obj.first} ${obj.last?.toUpperCase()}`);
}

// both are OK
printName({first: "Bob"})
printName({first: "Alice", last: "Aliss"})