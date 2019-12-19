export const viewConst = {
    SHOW: "SHOW",
    HIDE: "HIDE",
    SHOWTX: "SHOWTX",
    HIDETX: "HIDETX",
}
export const viewActions = {
    show,
    hide,
    showTx,
    hideTx,
}
function show() {
    return (dispatch:any) => {
        dispatch({type: viewConst.SHOW})
    }
}
function hide() {
    return (dispatch:any) => {
        dispatch({type: viewConst.HIDE})
    }
}
function showTx(tx:any) {
    return {type: viewConst.SHOWTX, tx: tx}
}
function hideTx() {
    return {type: viewConst.HIDETX}
}