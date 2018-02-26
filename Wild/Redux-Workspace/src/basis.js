let createStore = require('redux').createStore

function reducer(state, action) {
    switch (action.type) {
        case 'PUBLISH':
            return Object.assign({}, state, { published: true })
        default:
            return state
    }
}

let article = { title: 'Global Warming' }
let store = createStore(reducer, article)

console.log(store.getState())

store.dispatch({ type: 'PUBLISH' })
console.log(store.getState())