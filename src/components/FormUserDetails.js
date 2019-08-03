import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends React.Component{
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const {values, handleChange} =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter user details'/>
                    <TextField hintText='Enter your first name'
                               onChange={handleChange('firstName')}
                               defaultValue={values.firstName}
                               floatingLabelText='First Name' />
                               <br/>
                    <TextField hintText='Enter your last name'
                               onChange={handleChange('lastName')}
                               defaultValue={values.lastName}
                               floatingLabelText='Last Name' />
                    <br/>
                    <TextField hintText='Enter your Email'
                               onChange={handleChange('email')}
                               defaultValue={values.email}
                               floatingLabelText='Email' />
                    <br/>
                    <RaisedButton label='continue'
                                 style={styles.button}
                                 onClick = {this.continue}
                                 primary={true}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default FormUserDetails;
