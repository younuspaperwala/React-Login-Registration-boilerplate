import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/userActions'
import {Link} from 'react-router-dom';
import {registerUser} from '../../actions/userActions';

//components 
import NavbarComponent from '../navbar/navbar'

class register extends Component {

    constructor(props)
    {

        super(props);

        this.state={
            firstName:"",
            lastName:"",
            contactNumber:"",
            verficationCode:"",
            email:"",
            password:"",
            confirmPassword:"",
            recieveEmails:false,
            DOB:"",
            errors:[]
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.isFormValid = this.isFormValid.bind(this);
        // this.isPasswordValid = this.isPasswordValid.bind(this);
        // this.isFormEmpy = this.isFormEmpy.bind(this);
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    isFormValid(e)
    {
        let errors=[];
        let error;
        console.log("==================IsFormValid")
        if (this.isFormEmpy(this.state))
        {
            error={message: "Fill in all important fields"}
            this.setState({errors:errors.concat(error)});
            console.log("==================== Form is Empty")

        }
        else if (!this.isPasswordValid(this.state))
        {
            error={message:"This password is too short"}
            this.setState({errors:errors.concat(error)})
            console.log("==================== Password is short")

        }
        else
        {return true}
        

    }

    isPasswordValid({password,confirmPassword}){
        if(password!== confirmPassword)
        {return false}
        else if(password.length<6||confirmPassword.length<6)
        {return false}
        else
        {return true}
    
    }
    isFormEmpy({firstName,lastName,contactNumber,verficationCode,email,password,confirmPassword})
    {
        console.log("==================== isFormEmpy")

        return (
            !firstName.length ||
            !lastName.length ||
            !contactNumber.length ||
            !email.length ||
            !password.length ||
            !confirmPassword.length)
    }
    submitForm(e)
    {       
         console.log("=============== Onsubmit")

         e.preventDefault();
         console.log("=============== Onsubmit")

        let dataToSubmit = {
            email:this.state.email,
            name:this.state.firstName,
            lastName:this.state.lastName,
            password:this.state.password,
            // recieveEmails:this.state.recieveEmails,
            // verficationCode:this.state.verficationCode,
            // contactNumber:this.state.contactNumber,
            confirmPassword:this.state.confirmPassword,
            // DOB:this.state.DOB,
            errors:this.state.errors

        }
        console.log("=============== Onsubmit"+dataToSubmit)
        if(this.isFormValid())
        {
            console.log("=============== Form is Valid")
            this.setState({errors:[]})
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response=>{
                if (response.payload.success)
                {
                    console.log("Registration done")
                    this.props.history.push('/login')
                }
                else{
                    console.log("Registration not successful")
                    this.setState({errors:this.state.errors.concat("Email already exist")})
                }
            })
        }
    }
    render() {
        return (
            <div>

            <NavbarComponent />

            <div className="container">

                <h2>Register Page</h2>
                <div className="row">
                    <form className="col 12" >
                    {/* onSubmit={event=>this.submitForm(e)} */}
                    <div className="row">
                        <div className="input-field col s6">
                            <input 
                            name="firstName"
                            value={this.state.firstName}
                            onChange={e=> this.handleChange(e)}
                            id="firstName"
                            type="text"
                            className="validate"
                            placeholder="First Name"

                            />

                            {/* <label htmlFor="firstName">First Name</label>
                            <span
                            className="helper-text"
                            data-error="Enter Your First Name"
                            data-success="right"                            
                            /> */}
                        </div>
                        <div className="input-field col s6">
                            <input 
                            name="lastName"
                            value={this.state.lastName}
                            onChange={e=> this.handleChange(e)}
                            id="lastName"
                            type="text"
                            className="validate"
                            placeholder="Last Name"
                            />

                          
                        </div>
                        <div className="input-field col s6">
                            <input 
                            name="contactNumber"
                            value={this.state.contactNumber}
                            onChange={e=> this.handleChange(e)}
                            id="contactNumber"
                            type="text"
                            className="validate"
                            placeholder="Contact Number"
                            />

                          
                        </div>
                    
                    </div>
                    
                       
                        <div className="row">
                        <div className="input-field col-lg-8">
                            <input 
                            name="email"
                            value={this.state.email}
                            onChange={e=> this.handleChange(e)}
                            id="email"
                            type="email"
                            className="validate"
                            placeholder="Email Address"
                            />

                           
                        </div>
                        <div className="input-field col-lg-4">
                            <input 
                            name="verficationCode"
                            value={this.state.verficationCode}
                            onChange={e=> this.handleChange(e)}
                            id="verficationCode"
                            type="text"
                            className="validate"
                            placeholder="Veication code"
                            style={{Position:'absolute',float:'left'}}
                            />
                            <button style={{float:'right'}}>Send</button>
                           
                        </div>
                        </div>
                    
                        <div className="row">
                           <div className="input-field col s6">
                            <input 
                            name="password"
                            value={this.state.password}
                            onChange={e=> this.handleChange(e)}
                            id="password"
                            type="password"
                            className="validate"
                            placeholder="Password"

                            />

                            <label htmlFor="password">Password</label>
                            <span
                            className="helper-text"
                            data-error="wrong"
                            data-success="right"                            
                            />
                            </div>
                            <div className="input-field col s6">
                            <input 
                            name="confirmPassword"
                            value={this.state.confirmPassword}
                            onChange={e=> this.handleChange(e)}
                            id="confirmPassword"
                            type="password"
                            className="validate"
                            placeholder="Confirm Password"
                            />

                        
                            </div>
                        
                        </div>
                    
                        {
                            this.state.errors.length >0 && (
                                <div>
                                    {this.displayErrors(this.state.errors)}
                                </div>
                            )
                        }

                        <div className="row">
                      
                            <div className="input-field col s12">
                            {/* <Link to="/activation"> */}
                                    <button
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick ={this.submitForm}
                                    >Register</button> 
                            {/* </Link> */}
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            </div>

        );
    }
}
export default connect() (register);

