import { useRef, useState } from 'react'
import {Box, Button, Container, Radio, RadioGroup, TextField, Typography ,  FormControl , FormControlLabel, FormLabel, Checkbox, InputAdornment} from "@mui/material"
import {useForm} from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message';
import {WarningOutlined} from "@mui/icons-material"
import { red } from '@mui/material/colors';

export const Hook_Form_All = () => {

      
  const {register , handleSubmit , formState : {errors} } = useForm()

  const  OnSubmit = (data) => {
    console.log(data)   
   }
   
  return (
    <>
         <Container component={Box} display={"flex"} justifyItems={"center"} alignItems={"center"} maxWidth={"md"}>
        <Box  my={2} boxShadow={3} padding={3} margin={3}>
             <Typography variant='p' component={Box} fontSize={50}  ><b>Registraion</b></Typography>
             <form  onSubmit={handleSubmit(OnSubmit)} >
             <Box my={2}      >

             <TextField  type='text' name='first_name' 
              {...register("first_name" , {
                required : `Please fill all input first`,
                minLength : 4
             }
             )} 
             helperText={  errors?.first_name?.type === "required" && <>{errors?.first_name?.message}</> ||   errors?.first_name?.type === "minLength" && `Min 4 Alphabet is Compulsory` }
              // label={"First Name"} 
              InputProps={
                {
                  startAdornment : (
                      <>
                       {errors?.first_name?.type === "required" && <><Box component={"div"} style={{ color : `${red[200]}` }} mr={2} ><WarningOutlined /></Box></> 
                        || errors?.first_name?.type === "minLength" && <><Box component={"div"} style={{ color : `${red[200]}` }} mr={2} ><WarningOutlined /></Box></> }
                      </>
                  )
                }
              }
              fullWidth  /> 

             </Box >

             {/* <Box my={2} >
             <TextField type='text' {...register("Address.City")}    label={"City"} fullWidth  />   
             </Box >
             <Box my={2} >
             <TextField type='text' {...register("Address.Street")}   label={"Street"} fullWidth  />   
             </Box > */}
             <Box my={2} >
             <TextField type='text' name="Address[0].City"  
             {...register("Address[0].City" , {
                required : `Please fill all input first`,
                minLength : 4
             })} 
             helperText={  errors?.Address?.[0]?.City?.type === "required" && <>{errors?.Address?.[0]?.City?.message}</> ||   errors?.Address?.[0]?.City?.type === "minLength" && `Min 4 Alphabet is Compulsory`  }
                label={"City"} 
                InputProps={
                  {
                    startAdornment : (
                        <>
                         {errors?.Address?.[0]?.City?.type === "required" && <><Box component={"div"} style={{ color : "red" }} mr={2} ><WarningOutlined /></Box></> 
                          || errors?.Address?.[0]?.City?.type === "minLength" && <><Box component={"div"} style={{ color : "red" }} mr={2} ><WarningOutlined /></Box></> }
                        </>
                    )
                  }
                }
                fullWidth  />   
             </Box >

             <Box my={2} >
             <TextField type='text' name='Address[0].Street' 
             {...register("Address[0].Street"  , {
                required : `Please fill all input first`,
                minLength : 4
             })} 
             helperText={  errors?.Address?.[0]?.Street?.type === "required" && <>{errors?.Address?.[0]?.Street?.message}</> ||   errors?.Address?.[0]?.Street?.type === "minLength" && `Min 4 Alphabet is Compulsory` }    
             label={"Street"}
             InputProps={
              {
                startAdornment : (
                    <>
                     {errors?.Address?.[0]?.Street?.type === "required" && <><Box component={"div"} style={{ color : "red" }} mr={2} ><WarningOutlined /></Box></> 
                      || errors?.Address?.[0]?.Street?.type === "minLength" && <><Box component={"div"} style={{ color : "red" }} mr={2} ><WarningOutlined /></Box></> }
                    </>
                )
              }
            }
              fullWidth  />   
             </Box >

             <Box my={2} >

               <FormControl>

                <RadioGroup  >
                  <FormControlLabel {...register("Gender")}  value="male" control={<Radio />} label="Male" />
                  <FormControlLabel {...register("Gender")} value="female" control={<Radio />} label="Female" />
                </RadioGroup>
               </FormControl>
             </Box>
             <Box my={2}>
               <FormControl>
                <FormControlLabel {...register("CheckList")} value={"agree condition"}  control={<Checkbox/>} label="agree all terms and condition"  />
               </FormControl>
             </Box>
             <Box my={2}>
              <Button variant="contained" type='submit' color="primary">Register</Button>
             </Box>
             </form>
        </Box>
       </Container>
    </>
  )
}
