import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Spinner from '../utils/Spinner'

export default function NavLocker({isOpen, setOpen}) {
   const {error, data: categories, loading} = useFetch(
    'https://ecommtest.onrender.com/categories')
  
    return (
    <div className='position-fixed h-100 top-0'>
        <div className='p-4 h-100' style={{width:'24rem', backgroundColor: 'gray'}}>
            <div style={{marginTop: '5rem'}}>
                <Link to='/products' onClick={() => setOpen(!isOpen)}>
                    <p className='text-dark'>products</p>
                </Link>
                <p>Categories</p>
                {loading && <Spinner />}
                {error || (categories && (
                    <>
                    {error && <p>{error.message}</p>}
                    {categories.map((category) => (
                        <Link to={`/categories/${category.id}`} key={category.id} onClick={() => setOpen(!isOpen)}>
                        <p className='text-sm mt-4' style={{color: 'black'}}>{category.name}</p>
                    </Link>   
                    ))}
                    </>
                ))}
            </div>
        </div>
    </div>
  )
}
