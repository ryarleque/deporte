import Sidebard from "../Sidebar";
import { PersonFill, Clipboard2CheckFill, BarChartFill, FileTextFill } from 'react-bootstrap-icons';
import { CardContentStyled, CardDetailLeftStyled, CardDetailRightStyled, CardDetailsStyled, CardImageStyled, CardItemDetailStyled, CardNumberDetailStyled, CardTitleStyled, CardUserNameStyled, DetalleRendimientoContentStyled, DetalleRendimientoInnerContentStyled } from "./Styled.DetalleRendimiento";
import { useState, useEffect } from "react";
import CustomHeader from "../CustomHeader";
import Spinner from "../Spinner";
import Cookies from 'js-cookie'

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
            <DetalleRendimientoContentStyled>
                <Sidebard list={option}/>
                { isLoading && <Spinner /> }
                <DetalleRendimientoInnerContentStyled>
                    <div>RENDIMIENTO DE TEST</div>
                    <CardContentStyled>
                        <CardTitleStyled>Evaluacion 1</CardTitleStyled>
                        <CardImageStyled src={require("../../Assets/card.png")} alt="logo"/>
                        <div>FOTO</div>
                        <CardUserNameStyled>Nombre completo</CardUserNameStyled>
                        <CardDetailsStyled>
                            <CardDetailLeftStyled>
                                <CardNumberDetailStyled>91 <CardItemDetailStyled>RIT</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>75 <CardItemDetailStyled>TIR</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>77 <CardItemDetailStyled>PAS</CardItemDetailStyled></CardNumberDetailStyled>
                            </CardDetailLeftStyled>

                            <CardDetailRightStyled>
                                <CardNumberDetailStyled>86 <CardItemDetailStyled>REG</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>46 <CardItemDetailStyled>DEF</CardItemDetailStyled></CardNumberDetailStyled>
                                <CardNumberDetailStyled>62 <CardItemDetailStyled>FIS</CardItemDetailStyled></CardNumberDetailStyled>
                            </CardDetailRightStyled>
                        </CardDetailsStyled>
                    </CardContentStyled>
                </DetalleRendimientoInnerContentStyled>
            </DetalleRendimientoContentStyled>
        </>
    );
}

export default DetalleRendimiento;