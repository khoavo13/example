import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'reactstrap'
import { setFlagFilter } from '../redux/productSlice';

export default function Footer(props) {
  const dispatch = useDispatch()
  return (
    <div>
        <Button color='info' onClick={()=>dispatch(setFlagFilter("CHECKED"))}>Filter Checked</Button>
        <Button color='info' onClick={()=>dispatch(setFlagFilter("NOCHECKED"))}>Filter NoChecked</Button>
        <Button color='info' onClick={()=>dispatch(setFlagFilter(""))}>Clear Filter</Button>
        <Button color='danger' onClick={()=>dispatch(setFlagFilter("DELETE_CHECKED"))}>Delete Filter</Button>
    </div>
  )
}
