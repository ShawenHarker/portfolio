import React from 'react';
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Portfolio from "../../pages/Portfolio";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const DisplayLayout = () => {

    const page = useSelector((state: RootState) => state.navBar.value);

    switch (page) {
        case 0:
            return <Home />;
        case 1:
            return <About />;
        case 2:
            return <Portfolio />;
        case 3:
            return <Services />;
        default:
            return <Home />;
    }
};

export default DisplayLayout;
