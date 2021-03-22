import axios from 'axios'
let url1="https://api.themoviedb.org/3/"
let url3="?api_key=d81911f68041024d627e7e0a63a3a622&page="

export function activate(index){
    return{
        type:"active",
        index
    }
}

export function getTop(){
    return function (dispatch, getState) {
        const state = getState();
        let url=url1+state.topRated.urls[state.topRated.activeIndex]+url3
        axios.get(url+(state.topRated.currentPage + 1))
            .then(r=>{
                dispatch(getTopList(r.data.results,state.topRated.currentPage + 1))
            })
    }
}

export function getTopList(data,page) {
    return{
        type:"GetTop",
        data,
        page
    }
}