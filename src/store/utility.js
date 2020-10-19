import produce from 'immer';



export function getNewState(oldState) {
    let newState = produce(oldState,next => {
        return next;
    })

    return newState
}