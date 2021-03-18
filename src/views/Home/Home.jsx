import React from 'react'
import Free from '../../components/Home/Free'
import Header from '../../components/Home/Header'
import Join from '../../components/Home/Join'
import Popular from '../../components/Home/Popular'
import Trailers from '../../components/Home/Trailers/'
import Trending from '../../components/Home/Trending/'
import './Home.scss'

function Home(){
    return(
        <>
            <Header/>
            <Popular/>
            <Free/>
            <Trailers/>
            <Trending/>
            <Join/>
        </>
    )
}

export default Home