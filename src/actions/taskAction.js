import * as TYPE from '../constants/actionType';

export function addTask(task) {
    return {
        type: TYPE.ADD_TASK,
        task: task
    };
}

export function deleteTask(taskId) {
    return {
        type: TYPE.DELETE_TASK,
        taskId: taskId
    };
}

export function updateTask(taskId, task) {
    return {
        type: TYPE.UPDATE_TASK,
        taskId: taskId,
        task: task
    };
}

export function getAllTasks() {
    return {
        type: TYPE.GET_TASKS
    };
}

