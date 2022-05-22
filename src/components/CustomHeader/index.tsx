import { useNavigate } from "react-router-dom";
import { TitleHeaderStyled, ItemHeaderStyled, ItemLastHeaderStyled, ButtonHeaderStyled, Button2HeaderStyled } from "../Home/Styled.Home";
import { HeadertInnerContentStyled, HeadertStyled, LeftHeadertStyled, LogoHeadertStyled, RighttHeadertStyled } from "./Styled.CustomHeader"


const CustomHeader = () => {
    const navigate = useNavigate();
    return(
        <HeadertStyled>
            <HeadertInnerContentStyled>
                <LeftHeadertStyled onClick={()=> navigate('/')}>
                    <LogoHeadertStyled src={require("../../Assets/logo.png")} alt="logo"/>
                    <TitleHeaderStyled>SPORT LIMA CENTER</TitleHeaderStyled>
                </LeftHeadertStyled>
                <RighttHeadertStyled>
                    <ItemHeaderStyled onClick={()=> navigate('/')}>HOME</ItemHeaderStyled>
                    <ItemHeaderStyled>SEDES</ItemHeaderStyled>
                    <ItemHeaderStyled>TORNEOS</ItemHeaderStyled>
                    <ItemLastHeaderStyled>CONTACTO</ItemLastHeaderStyled>
                    <ButtonHeaderStyled onClick={() => navigate("/login")}>INGRESAR</ButtonHeaderStyled>
                    <Button2HeaderStyled onClick={() => navigate("/registrar")}>REGISTRAR</Button2HeaderStyled>
                </RighttHeadertStyled>
            </HeadertInnerContentStyled>
        </HeadertStyled>
    )
}

export default CustomHeader