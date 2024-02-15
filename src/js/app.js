
export const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export const order = ['name', 'level'];

export const orderedPerson = [];

export function orderByProps(obj) { 
          const keys = Object.keys(obj);
          function pushProps(arr) {         
            for (prop in obj) {
              for (let i = 0; i < arr.length; i++) {
                if (prop === arr[i]) {
                  orderedPerson.push(`key: ${prop}, value: ${obj[prop]}`);
                }  
              }
            }
          }
 
         pushProps(order);
 
         const result = keys.filter(key => !order.includes(key));
         const sortedResult = result.sort();
 
         pushProps(sortedResult);
         return orderedPerson;

        }
        
console.log(orderByProps(person));



