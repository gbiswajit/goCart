import React from 'react'
import styled from 'styled-components'
import {categories} from "../data"
import CategoryItem from './CategoryItem'
const Container=styled.div`
display:flex;
padding:20px;
alihn-items:center;
justify-content:space-between;
overflow:hidden;
`

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories