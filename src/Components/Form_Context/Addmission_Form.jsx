import React from 'react'
import { Box, Button, Container} from "@mui/material"
import { Basic_Form } from './Basic_Form'
import { Contact_Form } from './Contact_Form'
import { Address_Form } from './Address_Form'
import {useForm , FormProvider} from 'react-hook-form'

export const Addmission_Form = () => {

   const methods = useForm();

   const Onsubmit = data => console.log(data)

  return (
    <>
    <div style={{ backgroundColor : "yellow"}}>
      <Container maxWidth={"sm"}>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(Onsubmit)} >

          <Basic_Form  />
          <Contact_Form  />
          <Address_Form  />

          <Box my={2} padding={3} >
         <Button type='submit' variant='contained' fullWidth >Submit</Button>
          </Box>
        </form>
        </FormProvider>
      </Container>
      </div>
    </>
  )
}
