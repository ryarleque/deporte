import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { UserContainerStyled, UserInfoContentStyled, UserInfoList, UserSubTitleStyled, UserTitleStyled } from "./Styled.UserInfo";
import CustomHeader from "../CustomHeader";
import { useEffect, useState } from "react";
import { Axios } from "axios";
import Spinner from "../Spinner";

const UserInfo = () => {
    const option = [
        { name: "User Info", route:"/datos", image: <PersonFill/> },
        { name: "Asistencia", route:"/asistencia", image: <Clipboard2CheckFill/>},
        { name: "Rendimiento", route:"/rendimiento", image: <BarChartFill/> },
        { name: "Detalle Rendimiento", route:"/detalle-rendimiento", image: <FileTextFill/>},
    ];
    
    const [userData, setUserData] = useState({
        'name': '',
        'dni': '',
        'phone': '',
        'email': '',
    });

    const [isLoading, setLoading] = useState(false)
    
    useEffect(()=> {
        getUserInfo()
    }, [])

    const getUserInfo = async () => {
        try {
          setLoading(true)
          setUserData({
            'name': 'Renzo Yarleque',
            'dni': '47815972',
            'phone': '983475754',
            'email': 'renzoyarleque@gmail.com',
        })
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
            <UserInfoContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <UserContainerStyled>
                    <UserTitleStyled>DATOS DEL USUARIO</UserTitleStyled>
                    <UserInfoList>
                        <UserSubTitleStyled>NOMBRE Y APELLIDO</UserSubTitleStyled>
                        <div>{userData.name}</div>
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
                </UserContainerStyled   >
            </UserInfoContentStyled>
        </>
    );
}

export default UserInfo;