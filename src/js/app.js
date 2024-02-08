// TODO: write your code here

export const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export const order = ['name', 'level'];

export const orderedPerson = [];

export  function orderByProps(obj) {
          for (prop in obj) {
            for (let i = 0; i < order.length; i++) {
              if (prop === order[i]) {
                orderedPerson.push(`key: ${prop}, value: ${obj[prop]}`);
              }

              if (prop !== order[i]) {
                function compareArguments()
              }
            }
          }
        }
  
orderByProps(person);
console.log(orderedPerson);