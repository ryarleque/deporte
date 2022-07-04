import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { CardContentStyled, CardDetailLeftStyled, CardDetailRightStyled, CardDetailsStyled, CardImageStyled, CardItemDetailStyled, CardNumberDetailStyled, CardTitleStyled, CardUserNameStyled, DetalleRendimientoContentStyled, DetalleRendimientoInnerContentStyled, EscudoStyled, UserInfoStyled, UserPromedioStyled } from "./Styled.DetalleRendimiento";
import { useState, useEffect } from "react";
import CustomHeader from "../CustomHeader";
import Spinner from "../Spinner";
import Cookies from 'js-cookie'
import { TitleStyled } from "../Rendimiento/Styled.Rendimiento";
import Axios from "axios";

const DetalleRendimiento = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    const [isLoading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState('')
    const token = Cookies.get('userTokenSportLimaCenter')

    
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

    return (
        <>
            <CustomHeader isHome={false} />
            <DetalleRendimientoContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <DetalleRendimientoInnerContentStyled>
                    <TitleStyled>RENDIMIENTO DE TEST</TitleStyled>
                    <CardContentStyled>
                        <CardTitleStyled>Evaluacion 1</CardTitleStyled>
                        <CardImageStyled src={require("../../Assets/card.png")} alt="logo"/>
                        <UserPromedioStyled>72</UserPromedioStyled>
                        <UserInfoStyled src={require("../../Assets/user.png")} alt="logo" />
                        <EscudoStyled src={require("../../Assets/logo.jpeg")} alt="logo" />
                        <CardUserNameStyled>{userInfo}</CardUserNameStyled>
                        <CardDetailsStyled>
                            <CardDetailLeftStyled>
                                <CardNumberDetailStyled>-- <CardItemDetailStyled>RIT</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>-- <CardItemDetailStyled>TIR</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>-- <CardItemDetailStyled>PAS</CardItemDetailStyled></CardNumberDetailStyled>
                            </CardDetailLeftStyled>

                            <CardDetailRightStyled>
                                <CardNumberDetailStyled>-- <CardItemDetailStyled>REG</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>-- <CardItemDetailStyled>DEF</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>-- <CardItemDetailStyled>FIS</CardItemDetailStyled></CardNumberDetailStyled>
                            </CardDetailRightStyled>
                        </CardDetailsStyled>
                    </CardContentStyled>
                </DetalleRendimientoInnerContentStyled>
            </DetalleRendimientoContentStyled>
        </>
    );
}

export default DetalleRendimiento;