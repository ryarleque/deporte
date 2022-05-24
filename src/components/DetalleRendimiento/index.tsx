import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { DetalleRendimientoContentStyled, DetalleRendimientoInnerContentStyled } from "./Styled.DetalleRendimiento";
import { useState, useEffect } from "react";
import CustomHeader from "../CustomHeader";
import Spinner from "../Spinner";

const DetalleRendimiento = () => {
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
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
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
        //         user
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
            <DetalleRendimientoContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <DetalleRendimientoInnerContentStyled>
                    <div>content DetalleRendimiento</div>
                    <div>
                        <div>
                            <div>TEST 1</div>
                            <div>{'>'}</div>
                        </div>

                        <div>
                            <div>
                                <div>V. Promedio</div>
                                <div>30.02</div>
                                <div>km/h</div>
                            </div>

                            <div>
                                <div>
                                    <div>RESISTENCIA</div>
                                    <div>
                                        <div>1:30</div>
                                        <div>km</div>
                                    </div>
                                </div>

                                <div>
                                    <div>POTENCIA</div>
                                    <div>DISTAPARO</div>
                                    <div>
                                        <div>1:30</div>
                                        <div>km</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <div>POTENCIA</div>
                                    <div>FISICA</div>
                                    <div>
                                        <div>4</div>
                                    </div>
                                </div>

                                <div>
                                    <div>DEFINICION</div>
                                    <div>
                                        <div>25.3</div>
                                        <div>km</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div>VER DETALLE</div>
                    </div>
                </DetalleRendimientoInnerContentStyled>
            </DetalleRendimientoContentStyled>
        </>
    );
}

export default DetalleRendimiento;