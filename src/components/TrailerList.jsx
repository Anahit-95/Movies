import React, { useEffect, useRef } from 'react'

function TrailerList({data, fn1, fn2}) {
    const listRef=useRef()

    useEffect(()=>{
        const listScroll=()=>{
            let scrollLeft = listRef.current.scrollLeft
            let scrollWidth = listRef.current.scrollWidth
            let barWidth = listRef.current.offsetWidth
            if(scrollWidth-scrollLeft==barWidth){
                fn1()
            }
        }

        listRef.current.addEventListener("scroll", listScroll)
        
        return () => {
            listRef.current.removeEventListener("scroll",listScroll)
        }
    }, [])

    return (
        <div ref={listRef} className="list1">
            {
                data.movies.map((elm,i)=>{
                    return <div key={i}>
                        <img hidden={elm.video} src={"https://image.tmdb.org/t/p/w500"+elm.backdrop_path} onClick={()=>fn2(elm, data.text[data.activeIndex], i)}/>
                        <iframe hidden={!elm.video} width="300" height="200" src={elm.video} frameBorder="0" onPlaying="true"></iframe>                    
                        <img hidden={elm.video} className="play" src={"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-175-play-806cb05551791b8dedd7f8d38fd3bd806e2d397fcfeaa00a5cc9129f0819fd07.svg"} onClick={()=>fn2(elm, data.text[data.activeIndex], i)}/>
                        <h4>{elm.title}</h4>
                        <h4>{elm.name}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default TrailerList