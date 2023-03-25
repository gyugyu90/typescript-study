class Greeter {
    name = "world";
    constructor(otherName) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = "not ok"; // cannot assign to 'name'
    }
}
