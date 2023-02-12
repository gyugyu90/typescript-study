function greeter2(fn: (a: string) => void) {
    fn("Hello world");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter2(printToConsole)