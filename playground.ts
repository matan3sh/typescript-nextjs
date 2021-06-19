interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string,
//   age: number
// }

export default function play() {
  const name = 'Matan';
  const age = 31;

  const person: Person = {
    name: 'John',
    age: 34,
  };

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);
    return info;
  }

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, Age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
