import {alertConstants} from '../_constants'

let id = 0
let defaultDelay = 500000

export const alertActions = {
    success,
    warn,
    error,
    clear,
    info,
}

function success(msg:string, delay = defaultDelay) {
    return {
        type: alertConstants.SUCCESS,
        payload: {
            type: 'success',
            message: msg,
            delay: delay,
            id: id++
        }
    }
}

function warn(msg:string, delay = defaultDelay) {
    return {
        type: alertConstants.WARN,
        payload: {
            type: 'warning',
            message: msg,
            delay: delay,
            id: id++
        }
    }
}

function error(msg:string, delay = defaultDelay) {
    return {
        type: alertConstants.ERROR,
        payload: {
            type: 'danger',
            message: msg,
            delay: delay,
            id: id++
        }
    }
}

function info(msg:string, delay = defaultDelay) {
    return {
        type: alertConstants.INFO,
        payload: {
            type: 'info',
            message: msg,
            delay: delay,
            id: id++
        }
    }
}

function clear(index:any) {
    return {
        type: alertConstants.CLEAR,
        payload: {
            index: index
        }
    }
}