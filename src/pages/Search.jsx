import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Container } from 'react-bootstrap'
import Spinner from '../utils/Spinner'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import ProductContainer from '../components/ProductContainer'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Search() {
    const [query, setQuery] = useState('')
    const {error, data, loading}= useFetch('https://ecommtest.onrender.com/products')
    
    const navigate = useNavigate()

     useEffect(()=> {
         const getSearch = setTimeout(()=> {
           if(query && query.length > 0) {
             setQuery(query)
           }  
        }, 3000)
        return () => clearTimeout(getSearch)
     }, [query])

     // this area is used to add the name to the url search bar
     useEffect(()=> {
        const params= new URLSearchParams()
        if (query) {
            params.append('name', query) // used for adding a name on the search url
        } else {
            params.delete('name')
        }
        navigate({search: params.toString()})
     }, [query, navigate])

     
     const filteredData = data.filter((res) => {
         const filtered = res.title === query || res.category?.name === query
         if (query !== '') {
             return (
                 res.title.toLowerCase().includes(query) ||
                 res.category?.name.toLowerCase().includes(query) || filtered
             )
         }
     })
  
  return (
    <Container style={{marginTop: '7rem'}}>
        <div className='position-relative pb-2 mb-4 border-bottom border-dark'>
            <input className='small w-100 no-outline border-0' id='search' type='text' 
            placeholder='Search items' value={query} onChange={(e)=> setQuery(e.target.value)}/>

            {/* this area is to add the cancel on the search box */}
               {query.length > 0 && (
        <AiOutlineClose className='position-absolute end-0' style={{cursor: 'pointer'}}
        onClick={()=> setQuery('')}/>
    )}
        </div>
 
     {loading && <Spinner />}
    {error || 
        (filteredData && (
        <div className='mt-5'>
            {error && <p>{error.message}</p>}
            <div className='d-flex align-items-center'>
                <p>{filteredData.length} results</p>
            </div>
            {filteredData && (
                 <ResponsiveMasonry
                 columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}
             >
                 <Masonry gutter='30px'>
                    {filteredData.map((product) => (
                    <ProductContainer  key={product.id} {...product}/> 
                    ))} 
                 </Masonry>
             </ResponsiveMasonry>
            )}
        </div>
    ))} 
    </Container>
  )
}
