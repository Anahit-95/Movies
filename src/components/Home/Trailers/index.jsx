import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTrailers, getVideo, getVideos } from '../../../redux/Actions/Trailer'
import './index.scss'
import Menu from '../Menu'
import MovieList from '../MovieList'
import TrailerList from '../../TrailerList'

function Trailers() {
    const trailers = useSelector(state => state.trailer)
    const activeIndex = useSelector(state => state.trailer.activeIndex)
    const dispatch = useDispatch()
    const listRef = useRef()

    const trailerFunction=(index)=>{
        if (index !== activeIndex) {
            dispatch(activate(index))
        }
    }
    
    useEffect(() => {
        dispatch(getTrailers())
    },[activeIndex])

    const openVideo=(elm, text, index)=>{
        dispatch(getVideo(elm, text, index))
    }

    useEffect(()=>{
        const listScroll=()=>{
            let scrollLeft = listRef.current.scrollLeft
            let scrollWidth = listRef.current.scrollWidth
            let barWidth = listRef.current.offsetWidth
            if(scrollWidth-scrollLeft==barWidth){
                dispatch(getTrailers())
            }
        }

        listRef.current.addEventListener("scroll", listScroll)
        
        return () => {
            listRef.current.removeEventListener("scroll",listScroll)
        }
    }, [])

    return(
        <div className="trailers">
                <div className="trailer">
                    <h2>Latest Trailers</h2>
                    <Menu data={trailers} fn={trailerFunction}/>
                </div>
                {/* <TrailerList data={trailers} fn1={getTrailers} fn2={openVideo}/> */}
                <div ref={listRef} className="list1">
                    {
                        trailers.movies.map((elm,i)=>{
                            return <div key={i}>
                                <img hidden={elm.video} src={"https://image.tmdb.org/t/p/w500"+elm.backdrop_path} onClick={()=>openVideo(elm, trailers.text[activeIndex], i)}/>
                                <iframe hidden={!elm.video} width="300" height="200" src={elm.video} frameBorder="0" onPlaying="true"></iframe>                    
                                <img hidden={elm.video} className="play" src={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg"} onClick={()=>openVideo(elm, trailers.text[activeIndex], i)}/>
                                <h4>{elm.title}</h4>
                                <h4>{elm.name}</h4>
                            </div>
                        })
                    }
                </div>
            </div>
    )
}
export default Trailers