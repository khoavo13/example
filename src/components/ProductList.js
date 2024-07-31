import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, ListGroup, ListGroupItem, Table} from 'reactstrap'
import Product from './Product'
import AddProduct from './AddProduct'
import Footer from './Footer'
import { deleteCheckedAll } from '../redux/productSlice'

export default function ProductList() {
    const {productList} = useSelector(state=>state.product)
    const [flag, setFlag] = useState("")
    
  return (
    <div>
        <Container>
            <AddProduct />
            <Product/>
            <Footer/>
        </Container>
    </div>
  )
}
