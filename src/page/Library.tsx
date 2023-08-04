import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ButtonLibrary from './ButtonLibrary'
const Library = () => {
  return (
    <div>
        <h1 className='font-semibold '>Library FE</h1>
        <div className='main'>
            <ul>
                <li className='mt-5'>
                <Button  className='p-2 m-2' to="/library/button" color='primary' size='large'>
                Go to Button Library
                 </Button>
                </li>
                 <li className='mt-5'>
                 <Button className='p-2 m-2' to="/library/tooltip" color='primary' size='large'>
                Go to Tooltip Library
                 </Button></li>  
            </ul>
        </div>
    </div>
  )
}

export default Library