const capitalize = require('./capitalize');

test('after capitilizing the string', () => {
  expect(capitalize('tupa')).toBe('TUPA');
});