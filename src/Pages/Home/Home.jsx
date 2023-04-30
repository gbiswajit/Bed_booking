import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Navbar from '../../Components/Navbar/Navbar'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
    const [hospitals, setHospital] = useState([]);
    useEffect(() => {
        axios
            .get(
                'http://localhost:8080/gethospitals'
            )
            .then(res => {
                setHospital(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);
    return (
        <div className='mainContainer'>
            <Navbar />
            <div className="tagline">
                <div className='tagTitle'>Search Hospital, Make an Appointment</div>
                <div className='tagStitle'>Discover the best Clinics & Hospitals near you.</div>
            </div>
            <div className="mainWrapper">
                <div className="filters">
                    <div className="filter">
                        <div className="filterHead">Search</div>
                        <div className="searchContainer">
                            <input type="text" className="searchInput" />
                            <button className="search"><SearchIcon /></button>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filterHead">City</div>
                        <select name="city" id="city" className="Selections">
                            <option value="bdc">Bandel</option>
                            <option value="nh">Naihati</option>
                            <option value="mog">Mogra</option>
                        </select>
                    </div>
                    <div className="filter">
                        <div className="filterHead">Speciality</div>
                        <select name="speciality" id="speciality" className="Selections">
                            <option value="em">Emergency</option>
                            <option value="opd">Orthopedic</option>
                            <option value="acc">Accident</option>
                        </select>
                    </div>
                </div>
                <div className='hospitals'>
                    {hospitals.map(hospital => {
                        return (
                            <div className='hospital'>
                                <img src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="error" className="himage" />
                                <div className='title'>{hospital.name}</div>
                                <div className='address'>{hospital.address}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Home