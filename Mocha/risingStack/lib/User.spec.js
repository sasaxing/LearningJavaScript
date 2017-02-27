'use strict'

const User = require('./User')
const expect = require('chai').expect

describe('User module', () => {
    describe('"up"', () => {
        it('should export a function', () => {
            expect(User.up).to.be.a('function')
        })
        it('should return a Promise', () => {
            const usersUpResult = User.up()
            expect(usersUpResult.then).to.be.a('function')
            expect(usersUpResult.catch).to.be.a('function')
        })
        it('should create a table named "users"', () => {
            return User.up()
                .then(() => db.schema.hasTable('users'))
                .then((hasUsersTable) => expect(hasUsersTable).to.be.true)
        })
    })
})
