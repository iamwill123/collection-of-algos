/**
 * @param {string[]} emails
 * @return {object{}}
 */

type EmailType = string[];
type ResultType = {
  results: string[] | unknown[];
  size: number;
};

const uniqueEmails = (emails: EmailType): ResultType => {
  // Using a Set to store unique emails
  let uniqueEmails = new Set();

  for (let email of emails) {
    let [local, domain] = email.split('@');

    // Removing '.' in local part
    local = local.split('.').join('');

    // Ignoring everything after '+' in local part
    if (local.includes('+')) {
      local = local.split('+')[0];
    }

    // Combining the processed local part and the domain part
    uniqueEmails.add(local + '@' + domain);
  }

  // Returning the number of unique emails
  return {
    results: [...uniqueEmails],
    size: uniqueEmails.size,
  };
};

export default uniqueEmails;
