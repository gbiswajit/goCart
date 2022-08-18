import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
const Container=styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({width: "100vw"})}
`

const Announcement = () => {
  return (
    <Container>
        Announcemen Goes Here!!
    </Container>
  )
}

export default Announcement