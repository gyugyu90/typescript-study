class Point3 {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const pt = new Point3(0, 0);

console.log(`${pt.x}, ${pt.y}`)