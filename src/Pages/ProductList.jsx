import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Anouncement from '../Components/Announcement'
import Products from '../Components/Products'
import NewsLetter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container=styled.div``
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`
const Filter=styled.div`
display:flex;
margin: 20px;
${mobile({margin:"10px"})}
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
  const location =useLocation();
  const cat=location.pathname.split("/")[2]
  const [filter, setFilters]=useState({})
  const [sort, setSort]=useState("newest")

  const handleFilter=(e)=>{
    const value=e.target.value
    setFilters({
      ...filter,
      [e.target.name]: value
    })
  }

  console.log(filter);
  return (
    <Container>
      <Navbar/>
      <Anouncement/>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name='color' onChange={handleFilter}>
            <Option disabled>Color</Option>
            <Option>green</Option>
            <Option>red</Option>
            <Option>black</Option>
            <Option>yellow</Option>
          </Select>
          <Select name='size' onChange={handleFilter}>
            <Option disabled>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest"> Newest</Option>
            <Option value="desc">Price (Desc)</Option>
            <Option value="asc">Price (Asc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filter} sort={sort} />
      <NewsLetter/>
      <Footer/>
    </Container>
  )
}
