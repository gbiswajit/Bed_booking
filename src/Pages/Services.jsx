import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import categories from '../Datas/Categories'

const Container = styled.div`

`
const Wrapper = styled.div`

`
const Categories= styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`
const Category= styled.div`
    height: 35vh;
    box-shadow: 0 4px 8px rgba(0,0,0,.12);
    border-radius: 24px;
    width: 22%;
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
const HImage=styled.img`
    width: 100%;
    height: 75%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    object-fit: cover;
`
const Title=styled.div`
    margin-top: 5px;
    font-size: 20px;
    color: rgb(35, 35, 88);
`


const Services = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Categories>
          {categories.map(category => {
            return (
              <Category>
                <HImage src={category.img} alt="error" />
                <Title>{category.name}</Title>
              </Category>
            )
          })}
        </Categories>
      </Wrapper>
    </Container>
  )
}

export default Services