import React from 'react'
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';

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
${mobile({height: "30vh"})}
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
${mobile({fontSize: "30px", margin:"5px"})}
`;
const Button=styled.button`
padding:5px 10px;
font-size: 20px;
font-weight: 500;
border: none;
color:grey;
cursor: pointer;
${mobile({fontSize: "15px"})}
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
            <Image src={item.img}/>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Button>Shop Now</Button>
            </InfoContainer>
            </Link>
        </Container>
    )
}

export default CategoryItem