import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import NewsLetter from '../Components/Newsletter'
import { mobile } from '../Responsive'
import { publicRequest } from '../requestMethod'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Container = styled.div``
const Wrapper = styled.div`
display:flex;
padding: 50px;
${mobile({ flexDirection: "column" })}
`
const ImageContainer = styled.div`
flex:1;
`
const Image = styled.img`
height:90vh;
width: 90%;
object-fit: cover;
${mobile({ height: "50vh" })}
`
const InfoContainer = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 0px 20px;
`
const Title = styled.h1`
font-weight: 200;
`
const Description = styled.p`
margin: 10px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size:30px;
`
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "60vw" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;
  font-weight: 700;
  ${mobile({ marginRight: "20px" })}
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  margin-left:20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 200;
  &:hover{
      background-color: #f8f4f4;
  }
  ${mobile({ height: "30px", width: "100px", padding: "0px" })}
`;

export default function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity]=useState(1);
  const [color, setColor]=useState("");
  const [size, setSize]=useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch { }
    };
    getProduct();
  }, [id]);

  const handleQuantity= (type)=>{
    if(type==="dec"){
      quantity>1 && setQuantity(quantity-1)
    }else{
      setQuantity(quantity+1)
    }
  }
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title} </Title>
          <Description>{product.desc}</Description>
          <Price> {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e)=>setSize(e.target.value)}>
              {product.size?.map((s) => (
                <FilterSizeOption key={s}>{s}</FilterSizeOption>
              ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}
