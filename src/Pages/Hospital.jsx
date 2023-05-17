import React from 'react';
import styled from 'styled-components';
import Navbar from '../Components/Navbar';

const Container = styled.div`
    padding-left: 20px;
`

const Wrapper = styled.div`
    margin-top: 35px;
    display: flex;
`

const Left = styled.div`

`

const Right = styled.div`
    text-align: center;

`

const Description = styled.div`
    margin: 20px 40px;
    font-size: 20px;
    text-align: justify;
`

const Image = styled.img`
    margin: 10px 20px;
    height: 400px;
    width: 400px;
    border-radius: 24px;
`

const HospitalName = styled.div`
    color: blue;
    font-size: 30px;
    font-weight: bold;
`
const Location = styled.div`
    margin-top: 5px;
    color: green;
    font-size: 20px;
    font-weight: bold;
`
const Filter = styled.div`
    margin-top: 25px;
    width: 100%;
    text-align: left;
`
const FilterHead = styled.div`
    margin-left: 40px;
    font-size: 20px;
    font-weight: bold;
`
const Select = styled.select`
    text-align: left;
    margin: 10px 40px;
    width: 50%;
    height: 40px;
    background-color: white;
    border: 1px solid lightgray;
    font-size: 15px;
    font-weight: bold;
    color: rgb(142, 139, 139);
`
const Options = styled.option`

`

const BookButton = styled.button`
    margin-top: 30px;
    font-size: 15px;
    border: none;
    color: white;
    font-weight: bold;
    height: 40px;
    width: 30%;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    &:hover{
        transform: scale(1.1);
        transition: 0.2s ease-in-out;
    }
`

const Hospital = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Left>
                    <Image src='https://media.istockphoto.com/id/1130389312/photo/building-with-large-h-sign-for-hospital.jpg?s=612x612&w=0&k=20&c=qn7-C6oblqEnGkmsOwAKVb25rJb9qA188heA14TyK9o=' alt='error' />
                </Left>
                <Right>
                    <HospitalName>Modern Hospital</HospitalName>
                    <Location>Naihati</Location>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime tenetur quod excepturi atque placeat ullam, dolor alias, accusantium, possimus explicabo at eligendi ducimus aliquam reiciendis quasi earum iusto iste sed sapiente impedit quidem laborum quo corrupti ipsum? Quaerat, ipsum blanditiis.</Description>
                    <Filter>
                        <FilterHead>Speciality</FilterHead>
                        <Select name="speciality" id="speciality">
                            <Options value="em">Emergency</Options>
                            <Options value="opd">Orthopedic</Options>
                            <Options value="acc">Accident</Options>
                        </Select>
                    </Filter>
                    <BookButton>Book Bed</BookButton>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Hospital