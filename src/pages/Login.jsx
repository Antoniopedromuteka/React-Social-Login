import React from 'react'

import {BsGoogle, BsFacebook, BsGithub} from "react-icons/bs"

const Login = () => {
  return (
    <div className="login">
        <h1 className="loginTitle">Choose a Login Method  </h1>


        <div className="wrapper">
             <div className="left">

                <div className="loginButton google">
                  <BsGoogle className='icon'/> Google
                </div>
                <div className="loginButton facebook">
                  <BsFacebook className='icon'/> Facebook 
                </div><div className="loginButton github">
                  <BsGithub className='icon'/> Github
                </div>

             </div>

             <div className="center">
                <div className="line"/>
                <div className="or">OR</div>
             </div>

             <div className="right">

                <input type="text" name="" placeholder='Username' />
                <input type="text" name="" placeholder='Password' />

                <button className="submit">
                    Login
                </button>


            </div>   

        </div>
    </div>
  )
}

export default Login