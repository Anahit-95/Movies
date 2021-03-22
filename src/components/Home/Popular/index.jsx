import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getMovies } from '../../../redux/Actions/Popular'
import Menu from '../Menu'
import MovieList from '../MovieList'
import './index.scss'

function Popular(){
    const popular = useSelector(state => state.popular)
    const activeIndex=useSelector(state => state.popular.activeIndex)
    const dispatch = useDispatch()

    const popularFunction = (index) =>{
        if (index !== activeIndex) {
            dispatch(activate(index))
        }
    }

    const getFilms = () => {
        dispatch(getMovies())
    }

    useEffect(()=>{
        dispatch(getMovies())
    },[activeIndex])

    return(
        <div className="popular">
                <div className="pop">
                    <h2>What's Popular</h2>
                    <Menu data={popular} fn={popularFunction}/>
                </div>
                <MovieList data={popular.movies} fn={getFilms}/>
            </div>
    )
}

export default Popular