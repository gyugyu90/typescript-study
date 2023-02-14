const roArray: ReadonlyArray<string> = ["hello", "world"];

let x: readonly string[] = [];
let y: string[] = [];
 
x = y;
// y = x; cannot be assigned