import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const initialValues = {
  firstName: 'Igor',
  lastName: '',
  email: '',
  contact: '222',
  address1: '',
  address2: '',
}

const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/

const userSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('First name is required'),
  contact: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('First name is required'),
  address1: yup.string().required('First name is required'),
  address2: yup.string().required('First name is required'),
})

const Form = () => {
  const isMobile = useMediaQuery("(max-width: 600px)")

  const handleFormSubmit = (values) => {
    console.log(values)
  }
  
  return <Box m="20px">
    <Header title="CREATE USER" subtitle="Create a new user profile" />
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={userSchema}
    >
      {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
        <form onSubmit={handleSubmit}>
          <code>{JSON.stringify(errors)}</code>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{ 
              "& > div" : {gridColumn: isMobile ? "span 4" : undefined }
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.firstName}
              name="firstName"
              error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              sx={{ gridColumn: "span 2"}}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Last Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.lastName}
              name="lastName"
              error={touched.lastName && errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2"}}
            ></TextField>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4"}}

            ></TextField>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Contact Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={touched.contact && errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 4"}}

            ></TextField>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address1}
              name="address1"
              error={touched.address1 && errors.address1}
              helperText={touched.address1 && errors.address1}
              sx={{ gridColumn: "span 2"}}
            ></TextField>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address 2"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.address2}
              name="address2"
              error={touched.address2 && errors.address2}
              helperText={touched.address2 && errors.address2}
              sx={{ gridColumn: "span 2"}}

            ></TextField>
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Create new user
            </Button>
          </Box> 
        </form>
      )}

    </Formik>
  </Box>
}

export default Form