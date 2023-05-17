import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components';
import axios from 'axios'
import hospitalsData from '../Datas/Hospitals';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';

const Container = styled.div`

`
const Wrapper = styled.div`

`
const HospitalsList=styled.div`
    flex: 3;
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    border-radius: 24px;
`
const Hospital=styled(Link)`
    text-decoration: none;
    color: black;
    height: 45vh;
    box-shadow: 0 4px 8px rgba(0,0,0,.12);
    border-radius: 24px;
    width: 25%;
    border: 1px solid #f0f0f5;
    margin: 10px 20px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
    text-align: center;
`
const Title=styled.div`
    font-size: 20px;
    color: rgb(35, 35, 88);
`
const Address=styled.div`
    margin-top: 5px;
    font-size: 15px;
    color: rgb(5, 61, 5);
`
const HImage=styled.img`
    width: 100%;
    height: 75%;
    border-bottom: 1px solid black;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`

const Hospitals = () => {
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
    <Container>
      <Navbar/>
      <Banner/>
      <HospitalsList>
        {hospitalsData.map(hospital => {
          return (
            <Hospital to={hospital.link}>
              <HImage src={hospital.img} alt="error" />
              <Title>{hospital.name}</Title>
              <Address>{hospital.address}</Address>
            </Hospital>
          )
        })}
      </HospitalsList>
    </Container>
  )
}

export default Hospitals