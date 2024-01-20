// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function characterCondition(character) {
  if (character.health > 50) {
    return 'healthy';
  } else if (character.health > 14) {
    return 'wounded';
  } else {
    return 'critical';
  }
}

export const characters = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

export function sorting(items) {
  return items.sort((a, b) => b.health - a.health);
}
