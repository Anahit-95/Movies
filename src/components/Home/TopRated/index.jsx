import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTop } from '../../../redux/Actions/TopAct'
import './index.scss'
import Menu from '../Menu'
import MovieList from '../MovieList'

function Free(){
    const free=useSelector(state => state.topRated)
    const activeIndex=useSelector(state => state.topRated.activeIndex)
    const dispatch=useDispatch()
    const freeFunction = (index) => {
        if (index !== activeIndex) {
            dispatch(activate(index))
        }
    }
    const getFilms = () => {
        dispatch(getTop())
    }

    useEffect(()=>{
        dispatch(getTop())
    },[activeIndex])

    return(
        <div className="free">
                <div className="fr">
                    <h2>Top Rated</h2>
                    <Menu data={free} fn={freeFunction}/>
                </div>
                <MovieList data={free.movies} fn={getFilms}/>
            </div>
    )
}

export default Free