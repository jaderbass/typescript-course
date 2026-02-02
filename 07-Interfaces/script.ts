/**
 * * Interfaces sind ähnlich TypeAlias
 * * Interfaces können erweutert werden (siehe nächstes Kapitel!),
 * * TypeAliases sind fest
 */

type User = {
  name: string,
  age: number,
  courses: string[]
};

interface UserInterface {
  name: string,
  age: number,
  courses: string[]
};

const user1: User = {
  name: 'Andreas',
  age: 25,
  courses: ['C', 'C++', 'Python', 'TypeScript']
}

console.log(user1);

const user2: UserInterface = {
  name: 'Sabine',
  age: 42,
  courses: ['Java', 'C#']
}

console.log(user2);

function printUser(user: {name: string; age: number; courses: string[] }) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.courses);

  return user;
}

printUser(user2);
