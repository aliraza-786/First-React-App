import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import Image from './SignIcon.png';

export default class SignIn extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <div className="col-xl-4 col-md-4 "></div>
                    <div className="col-xl-4 col-md-4 col-sm-12" id="main">
                        <div className="logo">
                            <img src={Image} alt="signInIcon " />
                            <h3>Sign in</h3>
                            <form>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control glyphicon glyphicon-eye-open" id="pwd" placeholder="Password" />
                                </div>
                                <div id="button">
                                    <button type="button" className="btn" id="btn1"><i>Sign In</i></button><br />
                                    <h5>Or</h5>
                                    <button type="button" className="btn" id="btn2"><i>Create an account</i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 "></div>
                </div>
            </div>
        )
    }
}

// export default SignIn;