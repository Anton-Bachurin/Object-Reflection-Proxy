// TODO: write your code here

export const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export const order = ['name', 'level'];

export const orderedPerson = [];

export function orderByProps(obj) {
  for (prop in obj) {
    if (prop === 'name' || prop === 'level') {
      orderedPerson.push(`key: ${prop}, value: ${obj[prop]}`)
    }
  }
}

orderByProps(person);
console.log(orderedPerson);