//                            Objeto literal natalia

const daniel = {
    nombre: "Daniel",
    edad: 19,
    cursosAprobados: [
        "Curso Básico de JS",
        "Curso de Scope y Closure",
    ],
    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    },
};

// daniel.cursosAprobados.push("Curso de animaciones con CSS");
// daniel.nombre = "Danny";
// daniel.edad++;

daniel.aprobarCurso("Curso de animaciones con CSS");
console.log(daniel);




//                           Prototipo Estudiante

function Student(nombre, edad, cursosAprobados) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
    this.aprobarCurso = function (curso) {
        this.cursosAprobados.push(curso);
    };
}

//Otra forma de agregar una funcion a un prototipo
//desde afuera, eso si se agragara dentro del obejto
//[[Prototype]] que es un atributo del objeto

Student.prototype.removerCurso = function (cursoR) {
    this.cursosAprobados = this.cursosAprobados.filter((curso) => curso !== cursoR);
}


const Juan = new Student (
    "Juan", 
    15, 
    [
        "Logica de Programación",
        "Curso básico de Programción en JAVA",
    ],
);

Juan.aprobarCurso("Curso de CSS Grid");
console.log("\n");
console.log(Juan);
Juan.removerCurso("Curso de CSS Grid");
console.log(Juan);



//                              Prototipo con la sintaxis de clases

class Student2 {
    //En lugar de pasar los atributos como parametro es mejor pasar un objeto, 
    //nos permitira hacer las cosas más flexibles, (orden, valores vacios, etc)
    constructor({
                    nombre, 
                    edad, 
                    cursosAprobados = [],
                }) {
        this.nombre = nombre;
        this.edad = edad;
        this.cursosAprobados = cursosAprobados;

    }

    aprobarCurso(curso) {
        this.cursosAprobados.push(curso);
    }

    removerCurso(cursoR) {
        this.cursosAprobados = this.cursosAprobados.filter((curso) => curso !== cursoR);
    }
}

//Acá vemos la flexibilidad de la que hable arriba
const miguel = new Student2({
    edad: 22,
    nombre: "Miguelito",
});

console.log("\n");
miguel.aprobarCurso("Curso de Diseño para Developers");
console.log(miguel);