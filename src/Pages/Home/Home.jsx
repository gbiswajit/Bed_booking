import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'

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
            <div className='hospitals'>
                {hospitals.map(hospital => {
                    return (
                        <div className='hospital'>
                            <div className='title'>{hospital.name}</div>
                            <div className='address'>{hospital.address}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home