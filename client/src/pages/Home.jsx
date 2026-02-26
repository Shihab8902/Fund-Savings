import React from 'react'
import Header from '../components/shared/Header'
import Hero from '../components/Home/Hero'
import Login from './Login';

const Home = () => {

    const isAuthenticated = false;

    return isAuthenticated ? <span>Authenticated</span> : <Login />

}

export default Home