import homeState from '../State/home'

function homeRed(state=homeState,action){
    let temp={...state}
    if (action.type=="Open") {
        temp.openClose="menu open"
    }
    if (action.type=="Close") {
        temp.openClose="menu close"
    }
    return temp
}
export default homeRed