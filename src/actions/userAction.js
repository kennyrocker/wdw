import * as TYPE from '../constants/actionType';

export function addUser(user) {
    return {
        type: TYPE.ADD_USER,
        user: user
    };
}

export function getUsers() {
    return {
        type: TYPE.GET_USERS
    };
}

export function deleteUser(userId) {
    return {
        type: TYPE.DELETE_USER,
        userId: userId
    };
}

export function updateUser(userId, user) {
    return {
        type: TYPE.UPDATE_USER,
        userId: userId,
        user: user
    };
}