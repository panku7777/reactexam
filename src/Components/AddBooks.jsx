import { TextField } from '@mui/material'
import React from 'react'

const AddBooks = () => {
  return (
    <div>
      <br />
      <br />
      <TextField id='outlined-basic' label="Book name" variant='outlined'/><b/>
      <TextField id='outlined-basic' label="Author" variant='outlined'/><b/>
      <TextField id='outlined-basic' label="Category" variant='outlined'/><b/>
    </div>
  )
}

export default Addbooks
