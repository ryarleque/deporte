import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { AsistenciaContentStyled } from "./Styled.Asistencia";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const Asistencia = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];

    const [isLoading, setLoading] = useState(false)
    const [sede, setSede] = useState('-1')
    const [list, setList] = useState([{
        'name': '',
        'remainingDays': 0
    }])

    useEffect(()=> {
        if(sede !== '') {
            getUserListBySede(sede)
        }
    }, [sede])

    const getUserListBySede = async (sede: string) => {
        try {
          setLoading(true)
          setList([
                {
                    'name': 'Renzo Yarleque',
                    'remainingDays': 2
                },
                {
                    'name': 'Carlos Vallejos',
                    'remainingDays': 9
                },
                {
                    'name': 'Christian Diaz',
                    'remainingDays': 1
                },
                {
                    'name': 'Renzo Yarleque',
                    'remainingDays': 2
                },
                {
                    'name': 'Carlos Vallejos',
                    'remainingDays': 4
                },
                {
                    'name': 'Christian Diaz',
                    'remainingDays': 1
                },
            ])
            //   const { data } = await Axios.get(
            //     process.env.REACT_APP_API + "users/datos",
            //     {
            //         sede
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
            <AsistenciaContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <div>
                    <div>content Asistencia</div>
                    <div>
                        <div>Seleccionar Sede</div>
                        <select name="select" onChange={(e) => setSede(e.target.value)}>
                            <option value="-1" disabled>Sedes</option>
                            <option value="Surquillo">Surquillo</option>
                            <option value="Ate" >Ate</option>
                        </select>
                    </div>  
                    <div>
                        {list.map((item:any, index:number) => (
                            <div>
                                <div>{item.name}</div>
                                <div><input type='checkbox' aria-label="Asistio?"/></div>
                                <div><input type='text' placeholder="Ingresar kilometros"/></div>
                                <div><input type='text' placeholder="Ingresar calorias"/></div>
                            </div>
                        ))}
                    </div>
                    <button type="submit">GUARDAR</button>
                </div>
            </AsistenciaContentStyled>
        </>
    );
}

export default Asistencia;