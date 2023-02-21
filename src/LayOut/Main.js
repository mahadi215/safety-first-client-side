import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollTop from '../pages/ScrollTop/ScrollTop';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Hedaer/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollTop></ScrollTop>
        </div>
    );
};

export default Main;