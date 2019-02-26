const A = {'a': 1, 'b': 2}
const B = {'c': 3, 'd': 4}

const f = (a, {c, d}) => {
  console.log(a, c, d)
}

f(1, B)