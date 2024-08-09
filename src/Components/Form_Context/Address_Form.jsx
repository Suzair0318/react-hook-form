import React from 'react'
import { Box , Typography  , TextField ,  Button } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export const Address_Form = () => {

  const {register} = useFormContext();

  return (
    <>
     <Box  my={2} boxShadow={3} padding={3} margin={3}>
             <Typography variant='p' align='center' component={Box} fontSize={50}  ><b>Address  Form</b></Typography>

             <form  >
        
             <Box my={2} >
             <TextField type='text' {...register("Address[0].City")} label={"City"}  fullWidth  />   
             </Box >

             <Box my={2} >
             <TextField type='text' {...register("Address[0].Street")} label={"Street"}  fullWidth  />   
             </Box >

             </form>
        </Box>
    </>
  )
}
