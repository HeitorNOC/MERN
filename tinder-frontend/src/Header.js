import { Link, useNavigate } from  'react-router-dom'
import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from "@mui/material/IconButton"
import ForumIcon from "@mui/icons-material/Forum"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"

import tinderLogo from './img/Tinder_logo_PNG6.png'

function Header({ backButton }) {

    const navigate = useNavigate()

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            )}
            
            <Link to="/">
                <img className="header__logo" src={tinderLogo} alt="tinder" />
            </Link>
            
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header__icon" />
                </IconButton>
            </Link>
            
        </div>
    )
}

export default Header