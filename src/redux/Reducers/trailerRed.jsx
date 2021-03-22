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
    }
    if (action.type == "SetVideo") {
        temp.video = action.data
        temp.movies[action.index].video="https://www.youtube.com/embed/"+action.data.key
    }
    return temp
}
export default trailerRed