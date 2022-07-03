import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
flex:1;
margin:5px;
margin-bottom:10px;
min-width:280px;
height:280px;
position: relative;
align-items:center;
justify-content:center;
background-color: black;
`;
const Image = styled.img`
height:100%;
object-fit:cover;
width:100%;
`;
const Info = styled.div`
display:flex;
width:100%;
height:100%;
top:0;
left:0;
position: absolute;
align-items:center;
justify-content:center;
`;
const Icon = styled.div`
margin:5px;
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items: center;
justify-content: center;
cursor:pointer;
opacity: 0.5;

&:hover{
    background-color:#e9f5f5;
    transform: scale(1.1);
    opacity: 1;
}
`;
const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product