// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('(123) 456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('123-456-7890 is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('123456 is not a valid phone number', () => {
  expect(isPhoneNumber('123456')).toBe(false);
});
test('abcd-efg-hijk is not a valid phone number', () => {
  expect(isPhoneNumber('abcd-efg-hijk')).toBe(false);
});

// isEmail
test('test@email.com is a valid email', () => {
  expect(isEmail('test@email.com')).toBe(true);
});
test('hello@domain.org is a valid email', () => {
  expect(isEmail('hello@domain.org')).toBe(true);
});
test('notanemail is not a valid email', () => {
  expect(isEmail('notanemail')).toBe(false);
});
test('missing@dotcom is not a valid email', () => {
  expect(isEmail('missing@dotcom')).toBe(false);
});

// isStrongPassword
test('Hello123 is a strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('Abcde_1 is a strong password', () => {
  expect(isStrongPassword('Abcde_1')).toBe(true);
});
test('hi is not a strong password', () => {
  expect(isStrongPassword('hi')).toBe(false);
});
test('1startsWithNumber is not a strong password', () => {
  expect(isStrongPassword('1startsWithNumber')).toBe(false);
});

// isDate
test('1/1/2000 is a valid date', () => {
  expect(isDate('1/1/2000')).toBe(true);
});
test('12/31/2023 is a valid date', () => {
  expect(isDate('12/31/2023')).toBe(true);
});
test('13-01-2020 is not a valid date', () => {
  expect(isDate('13-01-2020')).toBe(false);
});
test('2023/1/1 is not a valid date', () => {
  expect(isDate('2023/1/1')).toBe(false);
});

// isHexColor
test('#fff is a valid hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('A1B2C3 is a valid hex color', () => {
  expect(isHexColor('A1B2C3')).toBe(true);
});
test('GGGGGG is not a valid hex color', () => {
  expect(isHexColor('GGGGGG')).toBe(false);
});
test('#12345 is not a valid hex color', () => {
  expect(isHexColor('#12345')).toBe(false);
});
