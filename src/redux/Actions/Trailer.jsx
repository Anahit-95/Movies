import axios from "axios"
let url1="https://api.themoviedb.org/3/"
let url3="?api_key=d81911f68041024d627e7e0a63a3a622"

export function activate(index) {
    return{
        type:"ActivE",
        index
    }
}

export function getTrailers(){
    return function (dispatch, getState) {
        const state = getState();
        let url=url1+state.trailer.urls[state.trailer.activeIndex]+url3
        axios.get(url+ "&page=" + (state.trailer.currentPage + 1))
            .then(r=>{
                dispatch(getTrailerList(r.data.results, state.trailer.currentPage + 1))
        })
    }
}

// export function getVideos(movies, text, page) {
//     return function (dispatch) {
//         movies.map((elm) => {
//             let url = url1 + text + elm.id + "/videos" + url3
//             axios.get(url)
//             .then(r=>{
//                 // console.log(r.data)
//                 // vid.push(r.data.results[0])
//                 dispatch(getVideosList(r.data.results[0],page))
//             })
//         })
//     }
// }

export function getVideo(movie, text, index) {
    return function (dispatch) {
        let url = url1 + text + movie.id + "/videos" + url3
        axios.get(url)
        .then(r=>{
            console.log(r.data.results[0])
            dispatch(setVideo(r.data.results[0],index))
        })
    }
}

export function setVideo(data,index) {
    return{
        type:"SetVideo",
        data,
        index
    }
}

export function getTrailerList(data,page) {
    return{
        type:"GetTrailer",
        data,
        page
    }
}
