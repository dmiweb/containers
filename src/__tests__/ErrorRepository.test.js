import ErrorRepository from '../js/ErrorRepository';

test.each([
  ['code', 500, 'Internal Server Error'],
  ['code', 999, 'Unknown error'],

])(
  ('testing static class method translate() for %s classes with %i code'),
  (_, code, expected) => {

    const result = ErrorRepository.translate(code)

    expect(result).toBe(expected);
  }
);