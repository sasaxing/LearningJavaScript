import * as chai from 'chai'
import chaiRedux from 'chai-redux'

const reduxChai: any = chai.use(chaiRedux)

function reducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = reduxChai.createReduxStore({ reducer })

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
console.log(store)