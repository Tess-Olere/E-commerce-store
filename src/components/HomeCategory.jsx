import React from 'react'
import useFetch from '../hooks/useFetch'
import { Button, Carousel, Container, Image } from 'react-bootstrap'
import Spinner from '../utils/Spinner'
import { Link } from 'react-router-dom'

export default function HomeCategory() {
    const {error, data: categories, loading}= useFetch('https://ecommtest.onrender.com/categories')
    console.log(categories)
    const bannerCategory = categories.filter((category) => category.name === 'Fashion' || 'Earpiece')
  return (
    <Container className='mt-5'>
        {loading && <Spinner />}
        {error || (categories && 
        <>
        {error && <p>{error.message}</p>}
        <Carousel>
                {bannerCategory.map((banner) => (
                    <Carousel.Item key={banner.id}>
                         <Image className='d-block w-100' src={banner.image}
                         alt={banner.name} style={{height: '500px'}} />
                         <Carousel.Caption>
                            <h1 className='display-3'>{banner.name}</h1>
                            <Link to={`/categories/${banner.id}`}>
                                <Button varient='dark' size='lg' className='border-none rounded-0'>SEE MORE</Button>
                            </Link>
                         </Carousel.Caption>
                    </Carousel.Item>
                   
                ))}
            </Carousel>
        </>
        )}
    </Container>
  )
}
