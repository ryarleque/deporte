import { useNavigate } from "react-router-dom";
import { TitleHeaderStyled, ItemHeaderStyled, ItemLastHeaderStyled, ButtonHeaderStyled, Button2HeaderStyled } from "../Home/Styled.Home";
import { HeadertStyled, LeftHeadertStyled, LogoHeadertStyled, RighttHeadertStyled } from "./Styled.CustomHeader"


const CustomHeader = () => {
    const navigate = useNavigate();
    return(
        <HeadertStyled>
               <LeftHeadertStyled>
                    <LogoHeadertStyled src={require("../../Assets/logo.png")} alt="logo"/>
                    <TitleHeaderStyled>SPORT LIMA CENTER</TitleHeaderStyled>
               </LeftHeadertStyled>
               <RighttHeadertStyled>
                   <ItemHeaderStyled>HOME</ItemHeaderStyled>
                   <ItemHeaderStyled>SEDES</ItemHeaderStyled>
                   <ItemHeaderStyled>TORNEOS</ItemHeaderStyled>
                   <ItemLastHeaderStyled>CONTACTO</ItemLastHeaderStyled>
                   <ButtonHeaderStyled onClick={() => navigate("/login")}>INGRESAR</ButtonHeaderStyled>
                   <Button2HeaderStyled onClick={() => navigate("/registrar")}>REGISTRAR</Button2HeaderStyled>
               </RighttHeadertStyled>
           </HeadertStyled>
    )
}

export default CustomHeader