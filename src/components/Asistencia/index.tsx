import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill, PersonCheckFill } from 'react-bootstrap-icons';
import { AsistenciaContentStyled, AsistenciaInnerContentStyled, AsistenciaInnerTitleContentStyled, Button2HeaderStyled, CardSectitonBottomStyled, CardSectitonTopInputStyled, CardSectitonTopStyled, CardSectitonTopTitleStyled, CardStyled, SeleccionarSedeContenrStyled, SelectItemContenrStyled } from "./Styled.Asistencia";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import CustomHeader from "../CustomHeader";

const Asistencia = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistencia", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <Clipboard2CheckFill/>},
    ];

    const [isLoading, setLoading] = useState(false)
    const [sede, setSede] = useState(0)
    const [list, setList] = useState([{
        'name': '',
        'remainingDays': 0
    }])

    useEffect(()=> {
        getUserListBySede(sede)
    }, [sede])

    const getUserListBySede = async (idSede: number) => {
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
            //     process.env.REACT_APP_API + "users/location",
            //     {
            //         idSede
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
            <AsistenciaContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <AsistenciaInnerContentStyled>
                    <AsistenciaInnerTitleContentStyled>Tomar Asistencia</AsistenciaInnerTitleContentStyled>
                    <SeleccionarSedeContenrStyled>
                        <div>Seleccionar Sede</div>
                        <SelectItemContenrStyled name="select" onChange={(e) => setSede(e.target.value as any)}>
                            <option value={0}>Surquillo</option>
                            <option value={1} >Ate</option>
                        </SelectItemContenrStyled>
                    </SeleccionarSedeContenrStyled>  
                    <div>
                        {list.map((item:any, index:number) => (
                            <CardStyled>
                                <CardSectitonTopStyled>
                                    <CardSectitonTopTitleStyled>{item.name}</CardSectitonTopTitleStyled>
                                    <div>
                                        <label><CardSectitonTopInputStyled type='checkbox'/>Asistio?</label>
                                    </div>
                                </CardSectitonTopStyled>
                                <div>
                                    <div><CardSectitonBottomStyled type='number' placeholder="Ingresar kilometros"/></div>
                                    <div><CardSectitonBottomStyled type='number' placeholder="Ingresar calorias"/></div>
                                </div>
                            </CardStyled>
                        ))}
                    </div>
                    <Button2HeaderStyled>GUARDAR</Button2HeaderStyled>
                </AsistenciaInnerContentStyled>
            </AsistenciaContentStyled>
        </>
    );
}

export default Asistencia;