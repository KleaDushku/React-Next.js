import React from 'react'
import ShoppingList from './ShompingList'
import MyButton from './MyButton'


const Test = () => {
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
    <h1 className='hero__title'>
  New Section
    </h1>
    <p className='hero__subtitle'>Welcome to our online learning platform!.</p>
    <ShoppingList/>
    <MyButton/>
    </div>
    </div>
  )
}

export default Test
