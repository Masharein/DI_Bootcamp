import { createStore } from 'redux'

export const initialState = { count : 0}
function counterReducer(state = initialState, action) {
    if (action.type === 'INCREMENT') return { count: state.count + 1}; 
    if (action.type === 'DECREMENT') return { count: state.count - 1}; 
    return state;
}

export const store = createStore(counterReducer)

