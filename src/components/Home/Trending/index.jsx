import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTrending } from '../../../redux/Actions/Trend'
import './index.scss'
import Menu from '../Menu'
import MovieList from '../MovieList'

function  Trending() {
    const trend = useSelector(state => state.trending)
    const activeIndex= useSelector(state => state.trending.activeIndex)
    const dispatch = useDispatch()

    const trendingFunction = (index) => {
        if (index !== activeIndex) {
            dispatch(activate(index))
        }
    }
    const getFilms = () => {
        dispatch(getTrending())
    }
    useEffect(()=>{
        dispatch(getTrending())
    },[activeIndex])

    return(
        <div className="trending">
            <div className="trend">
                <h2>Trending</h2>
                <Menu data={trend} fn={trendingFunction}/>
            </div>
            <MovieList data={trend.movies} fn={getFilms}/>
        </div>
    )
}

export default Trending