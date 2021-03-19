import trailerState from '../State/trailer'

function trailerRed(state=trailerState,action) {
    let temp={...state}
    if (action.type == "ActivE") {
        temp.activeIndex=action.index
        temp.currentPage=0
        temp.movies=[]
        temp.videos=[]
    }
    if (action.type == "GetTrailer") {
        if (temp.currentPage !== action.page) {
            temp.movies.push(...action.data)
        }
        temp.currentPage = action.page
        // temp.movies.push(...action.data)
    }
    if (action.type == "GetVideos") {
        temp.videos.push(action.data)
        // temp.videos=action.data
        console.log(temp.videos)
    }
    return temp
}
export default trailerRed