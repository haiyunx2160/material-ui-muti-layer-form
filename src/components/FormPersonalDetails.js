import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends React.Component{
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    };

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const {values, handleChange} =this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter personal details'/>
                    <TextField hintText='Enter your occupation'
                               onChange={handleChange('occupation')}
                               defaultValue={values.occupation}
                               floatingLabelText='Occupation' />
                    <br/>
                    <TextField hintText='Enter city'
                               onChange={handleChange('city')}
                               defaultValue={values.city}
                               floatingLabelText='City' />
                    <br/>
                    <TextField hintText='Enter your bio'
                               onChange={handleChange('bio')}
                               defaultValue={values.bio}
                               floatingLabelText='Bio' />
                    <br/>
                    <RaisedButton label='Continue'
                                  style={styles.button}
                                  onClick = {this.continue}
                                  primary={true}/>

                    <RaisedButton label='Back'
                                  style={styles.button}
                                  onClick = {this.back}
                                  primary={false}/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
};

export default FormPersonalDetails;
