function greeter2(fn) {
    fn("Hello world");
}
function printToConsole(s) {
    console.log(s);
}
greeter2(printToConsole);
