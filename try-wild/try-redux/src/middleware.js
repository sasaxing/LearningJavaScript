let createStore = require('redux').createStore
let applyMiddleware = require('redux').applyMiddleware

function reducer(state, action) {
    switch (action.type) {
        case 'PUBLISH':
            return Object.assign({}, state, { published: true })
        default:
            return state
    }
}

const logger = store => dispatch => action => {
    console.log('Dispatching:', action.type)
    console.log('Old state:', store.getState())
    var result = dispatch(action) // the real redux-action-dispatch operation
    console.log('New state:', store.getState())
    return result
}

let article = { title: 'Global Warming' }
let store = createStore(reducer, article, applyMiddleware(logger))
//middleware are just functions that make dispatch to do something else.

console.log(store.getState())

store.dispatch({ type: 'PUBLISH' })
console.log(store.getState())