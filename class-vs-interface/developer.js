// class is a blueprint or template 
// by which we can create objects with specific properties and methods
class Developer {
    name;
    position;
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    develop() {
        console.log('develop an app');
    }
}
const developer = new Developer('Gapur', 'Frontend Developer');
console.log(developer.name, developer.position);
developer.develop();
