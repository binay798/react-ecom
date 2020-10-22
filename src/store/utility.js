import produce from 'immer';



export function getNewState(oldState) {
    let nextState = produce(oldState,next => {
        return next
    });

    return nextState
}