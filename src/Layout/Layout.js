import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';

import './LayoutStyle.css';


const Layout = () => {
    let navigate = useNavigate();


    return (
        <div className={'layout'}>
            <button onClick={()=>{navigate('/users')}}>users</button>
            <Outlet/>
        </div>
    );
};

export default Layout;