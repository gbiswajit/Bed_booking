import React from 'react';
import styled from 'styled-components';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

const Container=styled.div`
    margin-top: 40px;
    height: 15vh;
    background-color: #28328c;

`
const Wrapper= styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Title= styled.h1`
    color: white;
`

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Title>DOCBED <VolunteerActivismIcon style={{ color: "white" }} /></Title>
        </Wrapper>
    </Container>
  )
}

export default Footer