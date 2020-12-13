import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";


function Header() {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon />
                <Link to="/">
                    <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
                </Link>

            </div>

            <div className="header-input">
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    type="text"
                    placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header-inputButton" />
                </Link>

            </div>


            <div className="header-right">
                <VideoCallIcon className="header-rightIcon" />
                <AppsIcon className="header-rightIcon" />
                <NotificationsIcon className="header-rightIcon" />
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjtuZUfPcGHci82CRRNAc1GkdHMS8nRH9qZNshF=s88-c-k-c0x00ffffff-no-rj-mo" alt="Steve-John" />
            </div>
        </div>
    );
}

export default Header;
