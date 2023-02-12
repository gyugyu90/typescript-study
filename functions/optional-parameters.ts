function funcWithOptionalParam(x?: number) {
    // ...
}

funcWithOptionalParam();
funcWithOptionalParam(10);

function funcWithDefaultValue(x = 10) { // x is always of number type
    // ...
}