import * as types from '../constants/index'

const changeConstructor = payload => ({
    type: types.CHANGE_CONSTRUCTOR,
    payload
});

const changeTrainer = payload => ({
    type: types.CHANGE_TRAINER,
    payload
});

export {
    changeConstructor,
    changeTrainer
}