function Student(
  name,
  lastname,
  age,
  aprovedCourses,
  aprovedCarers,
) {
  if (!arguments.length) throw new Error("Debes poner parámetros");
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.aprovedCarers = aprovedCarers;
  this.aprovedCourses = aprovedCourses;
  // this.addAprove(type, course) {
  //   this[type].unshift(course);
  // }
}

Student.prototype.addAprove = (type, course) => {
  console.log(this[type], this);
  this[type].unshift(course);
}

const Derek = new Student("Derek", "Paúl", 18, ["JS in CSS"], []);

class Student2 {
  constructor({
    name,
    lastname,
    age,
    aprovedCarers = [],
    aprovedCourses = []
  }) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.aprovedCarers = aprovedCarers;
    this.aprovedCourses = aprovedCourses;
    console.log(this);
  }

  addAprove(type, value) {
    this[type].unshift(value);
  }
}

const Sasha = new Student2({
  name: "Sasha",
  lastname: "Paúl",
  aprovedCourses: ["S in SS"],
  age: 8,
});
