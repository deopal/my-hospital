import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {NavLink} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {useSelector,useDispatch} from 'react-redux';
import * as actions from "../../store/actions/doc_auth_action";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {


  const error=useSelector(state => state.docauth.error);
  const dispatch=useDispatch();

  const submitHandler=(e)=>{
    e.preventDefault();
    var email=e.target.email.value;
    var password=e.target.password.value;
    console.log(email);
    dispatch(actions.doc_auth_signin(email,password));
    dispatch(actions.setAuthRedirect("/"));
  }

  // inputchangeHandler=(event, controlName)=>{
  //   const updateControls={
  //       ...this.state.controls,
  //       [controlName]:{
  //           ...this.state.controls[controlName],
  //           value:event.target.value,
  //           valid:this.checkValidity(event.target.value,this.state.controls[controlName].validation),
  //           touched:true
  //       }
  //   };
  //   this.setState({controls:updateControls});

  //  }

  const classes = useStyles();

  let err=null;
  if(error!=null){
    err=error;
  }

  return (
    <Container component="main" maxWidth="xs" style={{border:'2px solid gray'}} >
      <h2>{err}</h2>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <NavLink to="#" variant="body2">
                Forgot password?
              </NavLink>
            </Grid>
            <Grid item>
              <NavLink to="/doctor_signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}