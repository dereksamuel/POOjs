class LearningPaths {
  constructor({
    name,
    logo = null,
    courses = [],
    details,
    isAgregated = false,
  }) {
    this.name = name;
    this.logo = logo;
    this.courses = courses;
    this.details = details;
    this.isAgregated = isAgregated;
  }
}

const escuelaDeProductDesign = new LearningPaths({
  name: "Escuela de Product Design",
  logo: "https://static.platzi.com/media/achievements/badges-curso-js-poo-51952eaf-1573-43d6-9b8a-4a19967aa5e9.png",
  courses: [
    "Medios Audiovisuales",
    "Diseño de Interfaces"
  ],
  details: "Es una escuela asombrosa de producto digital",
});

class Student {
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
}

const Derek = new Student({
  name: "Derek",
  username: "pipaplutarco",
  email: "dereksamuelgr@gmail.com",
  learningPaths: {
    ...escuelaDeProductDesign,
    isAgregated: escuelaDeProductDesign.isAgregated = true,
  },
});
