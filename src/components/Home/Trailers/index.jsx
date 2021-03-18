import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, getTrailers } from '../../../redux/Actions/Trailer'
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

    return(
        <div className="trailers">
                <div className="trailer">
                    <h2>Latest Trailers</h2>
                    <Menu data={trailers} fn={trailerFunction}/>
                </div>
                {/* <MovieList data={trailers.trailers} design={style}/> */}
                <div ref={listRef} className="lis1t">
                    {
                        trailers.movies.map((elm,i)=>{
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
export default Trailers