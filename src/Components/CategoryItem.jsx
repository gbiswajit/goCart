import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
flex:1;
position:relative;
height:70vh;
margin:3px;
`;
const Image=styled.img`
width:100%;
height: 100%;
object-fit:cover;
`;
const InfoContainer=styled.div`
position:absolute;
top:0;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
`;
const Title=styled.h1`
color:white;
margin-bottom:10px;
font-size:50px
`;
const Button=styled.button`
padding:5px 10px;
font-size: 20px;
font-weight: 500;
border: none;
color:grey;
cursor: pointer;
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </InfoContainer>
        </Container>
    )
}

export default CategoryItem