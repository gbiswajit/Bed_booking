import React from 'react'
import './Navbar.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='mainContainer'>
            <div className="wrapper">
                <div className="left">
                    <div className="litem">Home</div>
                    <div className="litem">Hospitals</div>
                    <div className="litem">Services</div>
                    <div className="litem">Review</div>
                </div>
                <div className="centre">
                    <h1 className="logo">DOCBED <VolunteerActivismIcon style={{ color: "rgb(43, 43, 126)" }} /></h1>
                </div>
                <div className="right">
                    <Link to="/login" className='linkPage'>
                        <div className="ritem">Login</div>
                    </Link>
                    <Link to="/register" className='linkPage'>
                        <div className="ritem">Register</div>
                    </Link>
                    <div className="contact">Contact Us <KeyboardArrowRightIcon style={{ color: "gray" }} /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar