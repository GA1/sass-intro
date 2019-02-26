const emailsString = `
a b <a@b.com>
c d <c@d.com>
`

const getStringBetweenLowerGreaterCharacters = s =>
  s.substring(
    s.lastIndexOf('<') + 1,
    s.lastIndexOf('>')
  );


const emailsSplitByComas = emailsString
  .trim()
  .split(/\n/)
  .map(line => getStringBetweenLowerGreaterCharacters(line))
  .join(',\nz')

console.log(emailsSplitByComas)