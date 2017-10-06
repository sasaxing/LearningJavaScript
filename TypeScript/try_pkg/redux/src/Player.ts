import { createStore } from 'redux'
import * as deepMerge from 'deepmerge'

const reducer = (state = {}, action) => {
    switch (action.type) {
        /**
         * why not : Object.assign({}, state, { ... })
         * 
         * because it can't merge the same property with diff contents,
         * instead, it overwrites the first one.
         * 
         *  Object.assign({}, {p1:{a:1, b:1}}, {p1:{c:1}}) -> {p1:{c:1}}
         *  but {p1:{a:1, b:1, c:1}} is expected.
         */
        case 'SETUP':
            return deepMerge(state, {
                [action.target]: {
                    isSetup: 'In Progress...',
                    other: 'other'
                }
            })
        case 'SENDMSG':
            return deepMerge(state, {
                [action.target]: {
                    comm: 'sending'
                }
            })
        default:
            return state
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'SETUP' })
store.dispatch({ type: 'SENDMSG' })
store.dispatch({ type: 'ALALALA' })