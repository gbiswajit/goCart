import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
const Container=styled.div``
const Title=styled.h1`
margin: 20px`
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`
const Filter=styled.div`
margin:20px;
`

const FilterText=styled.span`
font-size: 20px;
font-weight:600;
`

const ProductList = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Product</FilterText></Filter>
            <Filter><FilterText>Sort Product</FilterText></Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList