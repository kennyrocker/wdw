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

        /*---------------------------------*/
        /*/////////////  USER  /////////// */
        /*---------------------------------*/

        // ADD USER
        case TYPE.ADD_USER:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    addUserPending: true
                }
            };

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


        // UPDATE USER
        case TYPE.UPDATE_USER:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateUserPending: true
                }
            };

        case TYPE.UPDATE_USER_SUCCESS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateUserPending: false
                },
                user: [
                    ...state.user.map(obj => (obj.id === action.user.id) ? action.user : obj)
                ]
            };

        case TYPE.UPDATE_USER_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateUserPending: false,
                    updateUserError: {
                        message: 'Update User Error'
                    }
                }
            };


        // GET USERS
        case TYPE.GET_USERS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    fetchUserPending: true
                }
            };

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
            };

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
            };



        /*---------------------------------*/
        /*/////////////  TASK  /////////// */
        /*---------------------------------*/

        // ADD TASKS
        case TYPE.ADD_TASK:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    addTaskPending: true
                }
            };

        case TYPE.ADD_TASK_SUCCESS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    addTaskPending: false,
                    addTaskError: null
                },
                task: [
                    ...state.task,
                    action.task
                ]
            };

        case TYPE.ADD_TASK_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    addTaskPending: false,
                    addTaskError: {
                        message: 'Add Task Error'
                    }
                }
            };


        // DELETE TASK
        case TYPE.DELETE_TASK:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateTaskPending: true
                }
            };

        case TYPE.DELETE_TASK_SUCCESS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateTaskPending: false
                },
                task: state.task.filter((i) => i.id !== action.taskId)
            };

        case TYPE.DELETE_TASK_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateTaskPending: false,
                    updateTaskError: {
                        message: 'Delete Task Error'
                    }
                }
            };

        // UPDATE_TASK
        case TYPE.UPDATE_TASK:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateTaskPending: true
                }
            };

        case TYPE.UPDATE_TASK_SUCCESS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateTaskPending: false
                },
                task: [
                    ...state.task.map(obj => (obj.id === action.task.id) ? action.task : obj)
                ]
            };

        case TYPE.UPDATE_TASK_ERROR:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    updateTaskPending: false,
                    updateTaskError: {
                        message: 'Error Update Task Response User'
                    }
                }
            };


        // GET TASKS
        case TYPE.GET_TASKS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    fetchTaskListPending: true
                }
            };

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
            };

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
            };


        default:return state;

    }
}

export default appReducer;