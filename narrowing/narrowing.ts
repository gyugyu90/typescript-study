function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }

    return padding + input;
}

function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
        if (strs == null) {
            console.log('strs are null!');
            return
        }
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else {
        // do nothing
    }
}