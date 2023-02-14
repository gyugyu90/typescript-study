interface NumberDictionary {
    [index: string]: number;

    length: number; // ok
    // name: string;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}