import React from 'react'
import './index.scss'

function  Join() {
    return(
        <div className="join">
                <h1>Join Today</h1>
                <div className="blocks">
                    <div className="one">
                        <p>Get access to maintain your own <i>custom personal lists, track what you've seen</i> and search and filter for <i>what to watch</i> next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Disney Plus, and Amazon Prime Video.</p>
                        <button>Sign Up</button>
                    </div>
                    <div className="two">
                        <ul>
                            <li>Enjoy TMDb ad free</li>
                            <li>Maintain a personal watchlist</li>
                            <li>Filter by your subscribed streaming services and find something to watch</li>
                            <li>Log the movies and TV shows you've seen</li>
                            <li>Build custom lists</li>
                            <li>Contribute to and improve our database</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}

export default Join