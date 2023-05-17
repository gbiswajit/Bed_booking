import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
    url("https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
`
const Wrapper= styled.div`
  width: 30%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const Title=styled.div`
    font-size: 24px;
    font-weight: 300;
`
const Button=styled.div`
    width: 40%;
    font-size: 15px;
    letter-spacing: 2px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    height: 25px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Form=styled.form`
`
const Input=styled.input`
    flex: 1;
    width: 60%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input type="text" name="name" placeholder='Name'/>
                    <Input type="text" placeholder='PassWord' name="password"/>
                </Form>
                <Button>Submit</Button>
            </Wrapper>
        </Container>
  )
}

export default Login