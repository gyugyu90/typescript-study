// @ts-nocheck
function create(c) {
    return new c();
}
class BeeKeeper {
    hasMask;
}
class ZooKeeper {
    nametag;
}
class Animal {
    numLegs;
}
class Bee extends Animal {
    keeper;
}
class Lion extends Animal {
    keeper;
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // 타입검사!
createInstance(Bee).keeper.hasMask; // 타입검사!
