// context is used to add things to the shopping cart
import {createContext, useContext, useState, useEffect} from 'react'

const Context = createContext()

let initialState = []

export const StateContext = ({children}) => {
    const [bagItems, setBagItems] = useState(initialState)
    console.log('bag items', bagItems)
    
    //to save items to local storage
    useEffect(()=> {
        if (bagItems !== initialState) {
            localStorage.setItem('bagItems', JSON.stringify(bagItems))
        }
    }, [bagItems])

    // to retrieve items from local storage
    useEffect(()=> {
        const bagData = JSON.parse(localStorage.getItem('bagItems'))// json.parse converts to object
        if (bagData) {
            setBagItems(bagData)
        }
    }, [])

    const increaseBagQuantity = (id) => {
        setBagItems((currentItems) => {
          if(currentItems.find((item)=> item.id === id) == null){
            return [...currentItems, {id, quantity: 1}]
          }else {
            return currentItems.map((item)=> {
                if (item.id === id){
                    return {...item, quantity: item.quantity + 1}
                }else {
                    return item
                }
            })
          }
        })
    }

    const decreaseBagQuantity = (id) => {
        setBagItems((currentItems)=> {
            if(currentItems.find((item)=> item.id === id)?.quantity === 1){
            return currentItems.filter((item)=> item.id !== id)
        }else {
            return currentItems.map((item)=> {
                if(item.id === id) {
                    return {...item, quantity: item.quantity - 1}
                }else {
                    return item
                }
            })
        }
        })
    }

    const getItemQuantity = (id) => {
        return bagItems.find((item)=> item.id === id)?.quantity || 0
    }
    // to add to bagItems
    const bagQuantity = bagItems.reduce((quantity, item) => item.quantity + quantity, 0)
    
    const removeFromBag = (id) => {
        setBagItems((currentItems)=> {
            return currentItems.filter((item) => item.id !== id)
        })
    }

    return <Context.Provider value={{removeFromBag, bagQuantity, getItemQuantity, decreaseBagQuantity, 
        increaseBagQuantity, bagItems}}>{children}</Context.Provider>    
}
export const useStateContext = () => useContext(Context)