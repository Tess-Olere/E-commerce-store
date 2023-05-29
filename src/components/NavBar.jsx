import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Divide as Hamburger } from 'hamburger-react'
import { NavLink } from 'react-router-dom'
import NavLocker from '../components/NavLocker'
import { useStateContext } from '../lib/ContextApi'


export default function NavBar() {
    const [isOpen, setOpen] = useState(false)
    // to add items to our cart
    const { bagQuantity } = useStateContext()


    // to stop the body from scrolling when the navlocker isopen
    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])
  return (
    <div className='position-fixed top-0 w-100'style={{zIndex: '10'}}>
        <Container className='d-flex align-items-center justify-content-between p-2'>
            <div className='d-flex align-items-center gap-3 gap-md-5' style={{zIndex: '10'}}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
            <NavLink to='/' className='fs-1 text-black align-self-center'>EStore</NavLink>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-3'>
            <NavLink to='/search' className='text-dark text-decoration-underline'>Search</NavLink>
            <div className='d-flex text-secondary gap-3'>
               <NavLink  className='text-secondary'>LOGIN</NavLink>
                <NavLink to='/cart'>
                  <div className='position-relative'>
                  <AiOutlineShoppingCart size='1.5rem' className='text-secondary'/>
                  <p className='position-absolute top-0 start-100 translate-middle'>{bagQuantity > 0 ? bagQuantity : 0} </p>
                  </div>
                </NavLink>
            </div>
            </div>
        </Container>
        {isOpen && <NavLocker isOpen={isOpen} setOpen={setOpen}/>}
    </div>
  )
}
