import freeState from '../State/free'

function freeRed(state=freeState,action){
    let temp={...state}
    if(action.type=="active"){
        temp.activeIndex=action.index
        temp.currentPage=0
        temp.movies=[]
    }
    if (action.type=="GetTop") {
        if (temp.currentPage !== action.page) {
            temp.movies.push(...action.data)
        }
        temp.currentPage=action.page
    }
    return temp
}
export default freeRed