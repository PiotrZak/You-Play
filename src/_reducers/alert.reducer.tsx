import {alertConstants} from '../_constants'

const initialState = {
    alerts: [],
}

//@ts-ignore
export  function alert(state = initialState, { type, payload }) {

    switch(type) {
        case alertConstants.SUCCESS:
//@ts-ignore
            state.alerts.push(payload)
            return {...state}
        case alertConstants.WARN:
//@ts-ignore
            state.alerts.push(payload)
            return {...state}
        case alertConstants.ERROR:
//@ts-ignore
            state.alerts.push(payload)
            return {...state}
        case alertConstants.INFO:
//@ts-ignore
            state.alerts.push(payload)
            return {...state}
        case alertConstants.CLEAR:
//@ts-ignore
            state.alerts = state.alerts.filter(alert => alert.id !== payload.index)
            return {...state}
        default:
            return state
    }
}