import axios from "axios"
let url1="https://api.themoviedb.org/3/"
let url3="?api_key=d81911f68041024d627e7e0a63a3a622&page="

export function activate(index) {
    return{
        type:"ACTIVE",
        index
    }
}

export function getTrending(){
    return function (dispatch, getState) {
        const state = getState();
        let url=url1+state.trending.urls[state.trending.activeIndex]+url3
        axios.get(url+(state.trending.currentPage + 1))
            .then(r=>{
                dispatch(getTrendingList(r.data.results,state.trending.currentPage + 1))
            })
    }
}

export function getTrendingList(data,page) {
    return{
        type:"GetTrending",
        data,
        page
    }
}