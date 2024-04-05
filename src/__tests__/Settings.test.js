import Settings from '../js/Settings';

test('testing setter and getter config()', () => {
  const testSettings = new Map([
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy']
  ]);

  const settings = new Settings();
  settings.config = ['music', 'rock'];

  const result = settings.config;

  expect(result).toEqual(testSettings);
});

test('testing setter and getter config() invalid parameter', () => {
  const testSettings = new Map([
    ['theme', 'rock'],
    ['music', 'trance'],
    ['difficulty', 'easy']
  ]);

  const settings = new Settings();
  settings.config = ['theme', 'rock'];
  settings.config = ['invalid', 'rock'];
  settings.config = ['invalid', 'ivalid'];

  const result = settings.config;

  expect(result).not.toEqual(testSettings);
});