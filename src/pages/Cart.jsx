import React from 'react'
import { useStateContext } from '../lib/ContextApi'
import useFetch from '../hooks/useFetch'
import { Container } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import BagItem from '../components/BagItem'
import FormatCurrency from '../utils/FormatCurrency'

export default function Cart() {
    const {error, data} = useFetch('https://ecommtest.onrender.com/products')
    const {bagItems} = useStateContext()

    // use reduce when suming total items
    const getTotal = bagItems?.reduce((total, bagItem)=> {
        const totalItem = data.find((i) => i.id === bagItem.id)
        return total + (totalItem?.price || 0) * bagItem.quantity
    }, 0)
  return (
    <Container style={{padding: '5rem'}}>
        {bagItems.length ? (
            <h6 className='font-bold text-start text-sm'>Cart ({bagItems.length})</h6>
        ): (
            <h6 className='font-bold text-start text-sm'>Your bag is empty</h6>
        )}
        {error || (data && (
            <div className='h-100'>
                {error && <p>{error.message}</p>}
                {data && (
             <ResponsiveMasonry
             columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}
         >
             <Masonry gutter='30px'>
                {bagItems.map((item, index) => (
                <BagItem key={index.id} {...item} data={data}/> 
                ))} 
             </Masonry>
         </ResponsiveMasonry>
        )}
        <div className='d-flex gap-3 font-bold text-sm mt-3 justify-content-end'>
            <p className='fw-bold'>Total <span className='fw-bold text-lg ms-3'>{FormatCurrency(getTotal)}</span></p>
            
        </div>
            </div>
        ))}
    </Container>
  )
}
