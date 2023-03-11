import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';

let state: StateType;

beforeEach(() => {
    state = {
        collapsed: false
    }
})

test('collapsed should be true', () => {
    //action
    const newState: StateType =  reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState).not.toBe(state)
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    state = {
        collapsed: true
    }
    //action
    const newState: StateType =  reducer(state, {type: TOGGLE_COLLAPSED})

    //expect
    expect(newState).not.toBe(state)
    expect(newState.collapsed).toBe(false)
})

test('reducer should throw error because action type is incorrect', () => {

    expect(() => {
        reducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError();

})