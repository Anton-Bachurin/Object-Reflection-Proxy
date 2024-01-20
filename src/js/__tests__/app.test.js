import { characterCondition, characters, sorting } from '../app';

test ('character is healthy', () => {
  const magician = {
    name: 'маг',
    health: 90
  }

  let result = characterCondition(magician);
  expect(result).toBe('healthy');
});

test ('character is wounded', () => {
    const archer = {
      name: 'стрелок',
      health: 43
    }
  
    let result = characterCondition(archer);
    expect(result).toBe('wounded');
  });

  test ('character is critical', () => {
    const swordsman = {
      name: 'мечник',
      health: 2
    }
  
    let result = characterCondition(swordsman);
    expect(result).toBe('critical');
  });

  test ('sorting is correct', () => {
    const sortedCharacters = [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]

    expect(sortedCharacters).toEqual(sorting(characters))
  });