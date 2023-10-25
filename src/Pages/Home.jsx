import React from 'react'
import { Row, Col, Button, Card} from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/wishlistSlice'
import { addToCart } from '../redux/cartSlice'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  // console.log(data);
  const dispatch = useDispatch()

  return (
   <>
   <div style={{marginTop:'50px'}}>
     <Row className='mt-5 mb-5'>
      { data?.length>0? data?.map((product,index)=>(
        <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='shadow rounded' style={{ width: '18rem', height:'30rem'}}>
          <Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
          <Card.Body style={{overflowY:'hidden'}} >
            <Card.Title style={{overflowY:'hidden'}} >{product?.title}</Card.Title>
            <Card.Text>
              <p>{product?.description.slice(0,50)}...</p>
              <p className='fw-bolder fs-5'>$ {product?.price}</p>
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i className='fa-solid fa-heart text-danger fa-2x'></i></Button>
              <Button onClick={()=>dispatch(addToCart(product))} className='btn btn-light'><i class="fa-solid fa-cart-shopping fa-2x"></i></Button>
            </div>
          </Card.Body>
        </Card>
        </Col>
      )) 
      : <p className='fw-bolder text-danger'>Nothing to display!!!</p>
      }
     </Row>
   </div>
   </>
   
    )
}

export default Home