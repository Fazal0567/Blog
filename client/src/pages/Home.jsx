import React from 'react'
import NavBar from '../components/NavBar'
import Headers from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <NavBar />
            <Headers />
            <BlogList />
            <Newsletter />
            <Footer />
        </>
    )
}

export default Home