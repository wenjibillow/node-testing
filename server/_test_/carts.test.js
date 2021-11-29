const app = require('../app')
const supertest = require('supertest')
const request = supertest(app)
const db = require('../database')

afterEach(async function () {
  // delete any data created by test
  db.cleanUp()
})

it('get cart', async () => {
  const res = await request.get('/api/carts/:userLogin')
  expect(res.status).toBe(200)
  expect(res.body).toStrictEqual([])
})

it('add item to cart', async () => {
  const cartItem = {
    productId: '456',
    amount: 39
  }
  const res = await request.post('/api/carts/:userLogin/').send(cartItem)
  expect(res.status).toBe(200)
  const response = await request.get('/api/carts/:userLogin/')
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual([cartItem])
})

it('uppdate product that is already exited in the cart', async () => {
  const CartItem = {
    productId: '123',
    amount: 49
  }
  const res = await request.post('/api/carts/:userLogin/').send(CartItem)
  expect(res.status).toBe(200)
  const editedCartItem = {
    productId: '123',
    amount: 50
  }
  const response = await request
    .put('/api/carts/:userLogin/' + editedCartItem.productId)
    .send(editedCartItem)
  expect(response.status).toBe(200)
  console.log('body', response.body)
  console.log('items', editedCartItem)
  expect(response.body).toStrictEqual([editedCartItem])
})

it('delete item', async () => {
  const cartItem = {
    productId: '123',
    amount: 49
  }
  const res = await request.post('/api/carts/:userLogin/').send(cartItem)
  expect(res.status).toBe(200)
  const response = await request.delete(
    '/api/carts/:userLogin/' + cartItem.productId
  )
  expect(response.status).toBe(200)
  expect([])
})
