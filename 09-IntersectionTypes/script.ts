/**
 * * Intersection Types ähnlich Extended Interfaces, aber eher
 * * Kombination von TypeAliases (keine echte Erweiterung)
 */

type User = {
  name: string,
  age: number,
  courses: string[]
};

type UserSex = {
  sex: string
};

type UserExtended = User & UserSex;

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
  sex: 'female'
}

console.log(user2);
