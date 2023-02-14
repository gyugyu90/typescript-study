// class is a blueprint or template 
// by which we can create objects with specific properties and methods
class Developer implements IDeveloper {
    name: string;
    position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }

    develop(): void {
        console.log('develop an app');
    }
}

const developer = new Developer('Gapur', 'Frontend Developer');
console.log(developer.name, developer.position);
developer.develop();

// interface is a structure that acts like a contract in your application
// or the syntax for classes to follow
interface IDeveloper {
    name: string
    position: string
    develop: () => void
}