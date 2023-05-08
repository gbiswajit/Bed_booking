import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const Container=styled.div`

`
const Wrapper= styled.div`
    margin-top: 40px;
    display: flex;
`
const Tagline=styled.div`
    margin: 50px 0px;
    align-items: center;
    text-align: center;
`
const TagTitle=styled.div`
    font-size: 35px;
    color: rgb(222, 172, 111);
`
const TagSubTitle=styled.div`
    font-size: 25px;
    margin-top: 5px;
    color: rgb(214, 184, 148);
    font-style: italic;
`
const Filters=styled.div`
    padding: 5px 40px;
    flex: 1;
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    border-right: 1px solid black;
`
const Filter=styled.div`
    margin-top: 25px;
`
const FilterHead=styled.div`

`
const SearchContaier=styled.div`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Hospitals=styled.div`
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`
const Hospital=styled.div`
    height: 40vh;
    width: 40%;
    border: 1px solid black;
    margin: 10px 20px;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
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
`
const Select=styled.select`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: white;
    border: 1px solid lightgray;
    font-size: 15px;
    font-weight: bold;
    color: rgb(142, 139, 139);
`
const Options=styled.option`

`
const SearchInput=styled.input`
    padding-left: 20px;
    margin: 0px;
    flex: 8;
    border: none;
`
const SearchButton=styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`

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
        <Container>
            <Navbar />
            <Tagline>
                <TagTitle>Search Hospital, Make an Appointment</TagTitle>
                <TagSubTitle>Discover the best Clinics & Hospitals near you.</TagSubTitle>
            </Tagline>
            <Wrapper>
                <Filters>
                    <Filter>
                        <FilterHead>Search</FilterHead>
                        <SearchContaier>
                            <SearchInput type="text" />
                            <SearchButton><SearchIcon /></SearchButton>
                        </SearchContaier>
                    </Filter>
                    <Filter>
                        <FilterHead>City</FilterHead>
                        <Select name="city" id="city">
                            <Options value="bdc">Bandel</Options>
                            <Options value="nh">Naihati</Options>
                            <Options value="mog">Mogra</Options>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterHead>Speciality</FilterHead>
                        <Select name="speciality" id="speciality">
                            <Options value="em">Emergency</Options>
                            <Options value="opd">Orthopedic</Options>
                            <Options value="acc">Accident</Options>
                        </Select>
                    </Filter>
                </Filters>
                <Hospitals>
                    {hospitals.map(hospital => {
                        return (
                            <Hospital>
                                <HImage src="https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="error"/>
                                <Title>{hospital.name}</Title>
                                <Address>{hospital.address}</Address>
                            </Hospital>
                        )
                    })}
                </Hospitals>
            </Wrapper>
        </Container>
    )
}

export default Home