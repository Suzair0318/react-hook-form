import React from 'react'
import { Box, Button } from '@mui/material'
import {useForm} from 'react-hook-form'

export const Image = () => {

    const {register, handleSubmit, formState : {errors} } = useForm();

    const funcsubmit = data => console.log(data)

  return (
    <>
     <Box  border={2} height={"80vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}  > 
     <Box>
     <form onSubmit={handleSubmit(funcsubmit)} >
     <input {...register("Image" , {
        required : "Please Upload Image",
        validate : (value) => {
          const validatetype = ['jpeg' , 'png'];
          const file = value[0].name.split('.').pop();
          if(!validatetype.includes(`${file}`)){
            console.log(!validatetype.includes(`${file}`))
            return `PLease Upload Validate Image ('jpeg' , 'png') `
          }
        }
     })}  type="file"  />
     <div>
        <Box boxShadow={10}>{
         errors.Image?.type === "required" &&  errors.Image.message 
        ||
        errors.Image?.type === "validate" &&  errors.Image.message
      
        }</Box>
     </div>
     <Box py={4}>
        <Button type='submit' variant='outlined'>Submit</Button>
        </Box>
     </form>
     </Box>
     </Box>
     

      
    </>
  )
}
