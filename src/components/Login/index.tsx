import React, { useState } from "react";
import { ButtonStyled, CardContainerStyled, CardtStyled, ContainerStyled, ErrorStyled, InputStyled, TitleStyled } from "./Styled.button";
import Axios from "axios";
import CustomHeader from "../CustomHeader";
import { ContentWhatsappStyled, WhatsappContentStyled } from "../CustomFooter/Styled.CustomFooter";import Spinner from "../Spinner";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'

const Register = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate();
  
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
        process.env.REACT_APP_API + "/users/login",
        {
            user, password
        }
      );
      const decoded = jwt_decode(data?.token) as any
      console.log(decoded)
      setError(false)
      setLoading(false)
      Cookies.set('userRoleSportLimaCenter', decoded.roles[0], { expires: (1/24)*4 })
      Cookies.set('userDniSportLimaCenter', decoded.sub , { expires: (1/24)*4 })
      Cookies.set('userTokenSportLimaCenter', data?.token , { expires: (1/24)*4 })
      if(decoded?.roles[0] === 'ROLE_alumno') {
        navigate('/datos')
      }
      if(decoded?.roles[0] === 'ROLE_profesor') {
        navigate('/tomar-asistencia')
      }
      if(decoded?.roles[0] === 'ROLE_admin') {
        navigate('/costos')
      }
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
                <InputStyled className={isError ? 'error' : ''} placeholder="Ingresar dni" onChange={(e) => setUser(e.currentTarget.value)}/>
                <InputStyled className={isError ? 'error' : ''} placeholder="Ingresar constrasena" type='password' onChange={(e) => setPassword(e.currentTarget.value)}/>
                { isError && <ErrorStyled>Datos incorrectos.</ErrorStyled> }
                <ButtonStyled onClick={() => handleLogin()}>ENTRAR</ButtonStyled>
            </CardtStyled>
        </CardContainerStyled>

        <ContentWhatsappStyled>
            <a href="https://api.whatsapp.com/send?phone=51902514688&lang=es&text=informacion"> <WhatsappContentStyled/></a>
        </ContentWhatsappStyled>
    </ContainerStyled>
  );
}

export default Register;