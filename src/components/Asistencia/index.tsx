import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, CheckCircleFill, PersonCheckFill } from 'react-bootstrap-icons';
import { AsistenciaContentStyled, AsistenciaInnerContentStyled, AsistenciaInnerTitleContentStyled, Button2HeaderStyled, CardSectitonBottomStyled, CardSectitonTopInputStyled, CardSectitonTopStyled, CardSectitonTopTitleStyled, CardStyled, CheckCircleFillStyled, CheckInnerContentStyled, CustomContainerStyled, SeleccionarSedeContenrStyled, SelectItemContenrStyled } from "./Styled.Asistencia";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import CustomHeader from "../CustomHeader";
import Axios from "axios";
import Cookies from 'js-cookie'

const Asistencia = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistencia", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <Clipboard2CheckFill/>},
        { name: "ActualizarUsuario", route:"/actualizar-usuario", image: <PersonCheckFill/> },
    ];

    const [isLoading, setLoading] = useState(false)
    const [sede, setSede] = useState(1)
    const [list, setList] = useState([{
        'fullName': '',
        'remainingDays': 0
    }])
    const token = Cookies.get('userTokenSportLimaCenter')

    useEffect(()=> {
        getUserListBySede(sede)
    }, [sede])

    const getUserListBySede = async (sede: number) => {
        try {
          setLoading(true)

              const { data } = await Axios.get(
                process.env.REACT_APP_API + "/users/branch/" + sede,
                { 
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
              );
            data.forEach((item: any) => {
              item.isSuccess = false
            });
            setList(data)
            setLoading(false)
        } catch (error) {
          setLoading(false)
          console.log(error)
        }
    };

    const [kilometros, setKilometros] = useState(0)
    const [calorias, setCalorias] = useState(0)
    const [localDate, setLocalDate] = useState('')

    const saveAsistencia = async (item:any, km: number, calories:number, date: string) => {
        try {
            setLoading(true)
            const { data } = await Axios.post(
              process.env.REACT_APP_API + "/attendance",
              {
                 attendances: [
                    { 
                        userId: item.id,
                        km,
                        calories,
                        date
                    }
                  ]
              },
              {
              headers: {
                'Authorization': `Bearer ${token}`
              }}
            );
            item.isSuccess = true;
            setLoading(false)
            cleanVariables()
            console.log(data)
        } catch (error) {
            cleanVariables()
            setLoading(false)
            console.log(error)
        }
    }

    const cleanVariables = () => {
        setKilometros(0)
        setCalorias(0)
    }

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
                            <option value={1}>Surquillo</option>
                            <option value={2} >Ate</option>
                        </SelectItemContenrStyled>
                    </SeleccionarSedeContenrStyled>  
                    <CustomContainerStyled>
                        {list.map((item:any, index:number) => (
                            <CardStyled key={index}>
                                { item.isSuccess && <CheckInnerContentStyled><CheckCircleFillStyled/></CheckInnerContentStyled> }
                                <CardSectitonTopStyled>
                                    <CardSectitonTopTitleStyled>{item.fullName}</CardSectitonTopTitleStyled>
                                </CardSectitonTopStyled>
                                <div>
                                    <div><CardSectitonBottomStyled type='number' placeholder="Ingresar kilometros" onChange={(e)=> setKilometros(Number(e.target.value))}/></div>
                                    <div><CardSectitonBottomStyled type='number' placeholder="Ingresar calorias" onChange={(e)=> setCalorias(Number(e.target.value))}/></div>
                                    <div><CardSectitonBottomStyled type='text' placeholder="Fecha YYYY-MM-DD" onChange={(e)=> setLocalDate((e.target.value))}/></div>
                                    <Button2HeaderStyled onClick={() => saveAsistencia(item, kilometros, calorias, localDate)}>GUARDAR</Button2HeaderStyled>
                                </div>
                            </CardStyled>
                        ))}
                    </CustomContainerStyled>
                </AsistenciaInnerContentStyled>
            </AsistenciaContentStyled>
        </>
    );
}

export default Asistencia;