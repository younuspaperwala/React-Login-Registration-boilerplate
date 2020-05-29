import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/userActions'
import {Link} from 'react-router-dom';
//components

//1. navbar
import NavbarComponent from '../navbar/navbar'

class RegisterLogin extends Component {


 

constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
        errors:[]
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
}
handleChange(e)
{
    this.setState({[e.target.name]:e.target.value})
}


submitForm(e){
    e.preventDefault();

    let dataToSubmit={
        email:this.state.email,
        password:this.state.password
    };

    if(this.isFormvalid(this.state)){
        this.setState({error:[]})
    
    this.props.dispatch(loginUser(dataToSubmit)).then(
        response=> {
            
            console.log(response)
        if (response.payload.LoginSuccess)
        {
            this.props.history.push('/');
        }
        else{
            this.setState({errors:this.state.errors.concat("Failed to login. Incorrect Username or Password")})
        }
        }

    
    )
    }

    else{
        this.setState({errors:this.state.errors.concat("Enter correct details")})
    }
    

}


isFormvalid =({email,password})=> email&&password;

displayErrors = errors=>{
 errors.map((error,i)=> 
     <p key={i}>
        {error}
     </p>
 );
}
    render() {


        // handleChange(e){
        //     // this.setState({ e.target.name  : e.target.value  })
        // }
        return (
            <div>

            <NavbarComponent />

            <div className="container">

                <h2>Login Page</h2>
                <div className="row">
                    <form className="col 12" >
                    {/* onSubmit={event=>this.submitForm(e)} */}
                        <div className="row">
                        <div className="input-field col s12">
                            <input 
                            name="email"
                            value={this.state.email}
                            onChange={e=> this.handleChange(e)}
                            id="email"
                            type="email"
                            className="validate"
                            />

                            <label htmlFor="email">Email</label>
                            <span
                            className="helper-text"
                            data-error="Type a right type email"
                            data-success="right"                            
                            />
                        </div>
                        </div>
                    
                        <div className="row">
                           <div className="input-field col s12">
                            <input 
                            name="password"
                            value={this.state.password}
                            onChange={e=> this.handleChange(e)}
                            id="password"
                            type="password"
                            className="validate"
                            />

                            <label htmlFor="password">Password</label>
                            <span
                            className="helper-text"
                            data-error="wrong"
                            data-success="right"                            
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
                                    <button
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    onClick={this.submitForm}
                                    >Login</button> 
                            </div>
                            <div className="input-field col s12">
                            <Link to="/register">
                                    <button
                                    className="btn waves-effect red lighten-2"
                                    type="submit"
                                    name="action"
                                    >Sign up</button> 
                            </Link>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
            </div>

        );
    }
}


function mapStateToProp(state){
    return {
        user :state.user
    }
}
export default connect  (mapStateToProp) (RegisterLogin);