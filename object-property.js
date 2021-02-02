const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Mousumi' },
    { id: 41, name: 'Manna' },
    { id: 51, name: 'Deepjol' }
]
const studentNames = students.map(s => s.name);
console.log(studentNames);
const ids = students.map(s => s.id);
console.log(ids);
const bigId = students.filter(s => s.id > 40);
console.log(bigId);
const findId = students.find(s => s.id > 40);
console.log(findId);
