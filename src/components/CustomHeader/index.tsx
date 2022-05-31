import { useNavigate } from "react-router-dom";
import { TitleHeaderStyled, ItemHeaderStyled, ItemLastHeaderStyled, ButtonHeaderStyled, Button2HeaderStyled } from "../Home/Styled.Home";
import { Button2HeaderMobileStyled, HeadertInnerContentStyled, HeadertStyled, LeftHeadertStyled, LogoHeadertStyled, MobileContentHeaderStyled, MobileHeaderStyled, RighttHeadertStyled, WebHeaderStyled } from "./Styled.CustomHeader"
import { List } from 'react-bootstrap-icons';
import Axios from "axios";
import Cookies from 'js-cookie'
import { useEffect, useState } from "react";

const CustomHeader = ({isHome = true }) => {
    const navigate = useNavigate();
    const token = Cookies.get('userTokenSportLimaCenter')
    const [userInfo, setUserInfo] = useState('')
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
    
    useEffect(()=> {
        const dni = Cookies.get('userDniSportLimaCenter')
        getUserInfo(dni as any)
    }, [])

    const getUserInfo = async (dni: string) => {
        try {
            const { data } = await Axios.get(
                process.env.REACT_APP_API + "/users/dni/" + dni , 
                { 
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
                
            );
          setUserInfo(data.fullName)
        } catch (error) {
          console.log(error)
        }
    };
    
    return(
        <HeadertStyled>
            <HeadertInnerContentStyled>
                <LeftHeadertStyled onClick={()=> navigate('/')}>
                    <LogoHeadertStyled src={require("../../Assets/logo.jpeg")} alt="logo"/>
                    <TitleHeaderStyled>LIMA SPORT CENTER</TitleHeaderStyled>
                </LeftHeadertStyled>
                <RighttHeadertStyled>
                    { isHome ? (
                        <>
                            <WebHeaderStyled>
                                <ItemHeaderStyled onClick={()=> navigate('/')}>HOME</ItemHeaderStyled>
                                <ItemHeaderStyled>SEDES</ItemHeaderStyled>
                                <ItemHeaderStyled>TORNEOS</ItemHeaderStyled>
                                <ItemLastHeaderStyled onClick={()=> window.location.replace("https://api.whatsapp.com/send?phone=51983475754&lang=es&text=informacion")}>CONTACTO</ItemLastHeaderStyled>
                                <ButtonHeaderStyled onClick={() => navigate("/login")}>INGRESAR</ButtonHeaderStyled>
                                <Button2HeaderStyled onClick={() => navigate("/registrar")}>REGISTRAR</Button2HeaderStyled>
                            </WebHeaderStyled>
                            <MobileHeaderStyled>
                                { !mobileMenuVisible ? (
                                    <List className='list' onClick={()=> setMobileMenuVisible(true)}/>
                                ) : (
                                    <MobileContentHeaderStyled>
                                        <ItemHeaderStyled onClick={()=> navigate('/')}>HOME</ItemHeaderStyled>
                                        <ItemHeaderStyled onClick={()=> setMobileMenuVisible(false)}>SEDES</ItemHeaderStyled>
                                        <ItemHeaderStyled onClick={()=> setMobileMenuVisible(false)}>TORNEOS</ItemHeaderStyled>
                                        <ItemHeaderStyled onClick={()=> setMobileMenuVisible(false)}>CONTACTO</ItemHeaderStyled>
                                        <ButtonHeaderStyled className="yellow-button" onClick={() => navigate("/login")}>INGRESAR</ButtonHeaderStyled>
                                        <Button2HeaderMobileStyled onClick={() => navigate("/registrar")}>REGISTRAR</Button2HeaderMobileStyled>
                                    </MobileContentHeaderStyled>
                                )}
                            </MobileHeaderStyled>
                        </>
                    ) : (
                        <ItemHeaderStyled>{userInfo}</ItemHeaderStyled>
                    )}
                </RighttHeadertStyled>
            </HeadertInnerContentStyled>
        </HeadertStyled>
    )
}

export default CustomHeader