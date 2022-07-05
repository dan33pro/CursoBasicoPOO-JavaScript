// Trabajar con objetos literales resulta costoso

const lucas = {
    name: "Lucas Saray",
    userName: "Lucas-SA",
    points: 100,
    socialMedia: {
        twitter: "LucasSA",
        instagram: "Lucas_SA",
        facebook: undefined,
    },
    approvedCourses: [
        "Curso de HTML y CSS",
        "Curso de Flexbox",
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso de HTML y CSS",
                "Curso de Flexbox",
                "Curso de Resposive Desing",
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso de Unreal Engine",
                "Curso de Unity 3D"
            ]
        }
    ]
};

// Con clases

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

const juan = new Student({
    name: "JuanDC",
    userName: "juan-DC",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
        "Escuela de Desarrollo Web",
        "Escuela de Desarrollo de Video juegos",
    ],
});

const miguel = new Student({
    name: "Miguelito",
    userName: "miguelFelix",
    email:"miguelF@migue.com",
    instagram: "migue-lix",
    learningPaths: [
        "Escuela de Desarrollo Web",
        "Escuela de Data Science",
    ],
});