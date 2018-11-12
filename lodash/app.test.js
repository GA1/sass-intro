// a file for testing what is returned from flow if any of the intermediate steps returns null/undefined

const lodash = require('lodash/fp')
const flow = lodash.flow
const get = lodash.get
const find = lodash.find

const clickables = {
  items: [
    {
      id: 2,
      clickable: true,
    },
    {
      id: 3,
      clickable: false,
    }
  ]
}

const nonClickables = {
  items: [
    {
      id: 2,
      clickable: false,
    },
    {
      id: 3,
      clickable: false,
    }
  ]
}

const g = flow(
  get('items'),
  find(item => item.clickable),
  get('id')
)

const f = input =>
  input
    .items
    .find(item => item.clickable)
    .id

it.only('finding first clickable with flow', () => {
  expect(g(clickables)).toEqual(2)
  expect(g(nonClickables)).toEqual(undefined)
})

it.only('finding first clickable with es6 functional methods', () => {
  try {
    expect(f(clickables)).toEqual(2)
    expect(f(nonClickables)).toEqual(undefined)
    fail()
  } catch (e) {
    console.log(e)
  }
})

