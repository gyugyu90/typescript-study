type OnlyBoolsAndHorses = {
    [key: string]: boolean | Horse;
}

type Horse = {
    something: any
}

const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean
}

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
}

type FeatureOptions = OptionsFlags<FeatureFlags>;
// darkMode: boolean
// newUserProfile: boolean

// 타입의 프로퍼티에서 'readonly' 속성을 제거합니다
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
    readonly id: string;
    readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// 타입의 프로퍼티에서 'optional' 속성을 제거합니다
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
};

type User = Concrete<MaybeUser>;

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person4 {
    name: string;
    age: number;
    location: string;
}

type LazyPerson = Getters<Person4>;

// 'kind' 프로퍼티를 제거합니다
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};

interface Circle {
    kind: "circle";
    radius: number;
}

type KindlessCircle = RemoveKindField<Circle>;

type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>


type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};

type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
};

type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;