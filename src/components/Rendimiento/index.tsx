import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { CardBodySectionItemTitleStyled, CardBodySectionTitleStyled, CardBodyTitleStyled, CardHeaderStyled, CardHeaderTitleStyled, CardStyled, RendimientoContentStyled, RendimientoInnterContentStyled, TitleStyled } from "./Styled.Rendimiento";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import CustomHeader from "../CustomHeader";
import Cookies from 'js-cookie'

const Rendimiento = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    const [isLoading, setLoading] = useState(false)
    const [userData, setUserData] = useState([{
        'session': '',
        'date': '',
        'distancia': '',
        'calorias': '',
    }]);
    
    useEffect(()=> {
        const dni = Cookies.get('userDniSportLimaCenter')
        getUserInfo(dni)
    }, [])

    const getUserInfo = async (dni: any) => {
        try {
          setLoading(true)
          setUserData([
            {
                'session': '1',
                'date': '30/10/2022',
                'distancia': '3.6',
                'calorias': '420',
            },
            {
                'session': '2',
                'date': '02/11/2022',
                'distancia': '4.6',
                'calorias': '320',
            },
            {
                'session': '3',
                'date': '05/11/2022',
                'distancia': '5.8',
                'calorias': '420',
            },
            {
                'session': '4',
                'date': '10/11/2022',
                'distancia': '7.1',
                'calorias': '512',
            },
            {
                'session': '5',
                'date': '13/11/2022',
                'distancia': '7.3',
                'calorias': '579',
            }
          ])
        //   const { data } = await Axios.get(
        //     process.env.REACT_APP_API + "users/datos",
        //     {
        //         dni
        //     }
        //   );
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
                                <CardHeaderTitleStyled>Sesion {item.session}</CardHeaderTitleStyled>
                                <div>{item.date}</div>
                            </CardHeaderStyled>

                            <CardBodyTitleStyled>
                                <CardBodySectionTitleStyled>
                                    <div>Recorrido</div>
                                    <CardBodySectionItemTitleStyled>{item.distancia}</CardBodySectionItemTitleStyled>
                                    <div>km</div>
                                </CardBodySectionTitleStyled>
                                <CardBodySectionTitleStyled>
                                    <div>Calorias</div>
                                    <CardBodySectionItemTitleStyled>{item.calorias}</CardBodySectionItemTitleStyled>
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