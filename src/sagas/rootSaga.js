import {put, takeLatest, all} from "redux-saga/effects";
import * as types from "../constants/actionType";
import Util from '../utils/utls';


// Workers

/*
* users
* */
export function* addUser(action) {
    try {
        // const res = yield call(service api, url);
        const user = action.user;
        user.id = Util.randomId();
        yield put({ type: types.ADD_USER_SUCCESS, user });

    } catch (e) {
        yield put({ type: types.ADD_USER_ERROR });
    }
}

export function* getUsers() {
    try {
        // const user = yield call(service api, url);
        const users = [
            {
                "id": 1211253443,
                "name": "Kenny"
            },
            {
                "id": 2235235246,
                "name": "Vivian"
            }
        ];

        yield put({ type: types.GET_USERS_SUCCESS, users });
    } catch (e) {
        yield put({ type: types.GET_USERS_ERROR });
    }
}

export function* updateUser(action) {
    try {
        // const res = yield call(service api, url);
        const user = action.user;

        yield put({ type: types.UPDATE_USER_SUCCESS, user });
    } catch (e) {
        yield put({ type: types.UPDATE_USER_ERROR });
    }
}

/*
* tasks
* */
export function* addTask(action) {
    try {
        // const res = yield call(service api, url);
        const task = action.task;
        task.id = Util.randomId();

        yield put({ type: types.ADD_TASK_SUCCESS, task });

    } catch (e) {
        yield put({ type: types.ADD_TASK_ERROR });
    }
}

export function* deleteTask(action) {
    try {
        // const res = yield call(service api, url);
        const taskId = action.taskId;

        yield put({ type: types.DELETE_TASK_SUCCESS, taskId });

    } catch (e) {
        yield put({ type: types.DELETE_TASK_ERROR });
    }
}

export function* updateTask(action) {
    try {
        // const res = yield call(service api, url);
        const task = action.task;


        yield put({ type: types.UPDATE_TASK_SUCCESS, task });

    } catch (e) {
        yield put({ type: types.UPDATE_TASK_ERROR });
    }
}

export function* getTasks() {
    try {
        // const tasks = yield call(service api, url);
        const tasks = [
            {
                "id": 1,
                "name": "Dish washing",
                "description": "This include lunch box content",
                "user": 1211253443,
                "lastModified": 1575343487782
            },
            {
                "id": 2,
                "name": "Garbage collection",
                "description": "This only include taking garbage to the grage",
                "user": 2235235246,
                "lastModified": 1575343487782
            }
        ];

        yield put({ type: types.GET_TASKS_SUCCESS, tasks });
    } catch (e) {
        yield put({ type: types.GET_TASKS_ERROR });
    }
}


// Watchers
export function* watchers() {

    yield takeLatest(types.ADD_USER, addUser);
    yield takeLatest(types.GET_USERS, getUsers);
    yield takeLatest(types.UPDATE_USER, updateUser);

    yield takeLatest(types.ADD_TASK, addTask);
    yield takeLatest(types.GET_TASKS, getTasks);
    yield takeLatest(types.DELETE_TASK, deleteTask);
    yield takeLatest(types.UPDATE_TASK, updateTask);

}

export function* rootSaga() {
    yield all([
        watchers()
    ])
}

