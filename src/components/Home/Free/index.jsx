import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTop } from '../../../redux/Actions/FreeAct'
import './index.scss'
import Menu from '../Menu'
import MovieList from '../MovieList'

function Free(){
    const free=useSelector(state => state.free)
    const activeIndex=useSelector(state => state.free.activeIndex)
    const style="list"
    const dispatch=useDispatch()
    const freeFunction=(index)=>{
        dispatch(activate(index))
    }
    const listRef=useRef()

    useEffect(()=>{
        dispatch(getTop())
    },[activeIndex])


    useEffect(()=>{
        const listScroll=()=>{
            let scrollLeft = listRef.current.scrollLeft
            let scrollWidth = listRef.current.scrollWidth
            let barWidth = listRef.current.offsetWidth
            if(scrollWidth-scrollLeft==barWidth){
                dispatch(getTop())
            }
        }

        listRef.current.addEventListener("scroll", listScroll)
        
        return () => {
            listRef.current.removeEventListener("scroll",listScroll)
        }
    }, [])

    return(
        <div className="free">
                <div className="fr">
                    <h2>Free To Watch</h2>
                    <Menu data={free} fn={freeFunction}/>
                </div>
                {/* <MovieList data={free.movies} design={style}/> */}
                <div ref={listRef} className="list">
                    {
                        free.movies.map((elm,i)=>{
                            return <div key={i}>
                                <img src={"https://image.tmdb.org/t/p/w500"+elm.poster_path}/>
                                <h4>{elm.title}</h4>
                                <p>{elm.release_date}</p>
                                <h4>{elm.name}</h4>
                                <p>{elm.first_air_date}</p>
                            </div>
                        })
                    }
                </div>
            </div>
    )
}

export default Free