function isFish(pet: FishType | BirdType): pet is FishType {
    return (pet as FishType).swim !== undefined;
}

type FishType = {
    swim: () => void
}

type BirdType = {
    fly: () => void
}

let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}


function getSmallPet(): FishType | BirdType {
    return { swim: () => console.log('I can swim!') };
}


