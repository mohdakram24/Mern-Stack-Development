import React from 'react'
import { Button, Card, CardContent, CardMedia, Container, TextField } from '@mui/material'
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
    const formSubmit = (formdata) => {
        console.log(formdata);
    }

    const myvalidation=Yup.object().shape({
        email : Yup.string().email('Invalid email'),
        fullname : Yup.string().required('Fullname Required').min(3,'too small')
    })


    return (
        <div>
            <Container>
                <Card>

                    <CardMedia component="img" image='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80' />
                    <CardContent>
                        <h2 className='text-center'>Contact Us Now</h2>
                        <hr />
                        <Formik initialValues={{ fullname: '', email: '', phone : '' }}
                        onSubmit={formSubmit} validationSchema={myvalidation}>
                            { ({values,handleSubmit,handleChange,errors}) => (
                                <form >
                                    <TextField error={Boolean(errors.fullname)} helperText={errors.fullname} sx={{mt:5}} label="Full Name" variant='standard' value={values.fullname} id="fullname" onChange={handleChange} fullWidth/>
                                    <TextField error={Boolean(errors.email)} helperText={errors.email} sx={{mt:5}} label="Email" variant='standard' value={values.email} id="email" onChange={handleChange} fullWidth/>
                                    <TextField error={Boolean(errors.phone)} helperText={errors.phone} sx={{mt:5}} label="Phone Number" variant='standard' value={values.phone} id="phoneno" onChange={handleChange} fullWidth/>
                                    <Button type='submit' sx={{mt:5}} variant='contained'><i class="fa fa-phone" aria-hidden="true"></i>Submit</Button>
                                </form>
                            ) }

                        </Formik>

                    </CardContent>
                </Card>
            </Container>
            {/* <Button variant='outlined'><i class="fa fa-phone" aria-hidden="true"></i>Call me</Button> */}
        </div>
    )
}

export default ContactUs