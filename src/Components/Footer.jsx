import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center' style={{ width: '100%', height: '300px' }}>
      <div className='footer d-flex justify-content-evenly w-100'>
        <div style={{ width: '400px'}} className='website'>
          <h2 style={{overflowY:'hidden'}} ><i className="fa-sharp fa-solid fa-cloud-arrow-up"></i>
            {' '}
            MV Player</h2>
          <h6 style={{overflowY:'hidden'}} >Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
            <br/>Code licensed MIT, docs CC BY 3.0.
            <br/>Currently v5.3.2.</h6>
        </div>
        <div className='links d-flex flex-column'>
          <h2 style={{overflowY:'hidden'}} >Links</h2>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>Home</Link>
          <Link to={'/cart'} style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>Cart</Link>
          <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>Wishlist</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h2 style={{overflowY:'hidden'}} >Guides</h2>
          <Link to={'https://react.dev'} style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app'} style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>React Bootstrap</Link>
          <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{ textDecoration: 'none', color: 'blue', fontSize: '20px' }}>Routing</Link>
        </div>
        <div className='contact'>
        <h2 style={{overflowY:'hidden'}} >Contact Us</h2>
        <div className='sub d-flex mt-3'>
          <input type="text" className='form-control' placeholder='Enter your email' />
          <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='icons fs-2 justify-content-between mt-2 d-flex'>
            <Link to={'https://react-bootstrap.netlify.app'} style={{color: 'blue'}}><i class="fa-brands fa-facebook"></i></Link>
            <Link to={'https://react-bootstrap.netlify.app'} style={{color: 'blue'}}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'https://react-bootstrap.netlify.app'} style={{color: 'blue'}}><i class="fa-brands fa-whatsapp"></i></Link>
            <Link to={'https://react-bootstrap.netlify.app'} style={{color: 'blue'}}><i class="fa-brands fa-github"></i></Link>
            <Link to={'https://react-bootstrap.netlify.app'} style={{color: 'blue'}}><i class="fa-brands fa-twitter"></i></Link>
          </div>
      </div>
      </div>
      <p style={{marginTop:'50px'}}>Copyright @ 2023 MV Player. Built with React.</p>
    </div>
    </>
   
    )
}

export default Footer