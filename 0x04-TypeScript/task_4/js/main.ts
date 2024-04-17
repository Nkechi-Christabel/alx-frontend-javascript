// Constants
export const cpp: string = "C++ Subjects";
export const java: string = "Java Subjects";
export const react: string = "React Subjects";

// Teacher object
export let cTeacher: { experienceTeachingC: number } = { experienceTeachingC: 10 };

// Cpp subject
console.log("C++");
setTeacher(cTeacher);
console.log(getRequirements(cpp));
console.log(getAvailableTeacher(cpp));

// Java subject
console.log("Java");
setTeacher(cTeacher);
console.log(getRequirements(java));
console.log(getAvailableTeacher(java));

// React subject
console.log("React");
setTeacher(cTeacher);
console.log(getRequirements(react));
console.log(getAvailableTeacher(react));

// Functions
function setTeacher(teacher: { experienceTeachingC: number }): void {
  cTeacher = teacher;
}

function getRequirements(subject: string): string {
  if (subject === cpp) {
    return "Requirements for C++";
  } else if (subject === java) {
    return "Requirements for Java";
  } else if (subject === react) {
    return "Requirements for React";
  }
}

function getAvailableTeacher(subject: string): string {
  if (subject === cpp) {
    return "Available teacher for C++";
  } else if (subject === java) {
    return "Available teacher for Java";
  } else if (subject === react) {
    return "Available teacher for React";
  }
}
