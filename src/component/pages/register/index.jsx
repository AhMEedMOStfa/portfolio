import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import Select from 'react-select'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {

 const {register,watch, handleSubmit ,reset,formState:{errors,isValid,isDirty}} =  useForm({mode:"onChange"});

const onSubmit = data=> 
{
  console.log(data);
  reset();
}

 const options = [
  { value: 'male', label: 'male' },
  { value: 'female', label: 'female' },
]
 const hoppies = [
  { value: 'chess', label: 'football' },
  { value: 'basketball', label: 'basketball' },
  { value: 'volleyball', label: 'volleyball' },
  { value: 'football', label: 'football' },
]

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate  onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container  spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register('firstName',{required:true,minLength:4,pattern: /^[A-Za-z]+$/i})}
                />
                { 
                  (errors.firstName&&errors.firstName.type)==='required'
                  &&
                  <p className='text-danger '>firstName is Required</p>
                }
                { 
                  (errors.firstName&&errors.firstName.type)==='minLength'
                  &&
                  <p className='text-danger '>name minLength is 4</p>
                }
                { 
                  (errors.firstName&&errors.firstName.type)==='pattern'
                  &&
                  <p className='text-danger '>letters only</p>
                }
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  {...register('lastName',{required:true,minLength:4,pattern: /^[A-Za-z]+$/i})}
                />
                  { 
                  (errors.lastName&&errors.lastName.type)==='required'
                  &&
                  <p className='text-danger '>lastName is Required</p>
                }
                { 
                  (errors.lastName&&errors.lastName.type)==='minLength'
                  &&
                  <p className='text-danger '>name minLength is 4</p>
                }
                { 
                  (errors.lastName&&errors.lastName.type)==='pattern'
                  &&
                  <p className='text-danger '>letters only</p>
                }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register('email',{required:true,pattern:/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                />
                {
                  (errors.email&&errors.email.type==='required')
                  &&
                  <p className='text-danger '>Email Address is required</p>
                }
                {
                  (errors.email&&errors.email.type==='pattern')
                  &&
                  <p className='text-danger '>plz enter valid Email Address</p>
                }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register('password',{required:true,pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/})}
                />
                  {
                  (errors.password&&errors.password.type==='required')
                  &&
                  <p className='text-danger '>Password is required</p>
                  }
                  {
                    (errors.password&&errors.password.type==='pattern')
                    &&
                    <p className='text-danger '>plz enter valid password</p>
                  }
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirm-password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  {...register('confirmPassword',{required:true,
                    validate:(val)=>{
                    if(watch('password')!=val)
                    {
                      console.log('Your passwords do no match');
                      return "Your passwords do no match";
                    }
                  }})}
                />
                 {
                  (errors.confirmPassword&&errors.confirmPassword.type==='validate')
                  &&
                  <p className='text-danger '>Your passwords do no match</p>
                  }
              </Grid>

              <Grid item xs={12}>
            
              <Select  
              className='mb-4'
              options={options}
              placeholder='gender'
               />
              <Select 
              className='mb-4' 
              options={hoppies}
              placeholder='Hoppies'
              isMulti
              isSearchable
               />
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!isValid || !isDirty}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}