interface Colorful {
    color: string;
}
interface Circle2 {
    radius: number;
}

type ColorfulCircle = Colorful & Circle2;

const cc : ColorfulCircle = {
    color: 'red',
    radius: 1
}

interface ColorfulCircle2 extends Colorful, Circle2 {}

const cc2 : ColorfulCircle2 = {
    color: 'blue',
    radius: 2
}