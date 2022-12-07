import Sidebard from "../Sidebar";
import { Clipboard2CheckFill, PersonCheckFill } from 'react-bootstrap-icons';
import { AsistenciaContentStyled, AsistenciaInnerContentStyled, AsistenciaInnerTitleContentStyled, Button2HeaderStyled, CardSectitonBottomStyled, CardSectitonTopStyled, CardSectitonTopTitleStyled, CardStyled, CheckCircleFillStyled, CheckInnerContentStyled, CustomContainerStyled } from "./Styled.ActualizarUsuario";
import { useState } from "react";
import Spinner from "../Spinner";
import CustomHeader from "../CustomHeader";
import Axios from "axios";
import Cookies from 'js-cookie'

const ActualizarUsuario = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistencia", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <Clipboard2CheckFill/>},
        { name: "ActualizarUsuario", route:"/actualizar-usuario", image: <PersonCheckFill/> },
    ];

    const [isLoading, setLoading] = useState(false)
    const token = Cookies.get('userTokenSportLimaCenter')

    const [dni, setDNI] = useState('')
    const [localDate, setLocalDate] = useState('')
    const [isSuccess, setSuccess] = useState(false)

    const updateUser = async (dni:string, localDate: string) => {
        try {
            setLoading(true)
            const { data } = await Axios.patch(
              process.env.REACT_APP_API + "/users/" + dni,
              {
                date: localDate 
              },
              {
              headers: {
                'Authorization': `Bearer ${token}`
              }}
            );
            setSuccess(true);
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
        setDNI('')
        setLocalDate('')
    }

    return (
        <>
            <CustomHeader isHome={false} />
            <AsistenciaContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <AsistenciaInnerContentStyled>
                    <AsistenciaInnerTitleContentStyled>Actualizar Fecha Usuario</AsistenciaInnerTitleContentStyled> 
                    <CustomContainerStyled>
                        <CardStyled>
                            { isSuccess && <CheckInnerContentStyled><CheckCircleFillStyled/></CheckInnerContentStyled> }
                            <CardSectitonTopStyled>
                                <CardSectitonTopTitleStyled>User Name</CardSectitonTopTitleStyled>
                            </CardSectitonTopStyled>
                            <div>
                                <div><CardSectitonBottomStyled type='tex' placeholder="Ingresar DNI" onChange={(e)=> setDNI((e.target.value))}/></div>
                                <div><CardSectitonBottomStyled type='text' placeholder="Fecha Inicio YYYY-MM-DD" onChange={(e)=> setLocalDate((e.target.value))}/></div>
                                <Button2HeaderStyled onClick={() => updateUser(dni, localDate)}>ACTUALIZAR</Button2HeaderStyled>
                            </div>
                        </CardStyled>
                    </CustomContainerStyled>
                </AsistenciaInnerContentStyled>
            </AsistenciaContentStyled>
        </>
    );
}

export default ActualizarUsuario;