import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import {mobile} from "../Responsive"
const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between
    ${mobile({padding : "10px 0px", marginBottom:"5px"})};
`;
const Left = styled.div`
flex:1;
display:flex;
`;
const Center = styled.div`
flex:1;
text-align:center;
`;
const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content: flex-end;
${mobile({flex: "2"})}
`;

const Language = styled.div`
margin-top:10px;
font-size:14px;
cursor:pointer;
${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left:25px;
padding:5px;
${mobile({width: "60px", marginLeft: "0px",marginRight:"3px", padding: "0px"})}
`;
const Input = styled.input`
border:none;
width: 100%;
`;
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize: "25px", marginRight:"5px"})}
`
const MenuItem = styled.div`
font-size-14px;
cursor:pointer;
margin-left: 25px;
${mobile({marginLeft: "10px", display: "flex", justifyContent: "center", fontSize:"12px"})}
`

const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder='search'/>
                        <Search style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>goCart</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar