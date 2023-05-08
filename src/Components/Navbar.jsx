import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`
const Wrapper = styled.div`
    margin-top: 30px;
    height: 30px;
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
`
const Centre = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Litem = styled.div`
    padding: 10px;
    border-radius: 20px;
    margin-left: 15px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        color:rgb(43, 43, 126);
        background-color: rgb(234, 231, 231);
    }
`
const Ritem = styled.div`
    margin-left: 25px;
    font-size: 15px;
    font-weight:400;
    cursor: pointer;
    &:hover{
        color: blue;
    }
`
const Logo = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color: rgb(43, 43, 126);
`
const Contact = styled.div`
    display: flex;
    padding: 5px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-left: 25px;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    height: 40px;
    width: 30%;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
        background-color: rgb(156, 157, 158);
        color: black;
    }
`
const LinkPage = styled(Link)`
    text-decoration: none;
    color: black;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>

                    <LinkPage to="/">
                        <Litem>Home</Litem>
                    </LinkPage>

                    <LinkPage to="/hospitals">
                        <Litem>Hospitals</Litem>
                    </LinkPage>

                    <LinkPage to="/services">
                        <Litem>Services</Litem>
                    </LinkPage>

                    <LinkPage to="/reviews">
                        <Litem>Reviews</Litem>
                    </LinkPage>

                </Left>
                <Centre>
                    <Logo>DOCBED <VolunteerActivismIcon style={{ color: "rgb(43, 43, 126)" }} /></Logo>
                </Centre>
                <Right>
                    <LinkPage to="/login">
                        <Ritem>Login</Ritem>
                    </LinkPage>
                    <LinkPage to="/register">
                        <Ritem>Register</Ritem>
                    </LinkPage>
                    <Contact>Contact Us <KeyboardArrowRightIcon style={{ color: "gray" }} /></Contact>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar