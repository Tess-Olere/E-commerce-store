import React from 'react'
import HeroProduct from '../components/HeroProduct'
import useFetch from '../hooks/useFetch'
import HomeCategory from '../components/HomeCategory'
import PictureProduct from '../components/PictureProduct'


export default function Home() {
    const {error, data, loading}= useFetch('https://ecommtest.onrender.com/products')
  return (
    <>
        <HeroProduct error={error} data={data} loading={loading}/>
        <HomeCategory />
        <PictureProduct error={error} data={data} loading={loading}/>
    </>
  )
}
