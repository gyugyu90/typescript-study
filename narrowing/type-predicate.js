function isFish(pet) {
    return pet.swim !== undefined;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
function getSmallPet() {
    return { swim: () => console.log('I can swim!') };
}
