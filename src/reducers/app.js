import * as TYPE from '../constants/actionType';


const initialState = {
    user: [],
    task: []
};


function appReducer(state = initialState, action) {
    switch(action.type) {

        case TYPE.GET_USERS:
            return state.user;
        break;

        case TYPE.ADD_USER:
            const newState = {
                user: [
                    ...state.user,
                    action.user
                ],
                task: state.task
            }
            return newState;
        break;

        default:
            return state;
        break;
    }
}

export default appReducer;