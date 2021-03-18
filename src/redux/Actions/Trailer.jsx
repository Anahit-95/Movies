import axios from "axios"
let url1="https://api.themoviedb.org/3/"
let url3="?api_key=d81911f68041024d627e7e0a63a3a622&page="

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
        axios.get(url+(state.trailer.currentPage + 1))
            .then(r=>{
                dispatch(getTrailerList(r.data.results,state.trailer.currentPage + 1))
        })
    }
}

export function getTrailerList(data,page) {
    return{
        type:"GetTrailer",
        data,
        page
    }
}