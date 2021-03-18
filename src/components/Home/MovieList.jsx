import React from 'react'

function MovieList(props) {
    return(
        <div className={props.design}>
            {
                props.data.map((elm,i)=>{
                    return <div key={i}>
                        <img src={elm.img}/>
                        <h4>{elm.name}</h4>
                        <p>{elm.date}</p>
                    </div>
                })
            }
        </div>
    )
}
export default MovieList