class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")\n" + this.likes + " likes\n" + this.content);
    }
}

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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", actualemte no puedes tomar el curso: " + newCourse.nombre);
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        if (newCourse.typeSuscription === "basic") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos " + this.name + ", actualemte no puedes tomar el curso: " + newCourse.nombre + " actualiza a Expert");
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }

    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    // Polimorfismo de inclusi??n
    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });
        comment.publicar();
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
        isFree = false,
        typeSuscription = "basic",
    }) {
        this.nombre = nombre;
        this.clases = clases;
        this.isFree = isFree;
        this.typeSuscription = typeSuscription;
    }
}

// Instancias de cursos

const cursoProgBasic = new curso({
    nombre: "Curso Gratis de Programaci??n B??sica",
    isFree: true,
})

const cursoFronDev = new curso({
    nombre: "Curso de Frontend Developer",
});

const cursoResponsive = new curso({
    nombre: "Curso de Responsive Desing",
    typeSuscription: "expert",
});

const cursoUnity = new curso({
    nombre: "Curso de Unity 3D",
});

const cursoUnreal = new curso({
    nombre: "Curso de Unreal Engine",
});

const cursoManipulacionDatos = new curso({
    nombre: "Curso de manipulaci??n de datos con Pandas",
});

const cursoVisualizacionDeDatos = new curso({
    nombre: "Curso de visualizaci??n de datos con matplotlib",
});

// Instancias de rutas de aprendizaje

const escuelaDesarrolloWeb = new learningPath({
    nombre: "esculaDesarrolloWeb", 
    cursos: [
        cursoProgBasic,
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

// Instancias de estudiantes

const juan = new FreeStudent({
    name: "JuanDC",
    userName: "juan-DC",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDesarrolloVideoJuegos,
    ],
});

const miguel = new BasicStudent({
    name: "Miguelito",
    userName: "miguelFelix",
    email:"miguelF@migue.com",
    instagram: "migue-lix",
    learningPaths: [
        escuelaDesarrolloWeb,
        escuelaDeDataScience,
    ],
});

const daniel = new ExpertStudent({
    name: "Danny",
    userName: "DagoGres",
    email: "danny@dann.es",
    learningPath: [
        escuelaDeDataScience,
        escuelaDesarrolloVideoJuegos,
        escuelaDesarrolloWeb,
    ],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    userName: "freddy-V",
    email: "freddy@vega.platzi", 
})