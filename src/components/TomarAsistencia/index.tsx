import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import CustomHeader from "../CustomHeader";
import { useEffect, useState } from "react";
import { CheckCircleFill, XCircleFill } from "react-bootstrap-icons";
import Spinner from "../Spinner";
import { AsistenciaContainerStyled, AsistenciaContentStyled, AsistenciaTitleStyled, CardContainerStyled, CardItemStyled, CardStyled } from "./Styled.TomarAsistencia";
import Cookies from 'js-cookie'

const TomarAsistencia = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];
    
    const [asistencia, setAsistencia] = useState([{
        'date': '',
        'sede': '',
        'isAssistance': false,
    }]);

    const [isLoading, setLoading] = useState(false)
    
    useEffect(()=> {
        const dni = Cookies.get('userDniSportLimaCenter')
        getUserInfo(dni)
    }, [])

    const getUserInfo = async (dni: any) => {
        try {
          setLoading(true)
          setAsistencia([
            {
                'date': '20 Junio 2022',
                'sede': 'Surquillo',
                'isAssistance': true
            },
            {
                'date': '23 Junio 2022',
                'sede': 'Surquillo',
                'isAssistance': false
            },
            {
                'date': '26 Junio 2022',
                'sede': 'Surquillo',
                'isAssistance': true
            },
            {
                'date': '29 Junio 2022',
                'sede': 'Surquillo',
                'isAssistance': false
            },
            {
                'date': '03 Julioo 2022',
                'sede': 'Surquillo',
                'isAssistance': true
            },
            {
                'date': '10 Julio 2022',
                'sede': 'Surquillo',
                'isAssistance': true
            }
          ]);
        //   const { data } = await Axios.get(
        //     process.env.REACT_APP_API + "users/asistencia",
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
        <div>
            <CustomHeader isHome={false} />
            <AsistenciaContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                
                <AsistenciaContainerStyled>
                    <AsistenciaTitleStyled>ASISTENCIA</AsistenciaTitleStyled>
                    {asistencia.map((item:any) => (
                        <CardContainerStyled>
                            <CardItemStyled>
                                <div>{item.date}</div>
                                <div>{item.sede}</div>
                                {item.isAssistance ? <CheckCircleFill style={{color: 'green'}}/> : <XCircleFill style={{color: '#a21503'}}/> }
                            </CardItemStyled>
                        </CardContainerStyled>
                    ))}
                </AsistenciaContainerStyled>
            </AsistenciaContentStyled>
        </div>
    )
}

export default TomarAsistencia;