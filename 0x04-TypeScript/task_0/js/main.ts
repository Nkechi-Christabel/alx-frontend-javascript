interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Yoshi',
  lastName: 'Mario',
  age: 32,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'Abuja',
};

const studentList: Student[] = [student1, student2]

const table = document.createElement('table');

studentsList.forEach(student => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
