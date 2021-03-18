import trendingState from '../State/trending'

function trendingRed(state=trendingState,action) {
    let temp={...state}
    if (action.type=="ACTIVE") {
        temp.activeIndex=action.index
        temp.currentPage=0
        temp.movies=[]
    }
    if (action.type=="GetTrending") {
        if (temp.currentPage !== action.page) {
            temp.movies.push(...action.data)
        }
        temp.currentPage=action.page
    }
    return temp
}

export default trendingRed