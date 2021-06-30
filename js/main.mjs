class Comment {
  constructor({
    content,
    student,
    studentRole = "student",
  }) {
    this.content = content;
    this.student = student;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  public() {
    console.log("Public comment", " (" + this.student.name + ")");
    console.log(this.content);
    console.log(this.likes);
  }
}

function videoPlay(id) {
  const urlSecret = "https://static.platzi.com/media/achievements/badges-curso-js-poo-51952eaf-1573-43d6-9b8a-4a19967aa5e9.png/" + id;
  console.log("Play: " + id);
}

function videoStop(id) {
  const urlSecret = "https://static.platzi.com/media/achievements/badges-curso-js-poo-51952eaf-1573-43d6-9b8a-4a19967aa5e9.png/" + id;
  console.log("Stop: " + id);
}

export class Classes {
  constructor({
    name,
    duration,
    isVisited,
    videoSrc,
  }) {
    this.name = name;
    this.duration = duration;
    this.isVisited = isVisited;
    this.viseoSrc = videoSrc;
  }

  play() {
    videoPlay(this.name);
  }

  stop() {
    videoStop(this.name);
  }
}

export class Course {
  constructor(name, classes = []) {
    this.classes = classes;
    this.name = name;
  }
}
export class LearningPaths {
  constructor({
    name,
    logo = null,
    courses = [],
    details,
    isAgregated = false,
  }) {
    this._id = String(Math.floor(Math.random() * 100) + "leaningPath");//Que no lo llamen please 🙏🥺
    this.name = name;
    this.logo = logo;
    this.courses = courses;
    this.details = details;
    this.isAgregated = isAgregated;
  }

  get id() {
    return this._id;
  }

  set id(value) {
    throw new Error("No puedes setear el id");
  }
}

const abstractionIntoJs = new Classes({ name: "Hola", duration: new Date(), });

const coursePOOjs = new Course("Curso de POO", [
  abstractionIntoJs
]);

const escuelaDeProductDesign = new LearningPaths({
  name: "Escuela de Product Design",
  logo: "https://static.platzi.com/media/achievements/badges-curso-js-poo-51952eaf-1573-43d6-9b8a-4a19967aa5e9.png",
  courses: [
    coursePOOjs,
  ],
  details: "Es una escuela asombrosa de producto digital",
});

export class Student {
  #id = String(Math.floor(Math.random() * 10) + "student");

  constructor({
    name,
    email,
    username,
    twitter = undefined,
    facebook = undefined,
    instagram = undefined,
    aprovedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialNetworks = {
      twitter,
      facebook,
      instagram,
    },
    this.aprovedCourses = aprovedCourses;
    this.learningPaths = learningPaths;
  }

  publicComment(content) {
    const comment = new Comment({
      content,
      student: {
        name: this.name,
        email: this.email,
      },
    });
    comment.public();
  }
}
