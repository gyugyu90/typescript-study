// type은 정의해도 js에서 따로 정의되지 않는다.
type DescribableFunction = {
    description: string;
    (someArg: number): boolean; // `call signature` 이렇게 정의하면
};

function doSomething2(fn: DescribableFunction) {
    console.log(fn.description + " returned "
        + fn(6)); // 이렇게 쓸 수는 있는데, 괜히 헷갈림
}