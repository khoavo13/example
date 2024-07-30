import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Input } from 'reactstrap'
import { addNewProduct } from '../redux/productSlice'

export default function AddProduct() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
  return (
    <div>
        <Input type='text' value={text} placeholder='Enter your name' onChange={e=>setText(e.target.value)} onKeyDown={e=>{
            if (e.key === "Enter"){
                dispatch(addNewProduct(text))
                setText("")
            }
        }}/>
    </div>
  )
}
