const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Mike',
    email: 'mike@example.com',
    password: '56what!!'
}

beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

// test('Should signup a new user', async () => {
//     await request(app).post('/users').send({
//         name: 'Joshua',
//         email: 'jlb135190@gmail.com',
//         password: 'MyPass777!'
//     }).expect(201)
// })

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: 'jlb135190@gmail.com',
        password: 'MyPass777!'
    }).expect(200)
})

// test('Should not login non-existent user', async () => {
//     await request(app).post('/users/login').send({
//         email: 'jlb135190@gmail.com',
//         password: 'MyPass777!'
//     }).expect(400)
// })