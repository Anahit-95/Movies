import popularState from '../State/popular'

function popularRed(state=popularState,action){
    let temp={...state}
    if (action.type=="Active") {
        temp.activeIndex=action.index
        temp.currentPage=0
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

export default popularRed