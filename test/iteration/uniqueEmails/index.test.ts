import uniqueEmails from '../../../src/lib/iteration/uniqueEmails';

describe('uniqueEmails', () => {
  it('should return unique emails', () => {
    const emails = [
      'test.email+will@test.com',
      'test.e.mail+maria.cathy@test.com',
      'testemail+peter@t.est.com',
      'testemail+peter.smith@t.est.com',
    ];

    const { results, size } = uniqueEmails(emails);
    expect(results).toEqual(['testemail@test.com', 'testemail@t.est.com']);
    expect(size).toEqual(2);
  });
});
