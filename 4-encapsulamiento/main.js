class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this._classes = classes;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }
}

const cursoProgBasica = new Course({
    name: "Curso Gratis de programción Básica",
});

cursoProgBasica.name += " :)";
console.log(cursoProgBasica.name);