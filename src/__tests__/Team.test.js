import Character from '../js/Character';
import Team from '../js/Team';

test('testing function add() and throw error', () => {
  const team = new Team();
  const character1 = new Character('Ivan');
  team.add(character1);

  try {
    team.add(character1);
  } catch (error) {
    expect(error.message).toBe('Этот персонаж уже добавлен!!');
  }
});

test('testing function addAll()', () => {
  const team = new Team();
  const character1 = new Character('Ivan');
  const character2 = new Character('Oleg');

  team.addAll(character1, character2);

  const testSet = new Set();
  testSet.add(character1);
  testSet.add(character2);

  expect(testSet).toEqual(team.members);
});

test('testing function toArray()', () => {
  const team = new Team();
  const character1 = new Character('Ivan');
  const character2 = new Character('Oleg');
  team.addAll(character1, character2);

  const result = team.toArray(team.members);

  const testSet = new Set();
  testSet.add(character1);
  testSet.add(character2);
  const testArrSet = [...testSet];

  expect(result).toEqual(testArrSet);
});