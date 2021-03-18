import React from 'react'

function Menu({data,fn}) {
    return(
        <ul>
            {
                data.menu.map((elm,i)=>{
                    let style=i==data.activeIndex?"active":""
                    return <li className={style} key={i} onClick={()=>fn(i)}>{elm}</li>
                })
            }
        </ul>
    )
}
export default Menu