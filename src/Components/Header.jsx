import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const wishlist = useSelector((state)=>state.wishlistReducer)
    const cart = useSelector((state)=>state.cartReducer)

    return (
        <nav style={{zIndex:'1'}} className="navbar navbar-expand-lg bg-secondary text-uppercase position-fixed w-100" id="mainNav">
            <div className="container mt-2">
                <Link to={'/'} style={{ textDecoration: 'none', color: 'white', overflowY:'hidden' }}><i className="fa-solid fa-cart-shopping me-2"></i>E cart</Link>
                <div id="navbarResponsive">
                    <form className='d-flex ms-auto'>
                        <Link to={'/wishlist'} className='btn btn-outline-light' type='submit'>
                            <i className='fa-solid fa-heart text-danger me-1'></i>Wishlist <span className='badge bg-light ms-2 rounded-pill'>{wishlist.length}</span>
                        </Link>
                        <Link to={'/cart'} className='btn btn-outline-light ms-4' type='submit'>
                            <i className='fa-solid fa-cart-shopping me-1'></i> Cart <span className='badge bg-light ms-2 rounded-pill'>{cart.length}</span>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header