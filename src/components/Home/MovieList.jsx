import React, { useEffect, useRef } from 'react'

function MovieList({data,fn}) {
    const listRef=useRef()
    useEffect(()=>{
        const listScroll=()=>{
            let scrollLeft = listRef.current.scrollLeft
            let scrollWidth = listRef.current.scrollWidth
            let barWidth = listRef.current.offsetWidth
            if(scrollWidth-scrollLeft==barWidth){
                fn()
            }
        }

        listRef.current.addEventListener("scroll", listScroll)
        
        return () => {
            listRef.current.removeEventListener("scroll",listScroll)
        }
    }, [])

    return(
        <div ref={listRef} className="list">
            {
                data.map((elm,i)=>{
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
    )
}
export default MovieList