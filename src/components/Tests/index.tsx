import Sidebard from "../Sidebar";
import { PersonCheckFill, Clipboard2CheckFill } from 'react-bootstrap-icons';
import { TestCardButtonStyled, TestCardInnerStyled, TestCardInnerTitleStyled, TestCardInputStyled, TestCardStyled, TestCardTitleStyled, TestContentStyled, TestInnerContentStyled, TestInnerCustomOptionsStyled, TestInnerOptionsStyled, TestOptionsStyled, TestSelectStyled, TestTitleStyled } from "./StyledTest";
import CustomHeader from "../CustomHeader";
import Spinner from "../Spinner";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Axios from "axios";

const Tests = () => {
    const option = [
        { name: "Asitencia", route:"/tomar-asistencia", image: <PersonCheckFill/> },
        { name: "Test", route:"/tests", image: <Clipboard2CheckFill/>},
    ];

    const [isLoading, setLoading] = useState(false)
    const [sede, setSede] = useState(1)
    const [testType, setTestType] = useState(0)
    const [alumnoId, setAlumno] = useState(1)
    const [alumnoList, setAlumnoList] = useState([])
    const token = Cookies.get('userTokenSportLimaCenter')

    useEffect(()=> {
      getAlumnoListBySede(sede)
    }, [sede])

    const getAlumnoListBySede = async (sede: number) => {
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
          setAlumnoList(data)
          setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
  };

    return (
        <>
          <CustomHeader isHome={false} />
          <TestContentStyled>
            <Sidebard list={option}/>
            { isLoading && <Spinner /> }
            <TestInnerContentStyled>
              <TestTitleStyled>TESTS DE RENDIMIENTO</TestTitleStyled>
              <TestOptionsStyled>
                <TestInnerOptionsStyled>
                  <TestInnerCustomOptionsStyled>Seleccionar Sede</TestInnerCustomOptionsStyled>
                  <TestSelectStyled name="select" onChange={(e) => setSede(Number(e.target.value as any))}>
                    <option value={1}>Surquillo</option>
                    <option value={0} >Ate</option>
                  </TestSelectStyled>
                </TestInnerOptionsStyled>

                <TestInnerOptionsStyled>
                  <div>Seleccionar Test</div>
                  <TestSelectStyled name="select" onChange={(e) => setTestType(Number(e.target.value as any))}>
                      <option value={0}>Velocidad</option>
                      <option value={1}>Pases</option>
                      <option value={2}>Disparo</option>
                      <option value={3}>Resistencia</option>
                      <option value={4}>Dribling</option>
                      <option value={5}>Defensa</option>
                  </TestSelectStyled>
                </TestInnerOptionsStyled>
              </TestOptionsStyled>
              <br/>
              <TestInnerOptionsStyled>
                  <div>Seleccionar Alumno</div>
                  <TestSelectStyled name="select" onChange={(e) => setAlumno(Number(e.target.value as any))}>
                      { alumnoList.map((item: any) => (
                        <option key={item.id} value={item.id}>{item.fullName}</option>
                      ))}
                  </TestSelectStyled>
              </TestInnerOptionsStyled>

              {testType === 0 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE VELOCIDAD</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Intento 1</TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 25m"/>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 40m"/>
                    
                    <br/>

                    <TestCardInnerTitleStyled>Intento 2</TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 25m"/>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 40m"/>

                    <TestCardButtonStyled>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}
              
              {testType === 1 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE PASES</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Pase Corto <span>(8 intentos / 4 por pie)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar pases correctos"/>

                    <br/>

                    <TestCardInnerTitleStyled>Pase Medio <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar pases correctos"/>

                    <br/>

                    <TestCardInnerTitleStyled>Pase Largo <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar pases correctos"/>

                    <TestCardButtonStyled>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}

              {testType === 2 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE DISPARO</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Tiro Libre <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar aciertos"/>

                    <br/>

                    <TestCardInnerTitleStyled>Tiro Penal <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar aciertos"/>

                    <br/>

                    <TestCardInnerTitleStyled>Tiro con Pase <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar aciertos"/>

                    <TestCardButtonStyled>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}

              {testType === 3 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE RENDIMIENTO</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Circuitos de potencia
                      <div>10: muy bueno</div>
                      <div>5: intermedio</div>
                      <div>1: muy malo</div>
                    </TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar valoracion del 1 al 10"/>

                    <TestCardButtonStyled>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}

              {testType === 4 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE HABILIDAD</TestCardTitleStyled>
                  <div>PENDIENTE</div>
                </TestCardStyled>
              )}

              {testType === 5 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE DEFENSA</TestCardTitleStyled>
                  <div>PENDIENTE</div>
                </TestCardStyled>
              )}
            </TestInnerContentStyled>
        </TestContentStyled>
        </>
    );
}

export default Tests;