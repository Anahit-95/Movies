import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTrending } from '../../../redux/Actions/Trend'
import './index.scss'
import Menu from '../Menu'
import MovieList from '../MovieList'

function  Trending() {
    const trend = useSelector(state => state.trending)
    const activeIndex= useSelector(state => state.trending.activeIndex)
    const style = "list"
    const dispatch = useDispatch()
    const listRef = useRef()

    const trendingFunction = (index) => {
        dispatch(activate(index))
    }
    

    useEffect(()=>{
        dispatch(getTrending())
    },[activeIndex])

    useEffect(()=>{
        const listScroll=()=>{
            let scrollLeft = listRef.current.scrollLeft
            let scrollWidth = listRef.current.scrollWidth
            let barWidth = listRef.current.offsetWidth
            if(scrollWidth-scrollLeft==barWidth){
                dispatch(getTrending())
            }
        }

        listRef.current.addEventListener("scroll", listScroll)
        
        return () => {
            listRef.current.removeEventListener("scroll",listScroll)
        }
    }, [])

    return(
        <div className="trending">
            <div className="trend">
                <h2>Trending</h2>
                <Menu data={trend} fn={trendingFunction}/>
            </div>
            {/* <MovieList data={trend.movies} design={style}/> */}
            <div ref={listRef} className="list">
                {
                    trend.movies.map((elm,i)=>{
                        return <div key={i}>
                            <img src={"https://image.tmdb.org/t/p/w500"+elm.poster_path}/>
                            <h4>{elm.title}</h4>
                            <p>{elm.release_date}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Trending