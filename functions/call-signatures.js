function doSomething(fn) {
    console.log(fn.description + " returned "
        + fn(6)); // 이렇게 쓸 수는 있는데, 괜히 헷갈림
}
