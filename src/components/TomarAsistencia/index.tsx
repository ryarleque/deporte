import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import CustomHeader from "../CustomHeader";
import { useEffect, useState } from "react";
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import Spinner from "../Spinner";
import { AsistenciaContainerStyled, AsistenciaContentStyled, AsistenciaTitleStyled, CardContainerStyled, CardItemStyled, CardStyled, CustomContainerStyled } from "./Styled.TomarAsistencia";
import Cookies from 'js-cookie'
import Axios from "axios";

const TomarAsistencia = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];
    
    const [asistencia, setAsistencia] = useState([{
        'date': [],
        'branch': '',
        'attended': false,
    }]);

    const [isLoading, setLoading] = useState(false)
    const token = Cookies.get('userTokenSportLimaCenter')

    useEffect(()=> {
        const dni = Cookies.get('userDniSportLimaCenter')
        getUserInfo(dni)
    }, [])

    const getUserInfo = async (dni: any) => {
        try {
          setLoading(true)
          const { data } = await Axios.get(
            process.env.REACT_APP_API + "/attendance",
            { 
                params: { dni },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
          );
          setAsistencia(data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
      };

    return (
        <div>
            <CustomHeader isHome={false} />
            <AsistenciaContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <AsistenciaContainerStyled>
                    <AsistenciaTitleStyled>ASISTENCIA</AsistenciaTitleStyled>
                    <CustomContainerStyled>
                        {asistencia.map((item:any, index:number) => (
                            <CardContainerStyled key={index}>
                                <CardItemStyled>
                                    <div>{item.date[1]}/{item.date[2]}/{item.date[0]}</div>
                                    <div>{item.branch}</div>
                                    {item.attended ? <CheckCircleFill style={{color: 'green'}}/> : <XCircleFill style={{color: '#a21503'}}/> }
                                </CardItemStyled>
                            </CardContainerStyled>
                        ))}
                    </CustomContainerStyled>
                </AsistenciaContainerStyled>
            </AsistenciaContentStyled>
        </div>
    )
}

export default TomarAsistencia;