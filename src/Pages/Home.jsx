import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Components/Navbar'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import services from '../Datas/Services';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Container = styled.div`

`
const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
`
const Tagline = styled.div`
    margin: 50px 0px;
    align-items: center;
    text-align: center;
`
const TagTitle = styled.div`
    font-size: 35px;
    color: rgb(222, 172, 111);
`
const TagSubTitle = styled.div`
    font-size: 25px;
    margin-top: 5px;
    color: rgb(214, 184, 148);
    font-style: italic;
`
const Filters = styled.div`
    padding: 5px 40px;
    flex: 1;
    text-align: left;
    font-size: 15px;
    font-weight: bold;
    border-right: 1px solid black;
`
const Filter = styled.div`
    margin-top: 25px;
`
const FilterHead = styled.div`

`
const LinkPage = styled(Link)`
    text-decoration: none;
    color: black;
    height: 50vh;
    box-shadow: 0 4px 8px rgba(0,0,0,.12);
    border-radius: 24px;
    width: 25%;
    background-color: #e1f8dc;
    border: 1px solid #f0f0f5;
    margin: 10px 20px;
    cursor: pointer;

    text-align: center;
    &:hover{
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
`
const SearchContaier = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Services = styled.div`
    flex: 3;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 0;
`
const Service = styled.div`
    height: 50vh;
    box-shadow: 0 4px 8px rgba(0,0,0,.12);
    border-radius: 24px;
    width: 100%;
    background-color: #e1f8dc;
    border: 1px solid #f0f0f5;
    margin: 10px 20px;
    cursor: pointer;

    text-align: center;
    &:hover{
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
`
const Title = styled.div`
    font-size: 20px;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(35, 35, 88);
`
const About = styled.div`
    margin-top: 8px;
    font-size: 15px;
    font-family: 'Lora', serif;
    color: rgb(5, 61, 5);
`
const HImage = styled.img`
    width: 100%;
    height: 75%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    object-fit: cover;
`
const Select = styled.select`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    background-color: white;
    border: 1px solid lightgray;
    font-size: 15px;
    font-weight: bold;
    color: rgb(142, 139, 139);
`
const Options = styled.option`

`
const SearchInput = styled.input`
    padding-left: 20px;
    margin: 0px;
    flex: 8;
    border: none;
`
const SearchButton = styled.button`
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
                <Services>
                    {services.map(service => {
                        return (
                            <LinkPage to={service.link}>

                                <HImage src={service.img} alt="error" />
                                <Title>{service.name}</Title>
                                <About>{service.about}</About>

                            </LinkPage>

                        )
                    })}
                </Services>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Home