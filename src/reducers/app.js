import * as TYPE from '../constants/actionType';


const initialState = {
    user: [],
    task: [],
    ui: {
        addUserPending: false,
        addUserError: null,
        initialFetchUser: true,
        fetchUserPending: false,
        fetchUserError: null,
        updateUserPending: false,
        updateUserError: null,
        addTaskPending: false,
        addTaskError: null,

        initialFetchTaskList: true,
        fetchTaskListPending: false,
        fetchTaskListError: null,
        updateTaskPending: false,
        updateTaskError: null
    }
};




function appReducer(state = initialState, action) {
    switch(action.type) {
        // ADD USER
        case TYPE.ADD_USER:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    addUserPending: true
                }
            }
            break;

        case TYPE.ADD_USER_SUCCESS:
            return {
                ...state,
                user: [
                    ...state.user,
                    action.user
                ],
                ui: {
                    ...state.ui,
                    addUserPending: false,
                    addUserError: null
                }
            }
            break;

        case TYPE.ADD_USER_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    addUserPending: false,
                    addUserError: {
                        message: 'Add User Failed'
                    }
                }
            }
            break;

        // GET USERS
        case TYPE.GET_USERS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    fetchUserPending: true
                }
            }
            break;

        case TYPE.GET_USERS_SUCCESS:
            return {
                ...state,
                user: [
                    ...action.users
                ],
                ui: {
                    ...state.ui,
                    initialFetchUser: false,
                    fetchUserPending: false,
                    fetchUserError: null
                }
            }
            break;

        case TYPE.GET_USERS_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    fetchUserPending: false,
                    fetchUserError: {
                        message: 'Fetch User Error'
                    }
                }
            }
            break;


        // GET TASKS
        case TYPE.GET_TASKS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    fetchTaskListPending: true
                }
            }
            break;

        case TYPE.GET_TASKS_SUCCESS:
            return {
                ...state,
                task: [
                    ...action.tasks
                ],
                ui: {
                    ...state.ui,
                    initialFetchTaskList: false,
                    fetchTaskListPending: false,
                    fetchUserError: null
                }
            }
            break;

        case TYPE.GET_TASKS_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    fetchTaskListPending: false,
                    fetchUserError: {
                        message: 'Fetch Task Error'
                    }
                }
            }
            break;


        default:
            return state;
        break;
    }
}

export default appReducer;