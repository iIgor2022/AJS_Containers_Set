import Team from '../app';

test('Testing adding new member to a team', () => {
  const team = new Team();
  const character = {
    name: 'Ivan',
  };
  team.add(character);
  expect(team.members).toContain(character);
});

test('Testing adding new members to a team', () => {
  const team = new Team();
  const characterList = new Set([
    {
      name: 'Ivan',
    },
    {
      name: 'Pavel',
    },
    {
      name: 'Olga',
    },
  ]);
  team.addAll(
    {
      name: 'Ivan',
    },
    {
      name: 'Pavel',
    },
    {
      name: 'Olga',
    },
  );
  expect(team.members).toEqual(characterList);
});

test('Testing adding existing member to a team', () => {
  const team = new Team();
  const character = {
    name: 'Ivan',
  };
  team.add(character);
  expect(() => team.add(character)).toThrow('Character is already added!');
});

test('Testing convert set of members to a array', () => {
  const team = new Team();
  const characterList = [
    {
      name: 'Ivan',
    },
    {
      name: 'Pavel',
    },
    {
      name: 'Olga',
    },
  ];
  team.addAll(
    {
      name: 'Ivan',
    },
    {
      name: 'Pavel',
    },
    {
      name: 'Olga',
    },
  );
  const received = team.toArray();
  expect(received).toEqual(characterList);
});
