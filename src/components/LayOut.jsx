import React from 'react';
import NavBer from './NavBer';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const LayOut = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;