import React from 'react';
import './navbar.scss';
import Banner from '../../images/banner_temp.png';

export default function Navbar (){

    return(
        <React.Fragment>
            <div className="navbar_container">
                <div className="navbar_link">Home</div>
                <div className="navbar_link">Projects</div>
                <div className="navbar_link">About</div>
                <div className="navbar_link">Contact</div>
            </div>
        </React.Fragment>
    )
}