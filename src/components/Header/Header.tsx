import logo from "../Logo/logo.svg";
import React from "react";
import {Link} from "react-router-dom";
import './header.scss'

export const Header = () =>
    <div className="header">
        <Link className="header-link" to="/">
            <img src={logo} alt="logo" className="header-logo"/>
            <div className="header-name">
                PLANTOPEDIA
            </div>
        </Link>
        <div className="header-nav">
            <Link className="header-nav-item" to="/planter">
                MINE PLANTER
            </Link>
            <Link className="header-nav-item" to="/leggtil">
                LEGG TIL PLANTER
            </Link>
            <Link className="header-nav-item" to="/finnplanter">
                SØK
            </Link>
        </div>
    </div>