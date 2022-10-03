import React from 'react';
import styled from "styled-components";
import Logo from "./assets/Foodie.svg";
import './App.css';


function Login () {

    function handleSubmit( e ) {
        e.preventDefault();
        console.log("submitted!");

    }

    return (



                    <LoginForm>
                        <h2>Login page</h2>

                        <form onSubmit={handleSubmit}>

                            <FormContainer>
                                <label htmlFor="">Login Name</label>
                                <input
                                    type="text"
                                    placeholder="User name"
                                />
                                <label htmlFor="">Password</label>
                                <input
                                    type="text"
                                    placeholder="Password"
                                />
                                <button
                                    type="submit"
                                >
                                    {/*temp solution for login screen route....*/}
                                    <a href="http://localhost:3000/home">Login</a>
                                </button>
                            </FormContainer>

                            <p>Don't have an account yet? Please first register here!</p>



                        </form>

                    </LoginForm>





    );
}

export default Login ;

const LoginForm = styled.div`

  margin-top: 100px;
  height: 620px;
  width: 100%;
  
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

`;