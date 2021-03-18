import trailerState from '../State/trailer'

function trailerRed(state=trailerState,action) {
    let temp={...state}
    if (action.type=="ActivE") {
        temp.activeIndex=action.index
        temp.currentPage=1
        temp.movies=[]
    }
    if (action.type=="GetMovies") {
        if (temp.currentPage !== action.page) {
            temp.movies.push(...action.data)
        }
        temp.currentPage=action.page
    }
    return temp
}
export default trailerRed