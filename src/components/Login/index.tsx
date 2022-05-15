import React, { useState } from "react";
import { ButtonStyled, CardtStyled, ContainerStyled, ErrorStyled, InputStyled, TitleStyled } from "./Styled.button";
import Axios from "axios";

const Login = () => {

  const [user, setUser] = useState('')
  const [isError, setError] = useState(false)
  
  const handleLogin = () => {
    console.log(user)
    //call service
    fetchData(user)
  }

  const fetchData = async (user: string) => {
      debugger
    try {
      const { data } = await Axios.post(
        process.env.REACT_APP_API + "login",
        {
          params: {
            user
          }
        }
      );
      console.log(data);
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  };
  
  return (
    <ContainerStyled>
        <CardtStyled>
            <TitleStyled>Sport Lima Center</TitleStyled>
           <InputStyled className={isError ? 'error' : ''} placeholder="Ingresar usuario" onChange={(e) => setUser(e.currentTarget.value)}/>
           { isError && <ErrorStyled>Usuario incorrecto.</ErrorStyled> }
           <ButtonStyled onClick={() => handleLogin()}>Iniciar sesion </ButtonStyled>
        </CardtStyled>
    </ContainerStyled>
  );
}

export default Login;