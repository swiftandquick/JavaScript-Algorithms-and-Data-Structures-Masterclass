class Student {
  // Constructor used to create an object.
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance method, returns full name.
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  // Add 1 to tardies every time markLate() is called.  If tardies is 3, return "You are expelled!".
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are expelled!";
    }
    return `${this.firstName} ${this.Name} has been late ${this.tardies} times.`;
  }
  // Add a number to the arrays, return the new array.
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  // Return the average of the scores.
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
  // Class method.
  static EnrollStudents() {
    return "Enrolling students!";
  }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

console.log(firstStudent.fullName());
console.log(secondStudent.fullName());

console.log(firstStudent.markLate());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

console.log(secondStudent.addScore(92));
console.log(secondStudent.addScore(76));

console.log(secondStudent.calculateAverage());

console.log(Student.EnrollStudents());
