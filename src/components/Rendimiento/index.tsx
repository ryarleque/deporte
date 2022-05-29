import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { CardBodySectionItemTitleStyled, CardBodySectionTitleStyled, CardBodyTitleStyled, CardHeaderStyled, CardHeaderTitleStyled, CardStyled, RendimientoContentStyled, RendimientoInnterContentStyled, TitleStyled } from "./Styled.Rendimiento";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import CustomHeader from "../CustomHeader";
import Cookies from 'js-cookie'
import Axios from "axios";

const Rendimiento = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    const [isLoading, setLoading] = useState(false)
    const token = Cookies.get('userTokenSportLimaCenter')
    const [userData, setUserData] = useState([{
        'session': '',
        'date': [],
        'km': '',
        'calorias': '',
    }]);
    
    useEffect(()=> {
        const dni = Cookies.get('userDniSportLimaCenter')
        getUserInfo(dni)
    }, [])

    const getUserInfo = async (dni: any) => {
        try {
          setLoading(true)
          const { data } = await Axios.get(
            process.env.REACT_APP_API + "/performance/info",
            { 
                params: { dni },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
          );
          setUserData(data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      };

    return (
        <>
            <CustomHeader isHome={false} />
            <RendimientoContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <RendimientoInnterContentStyled>
                    <TitleStyled>RENDIMIENTO DIARIO</TitleStyled>
                    { userData.map((item: any, index:number) => (
                        <CardStyled>
                            <CardHeaderStyled>
                                <CardHeaderTitleStyled>Sesion {index + 1}</CardHeaderTitleStyled>
                                <div>{item.date[1]}/{item.date[2]}/{item.date[0]}</div>
                            </CardHeaderStyled>

                            <CardBodyTitleStyled>
                                <CardBodySectionTitleStyled>
                                    <div>Recorrido</div>
                                    <CardBodySectionItemTitleStyled>{item.km}</CardBodySectionItemTitleStyled>
                                    <div>km</div>
                                </CardBodySectionTitleStyled>
                                <CardBodySectionTitleStyled>
                                    <div>Calorias</div>
                                    <CardBodySectionItemTitleStyled>{item.calories}</CardBodySectionItemTitleStyled>
                                    <div>Kcaloriass</div>
                                </CardBodySectionTitleStyled>
                            </CardBodyTitleStyled>
                        </CardStyled>
                    ))}
                </RendimientoInnterContentStyled>
            </RendimientoContentStyled>
        </>
    );
}

export default Rendimiento;