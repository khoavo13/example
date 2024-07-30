import React from 'react'
import { useSelector } from 'react-redux'
import {Container, ListGroup, ListGroupItem, Table} from 'reactstrap'
import Product from './Product'
import AddProduct from './AddProduct'

export default function ProductList() {
    const {productList} = useSelector(state=>state.product)
  return (
    <div>
        <Container>
            <AddProduct />
            <Table hover>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Checked</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {productList && productList.map((item, index)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.checked? "true" : "false"}</td>
                            <td>
                                Delete
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Product/>
        </Container>
    </div>
  )
}
