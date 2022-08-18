import { AddIcCall, Email, Facebook, Instagram, LocationOn, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';

const Container=styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`;
const Left=styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;;
`;
const Center=styled.div`
flex: 1;
padding: 20px;
`;

const Title=styled.h3`
margin-bottom:30px;
`;

const List= styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display: flex;
flex-wrap:wrap;
`;

const ListItem=styled.li`
width: 50%;
margin-bottom:10px;
cursor: pointer;
`;

const Right=styled.div`
flex: 1;
padding: 20px;
`;
const Logo=styled.h1``;

const Desc=styled.p`
margin: 20px 0px;
text-align: justify;
`;

const SocialContainer=styled.div`
display: flex;
margin: 5px 3px;
`;

const Icons=styled.div`
width:40px;
height: 40px;
color: white;
background-color: #${props=>props.bg};
border-radius: 50%; 
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const ContactItem=styled.div`
display: flex;
align-items: center;
margin-bottom: 5px;
`;
const Payment=styled.img`
margin-top: 10px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>goCart</Logo>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sint sit alias ut aperiam nihil accusantium corporis sequi ratione. Molestias sapiente officiis iste voluptates consectetur cumque deleniti possimus sint illo.</Desc>
            <SocialContainer>
                <Icons bg="3b5999"><Facebook/></Icons>
                <Icons bg="e4405f"><Instagram/></Icons>
                <Icons bg="55acee"><Twitter/></Icons>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><LocationOn style={{marginRight:"10px"}}/>23/A, Old Calcutta Road, Barrackpore</ContactItem>
            <ContactItem><AddIcCall style={{marginRight:"10px"}}/> +1 6448 5647</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>contact@gocart.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer