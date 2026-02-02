const user1 = {
  name: 'Andreas',
  age: 25,
  courses: ['C', 'C++', 'Python', 'TypeScript']
}

console.log(user1);

const user2 = {
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

const user3 = printUser(user2);

printUser(user3);
