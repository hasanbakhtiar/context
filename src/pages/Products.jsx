import React from 'react'
import { Container,Row } from 'react-bootstrap'
import SingleCard from '../components/SingleCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Products = () => {
    const [products,setProducts] = useContext(ProductContext);
  return (
    <Container>
            <Row className='g-5 mt-5'>
                {products.map(data=>(
                    <SingleCard key={data.id} title={data.title} price={data.price}/>
                ))}
                
            </Row>
    </Container>
  )
}

export default Products