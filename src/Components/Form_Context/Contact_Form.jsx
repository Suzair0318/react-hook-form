import React from 'react'
import { Box , Typography  , TextField ,  Button} from '@mui/material'
import { useFormContext } from 'react-hook-form'


export const Contact_Form = () => {
   
  const {register} = useFormContext();

  return (
    <>
     <Box  my={2} boxShadow={3} padding={3} margin={3}>
             <Typography variant='p' align='center' component={Box} fontSize={50}  ><b> Contact Form</b></Typography>

             <form  >
        
             <Box my={2} >
             <TextField type='tel' {...register("Contact.Telephone")} label={"Telephone"}  fullWidth  />   
             </Box >

             <Box my={2} >
             <TextField type='number'  {...register("Contact.Phone")} label={"Phone Number"}  fullWidth  />   
             </Box >

             </form>
        </Box>
    </>
  )
}
