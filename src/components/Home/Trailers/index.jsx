import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTrailers, getVideos } from '../../../redux/Actions/Trailer'
import './index.scss'
import Menu from '../Menu'
import MovieList from '../MovieList'

function Trailers() {
    const trailers = useSelector(state => state.trailer)
    const activeIndex = useSelector(state => state.trailer.activeIndex)
    const dispatch = useDispatch()
    const style="list1"
    const listRef = useRef()

    const trailerFunction=(index)=>{
        dispatch(activate(index))
    }
    
    useEffect(() => {
        dispatch(getTrailers())
    },[activeIndex])

    console.log(trailers.videos.length)
    
    // useEffect(()=>{
    //     const listScroll=()=>{
    //         let scrollLeft = listRef.current.scrollLeft
    //         let scrollWidth = listRef.current.scrollWidth
    //         let barWidth = listRef.current.offsetWidth
    //         if(scrollWidth-scrollLeft==barWidth){
    //             dispatch(getTrailers())
    //         }
    //     }

    //     listRef.current.addEventListener("scroll", listScroll)
        
    //     return () => {
    //         listRef.current.removeEventListener("scroll",listScroll)
    //     }
    // }, [])

    return(
        <div className="trailers">
                <div className="trailer">
                    <h2>Latest Trailers</h2>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/y881t8ilMyc" frameborder="0"></iframe> */}
                    <Menu data={trailers} fn={trailerFunction}/>
                </div>
                {/* <MovieList data={trailers.trailers} design={style}/> */}
                <div ref={listRef} className="list1">
                    {
                        trailers.videos.map((elm,i)=>{
                            return <div key={i}>
                                <iframe width="300" height="200" src={"https://www.youtube.com/embed/"+elm?.key} frameBorder="0"></iframe>
                                {/* <img src={"https://image.tmdb.org/t/p/w500"+elm.backdrop_path}/> */}
                                {/* <h4>{trailers.movies[i]?.title}</h4>
                                <h4>{trailers.movies[i]?.name}</h4> */}
                                <h4>{elm?.name}</h4>
                            </div>
                        })
                    }
                </div>
            </div>
    )
}
export default Trailers