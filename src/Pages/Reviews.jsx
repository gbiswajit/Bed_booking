import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import reviews from '../Datas/Testimonials'

const Container=styled.div`

`
const Testimonials= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`
const Review= styled.div`
    height: 110%;
    box-shadow: 0 4px 8px rgba(0,0,0,.12);
    border-radius: 24px;
    width: 20vw;
    background: linear-gradient(90deg, rgba(182,179,231,0.6560749299719888) 9%, rgba(142,227,244,0.854954481792717) 100%);
    border: 1px solid #f0f0f5;
    margin: 10px 20px;
    cursor: pointer;
    padding: 15px;
    text-align: justify;
`
const Quote= styled.div`
    text-align: justfy;
`
const Name= styled.div`
    margin-top: 20px;
    font-size: 20px;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(35, 35, 88);
`
const About= styled.div`
    margin-top: 5px;
    font-size: 15px;
    font-family: 'Lora', serif;
    color: rgb(5, 61, 5);
`


const Wrapper= styled.div`
    margin-top: 30px;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
    url("https://img.freepik.com/premium-photo/flat-lay-pills-syringe-with-copy-space_23-2148439083.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
      center;
`
const Reviews = () => {
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Testimonials>
            {reviews.map(review => {
                        return (
                            <Review>
                                <Quote>{review.review}</Quote>
                                <Name>{review.name}</Name>
                                <About>{review.about}</About>
                            </Review>
                        )
                    })}
            </Testimonials>
        </Wrapper>
    </Container>
  )
}

export default Reviews