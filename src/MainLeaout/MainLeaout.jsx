import React from 'react';

import { Outlet } from 'react-router';
import Navber from '../Components/Sheard/Navber/Navber';

const MainLeaout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLeaout;