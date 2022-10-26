import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Link to={'mode'}>Mode</Link>
        </div>
    );
};

export default Home;