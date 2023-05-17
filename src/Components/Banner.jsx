import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`

`
const Wrapper = styled.div`
    margin-top: 30px;
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
        url("https://media.istockphoto.com/id/1219310572/vector/abstract-lines-with-dots-over-dark-background-connecting-or-big-data-concept.jpg?s=612x612&w=0&k=20&c=aLo1t-RQXRcmZdlzLztbHpHMAw9tiOUQL7kDYWzsX8M=")
          center;
`
const Title= styled.h1`
    color: white;
`
const Filters = styled.div`
    padding: 5px 40px;
    flex: 1;
    text-align: left;
    font-size: 15px;
    font-weight: bold;
`
const Filter = styled.div`
    margin: 25px 10px;
    width: 30%;
`
const FilterHead = styled.div`
        color: white;
        font-size: 20px;
`
const SearchContaier = styled.div`
    margin-top: 10px;
    width: 20vw;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Select = styled.select`
    margin-top: 10px;
    width: 20vw;
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

const Banner = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Search, Find, Make An Appointment!!</Title>
                <Filters>
                    <Filter>
                        <FilterHead>Search</FilterHead>
                        <SearchContaier>
                            <SearchInput type="text" />
                            <SearchButton><SearchIcon /></SearchButton>
                        </SearchContaier>
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
            </Wrapper>
        </Container>
    )
}

export default Banner