import Team from '../app';

// test.each([
//   ['nickname', true],
//   ['Nickname', true],
//   ['n_ickname', true],
//   ['nic_ckanme', true],
//   ['n-ickname', true],
//   ['ni-ckname', true],
//   ['nicknam_e', true],
//   ['nicknam-e', true],
//   ['n9ickname', true],
//   ['nicknam9e', true],
//   ['ni_-ckname', true],
//   ['nic_-34kname', true],
//   ['n84ck294name', true],
//   ['n8-i3_c5-k4n2a5m6e', true],
//   ['5nickanme', false],
//   ['nickname4', false],
//   ['n8472ickname', false],
//   ['n239482ck724name', false],
//   ['n=i ck\na.m,e', false],
// ])('Testing Validator regexp', (nickname, expected) => {
//   const validator = new Validator(nickname);
//   expect(validator.validateUser()).toBe(expected);
// });

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
