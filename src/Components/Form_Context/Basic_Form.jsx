import React from 'react'
import { Box , Typography  , TextField , Button } from '@mui/material'

import { useFormContext } from 'react-hook-form'

export const Basic_Form = () => {

      const {register}  = useFormContext()


  return (
    <>
    
    <Box  my={2} boxShadow={3} padding={3} margin={3}>
             <Typography variant='p' align='center' component={Box} fontSize={50}  ><b>Basic  Form</b></Typography>

             <form  >
        
             <Box my={2} >
             <TextField type='text' {...register("Your_Name")} label={"Your  Name"}  fullWidth  />   
             </Box >

             <Box my={2} >
             <TextField type='text' {...register("Father_Name")} label={"Father Name"}  fullWidth  />   
             </Box >

             </form>
        </Box>
    </>
  )
}
