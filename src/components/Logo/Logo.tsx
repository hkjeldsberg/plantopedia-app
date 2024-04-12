import {Link} from "react-router-dom";
import logo from "./logo.svg";
import React from "react";
import './logo.css'

export const Logo = () => <div className="App">
    <div className="container container-middle">
        <Link to="/home">
            <img src={logo} className="logo" alt="logo"/>
        </Link>
        <div className="logo-name">
            PLANTOPEDIA
        </div>
    </div>
</div>

