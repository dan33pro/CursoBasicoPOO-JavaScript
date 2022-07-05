class Student {
    constructor({
                    name,
                    email,
                    userName,
                    twitter = undefined,
                    instagram = undefined,
                    facebook = undefined,
                    approvedCourses = [],
                    learningPaths = []
                }) {

        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
            twitter,
            facebook,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class learningPath {
    constructor({
        nombre, 
        cursos = [],
    }){
        this.nombre = nombre;
        this.cursos = cursos;
    }

    agreagarCurso(curso) {
        this.cursos.push(curso);
    }

    removerCurso(cursoR) {
        this.cursos = this.cursos.filter((curso) => curso !== cursoR);
    }
}

class curso {
    constructor({
        nombre, 
        clases = [],
    }) {
        this.nombre = nombre;
        this.clases = clases;
    }
}

const cursoFronDev = new curso({
    nombre: "Curso de Frontend Developer",
});

const cursoResponsive = new curso({
    nombre: "Curso de Responsive Desing",
});

const cursoUnity = new curso({
    nombre: "Curso de Unity 3D",
});

const cursoUnreal = new curso({
    nombre: "Curso de Unreal Engine",
});

const cursoManipulacionDatos = new curso({
    nombre: "Curso de manipulación de datos con Pandas",
});

const cursoVisualizacionDeDatos = new curso({
    nombre: "Curso de visualización de datos con matplotlib",
});



const escuelaDesarrolloWeb = new learningPath({
    nombre: "esculaDesarrolloWeb", 
    cursos: [
        cursoFronDev, 
        cursoResponsive,
    ]
});

const escuelaDesarrolloVideoJuegos = new learningPath({
    nombre: "esculaDesarrolloVideoJuegos", 
    cursos: [
        cursoUnity, 
        cursoUnreal,
    ]
});

const escuelaDeDataScience = new learningPath({
    nombre: "esculaDeDataScience", 
    cursos: [
        cursoManipulacionDatos, 
        cursoVisualizacionDeDatos,
    ]
});



const juan = new Student({
    name: "JuanDC",
    userName: "juan-DC",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDesarrolloVideoJuegos,
    ],
});

const miguel = new Student({
    name: "Miguelito",
    userName: "miguelFelix",
    email:"miguelF@migue.com",
    instagram: "migue-lix",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDeDataScience,
    ],
});