import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;