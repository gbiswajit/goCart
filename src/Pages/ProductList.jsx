import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Anouncement from '../Components/Announcement'
import Products from '../Components/Products'
import NewsLetter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Container=styled.div``
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`
const Filter=styled.div`
display:flex;
margin: 20px;
`

const FilterText=styled.span`
font-size: 20px;
padding-top: 5px;
font-weight: 600;
margin-right: 20px;
`

const Select=styled.select`
padding: 10px;
margin-right:10px;
`
const Option=styled.option``

export default function ProductList() {
  return (
    <Container>
      <Navbar/>
      <Anouncement/>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Yellow</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
            <Option>Extra Large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option disabled selected> Newest</Option>
            <Option>Price (Desc)</Option>
            <Option>Price (Asc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}
