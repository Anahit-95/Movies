import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'

function Header(){
    // const { menu } = useSelector(state => state);

    return(
        <div className="header">
                <h1>Welcome</h1>
                <h2>Milions of movies, TV shaows,and people to discover</h2>
                <div>
                    <input type="text" placeholder="Search for a movie, TV show, or person....."/>
                    <button>Search</button>  
                </div>
            </div>
    )
}

export default Header