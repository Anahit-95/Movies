import axios from "axios"
let url1="https://api.themoviedb.org/3/"
let url3="?api_key=d81911f68041024d627e7e0a63a3a622&page="

export function activate(index) {
    return{
        type:"Active",
        index
    }
}

export function getMovies(){
    return function (dispatch, getState) {
        const state = getState();
        let url=url1+state.popular.urls[state.popular.activeIndex]+url3
        axios.get(url+(state.popular.currentPage + 1))
            .then(r=>{
                dispatch(getMovieList(r.data.results,state.popular.currentPage + 1))
            })
    }
}


export function getMovieList(data,page) {
    return{
        type:"GetMovies",
        data,
        page
    }
}