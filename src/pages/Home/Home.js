import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div style={{position:'relative'}}>
            <Banner></Banner>
            <About></About>
            <Blog></Blog>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;