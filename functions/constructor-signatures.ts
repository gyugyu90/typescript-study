type SomeConstructor = {
    new(s: string): SomeObject; // signature of constructor.. 여기서는 개념에 대한 정의만 함
};
function fn(aConstructor: SomeConstructor) {
    return new aConstructor("hello"); // 실제로 new를 사용하여 instance 생성
}

type SomeObject = {
    value: string
}

interface CallOrConstruct {
    new(s: string): Date;
    (n?: number): number;
}