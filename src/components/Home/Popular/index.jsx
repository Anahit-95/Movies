import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getMovies } from '../../../redux/Actions/Popular'
import Menu from '../Menu'
import MovieList from '../MovieList'
import './index.scss'

function Popular(){
    const popular = useSelector(state => state.popular)
    let activeIndex=useSelector(state => state.popular.activeIndex)
    const style = "list"
    const dispatch = useDispatch()
    const listRef = useRef()

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

    // useEffect(()=>{
    //     const listScroll=()=>{
    //         let scrollLeft = listRef.current.scrollLeft
    //         let scrollWidth = listRef.current.scrollWidth
    //         let barWidth = listRef.current.offsetWidth
    //         if(scrollWidth-scrollLeft==barWidth){
    //             dispatch(getMovies())
    //         }
    //     }

    //     listRef.current.addEventListener("scroll", listScroll)
        
    //     return () => {
    //         listRef.current.removeEventListener("scroll",listScroll)
    //     }
    // }, [])

    return(
        <div className="popular">
                <div className="pop">
                    <h2>What's Popular</h2>
                    <Menu data={popular} fn={popularFunction}/>
                </div>
                <MovieList data={popular.movies} design={style} fn={getFilms}/>
                {/* <div ref={listRef} className="list">
                    {
                        popular.movies.map((elm,i)=>{
                            return <div key={i}>
                                <img src={"https://image.tmdb.org/t/p/w500"+elm.poster_path}/>
                                <h4>{elm.title}</h4>
                                <p>{elm.release_date}</p>
                                <h4>{elm.name}</h4>
                                <p>{elm.first_air_date}</p>
                            </div>
                        })
                    }
                </div> */}
            </div>
    )
}

export default Popular