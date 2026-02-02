/**
 * * Interfaces erweiterbar machen
 */

interface User {
  name: string,
  age: number,
  courses: string[]
};

interface UserExtended extends User {
  permissionLevel: string,
};

const user1: User = {
  name: 'Andreas',
  age: 25,
  courses: ['C', 'C++', 'Python', 'TypeScript']
}

console.log(user1);

const user2: UserExtended = {
  name: 'Sabine',
  age: 42,
  courses: ['Java', 'C#'],
  permissionLevel: 'Instructor'
}

console.log(user2);

function printUser(user: {name: string; age: number; courses: string[] }) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.courses);

  return user;
}

printUser(user2);
