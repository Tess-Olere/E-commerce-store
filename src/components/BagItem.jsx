import React from 'react'
import { useStateContext } from '../lib/ContextApi'
import { Image } from 'react-bootstrap'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import FormatCurrency from '../utils/FormatCurrency'

export default function BagItem({id, data}) {
    const {removeFromBag, increaseBagQuantity, decreaseBagQuantity, getItemQuantity} = useStateContext()
    
    const item = data?.find((product)=> product.id === id)
    if (item == null) return null
    
    const quantityCount = getItemQuantity(item.id)

  return (
    <div className='mt-2'>
        <h6 className='text-start text-sm font-bold'>{item.title}</h6>
        <div className='d-md-flex gap-4 mt-5'>
            <div className='mb-4 md-mb-0' style={{height: '270px'}}>
                <Image src={item.images[0]} alt={item.title} className='w-100 h-100' />
            </div>
            <div className='d-flex flex-md-column justify-content-between'>
                <div className='d-flex gap-3 align-items-center '>
                    <AiOutlineMinus style={{cursor: 'pointer'}} onClick={() =>decreaseBagQuantity(item.id)}/>
                    <span>{quantityCount}</span>
                    <AiOutlinePlus style={{cursor: 'pointer'}} onClick={() =>increaseBagQuantity(item.id)}/>
                </div>
                <p className='text-sm text-md-center mt-3'>{FormatCurrency(item.price)}</p>
            <p className='text-sm text-center mt-3' style={{cursor: 'pointer', border: '1px solid black', padding: '2px', borderRadius: '5px'}} onClick={() =>removeFromBag(item.id)}>DELETE</p>
            </div>
       
        </div>
    </div>
  )
}
