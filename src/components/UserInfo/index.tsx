import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { UserContainerStyled, UserInfoContentStyled, UserInfoList, UserSubTitleStyled, UserTitleStyled } from "./Styled.UserInfo";
import CustomHeader from "../CustomHeader";
import { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "../Spinner";
import Cookies from 'js-cookie'

const UserInfo = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];
    
    const [userData, setUserData] = useState({
        'fullName': '',
        'dni': '',
        'phone': '',
        'email': '',
        'startDate': [],
        'remainingDays': ''
    });

    const [isLoading, setLoading] = useState(false)
    const token = Cookies.get('userTokenSportLimaCenter')
    
    useEffect(()=> {
        const dni = Cookies.get('userDniSportLimaCenter')
        getUserInfo(dni as any)
    }, [])

    const getUserInfo = async (dni: string) => {
        try {
          setLoading(true)
            const { data } = await Axios.get(
                process.env.REACT_APP_API + "/users/dni/" + dni , 
                { 
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
            <UserInfoContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <UserContainerStyled>
                    <UserTitleStyled>DATOS DEL USUARIO</UserTitleStyled>
                    <UserInfoList>
                        <UserSubTitleStyled>NOMBRE Y APELLIDO</UserSubTitleStyled>
                        <div>{userData.fullName}</div>
                    </UserInfoList>
                    <UserInfoList>
                        <UserSubTitleStyled>DNI</UserSubTitleStyled>
                        <div>{userData.dni}</div>
                    </UserInfoList>
                    <UserInfoList>
                        <UserSubTitleStyled>CELULAR</UserSubTitleStyled>
                        <div>{userData.phone}</div>
                    </UserInfoList>
                    <UserInfoList>
                        <UserSubTitleStyled>EMAIL</UserSubTitleStyled>
                        <div>{userData.email}</div>
                    </UserInfoList>
                    <UserInfoList>
                        <UserSubTitleStyled>FECHA DE INICIO</UserSubTitleStyled>
                        <div>{userData.startDate[1]}/{userData.startDate[2]}/{userData.startDate[0]}</div>
                    </UserInfoList>
                    <UserInfoList>
                        <UserSubTitleStyled>SESIONES PENDIENTES</UserSubTitleStyled>
                        <div>{userData.remainingDays}</div>
                    </UserInfoList>
                </UserContainerStyled >
            </UserInfoContentStyled>
        </>
    );
}

export default UserInfo;