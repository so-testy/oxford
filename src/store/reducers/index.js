import * as types from '../constants/index';

const initialState = {
    constructor: {
        title: "Test name",
        description: "Type the test description",
        complexity: ['HARD', 'MEDIUM', 'EASY'],
        type: ['SELECT', 'UPDATE', 'DELETE', 'INSERT'],
        tasks: [],
        isOpenSubmitForm: false,
        color: '#EDE7F6',
        link: '',
    },
    trainer: {
        isTestStarted: false,
        isTestCompleted: false,
        tasks: [],
        color: '#EDE7F6',
        sql: ''
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_CONSTRUCTOR:
            return {
                ...state,
                constructor: action.payload
            };

        case types.CHANGE_TRAINER:
            return {
                ...state,
                trainer: action.payload
            };

        default:
            return state;
    }
};

export default reducer;