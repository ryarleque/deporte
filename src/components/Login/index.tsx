import React, { useState } from "react";
import { ButtonStyled, CardContainerStyled, CardtStyled, ContainerStyled, ErrorStyled, InputStyled, TitleStyled } from "./Styled.button";
  import Axios from "axios";
import CustomHeader from "../CustomHeader";
import { ContentWhatsappStyled, WhatsappContentStyled } from "../CustomFooter/Styled.CustomFooter";import Spinner from "../Spinner";
;

const Register = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  
  const handleLogin = () => {
    console.log(user)
    console.log(password)
    //call service
    fetchData(user, password)
  }

  const fetchData = async (user: string, password: string) => {
    try {
      setLoading(true)
      const { data } = await Axios.post(
        process.env.REACT_APP_API + "users/login",
        {
            user, password
        }
      );
      console.log(data);
      setError(false)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  };
  
  return (
    <ContainerStyled>
        <CustomHeader/>
        { isLoading && <Spinner /> }
        <CardContainerStyled>
            <CardtStyled>
                <TitleStyled>Ingresar credenciales</TitleStyled>
                <InputStyled className={isError ? 'error' : ''} placeholder="Ingresar usuario" onChange={(e) => setUser(e.currentTarget.value)}/>
                <InputStyled className={isError ? 'error' : ''} placeholder="Ingresar constrasena" type='password' onChange={(e) => setPassword(e.currentTarget.value)}/>
                { isError && <ErrorStyled>Datos incorrectos.</ErrorStyled> }
                <ButtonStyled onClick={() => handleLogin()}>ENTRAR</ButtonStyled>
            </CardtStyled>
        </CardContainerStyled>

        <ContentWhatsappStyled>
            <a href="https://api.whatsapp.com/send?phone=51983475754&lang=es&text=informacion"> <WhatsappContentStyled/></a>
        </ContentWhatsappStyled>

        {/* <CustomFooter/> */}
    </ContainerStyled>
  );
}

export default Register;