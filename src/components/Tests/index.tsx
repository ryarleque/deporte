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
        { name: "ActualizarUsuario", route:"/actualizar-usuario", image: <PersonCheckFill/> },
    ];

    const [isLoading, setLoading] = useState(false)
    const [sede, setSede] = useState(1)
    const [testType, setTestType] = useState(1)
    const [alumnoId, setAlumno] = useState(1)
    const [alumnoList, setAlumnoList] = useState([])
    const token = Cookies.get('userTokenSportLimaCenter')

    
    const [test25m1, setTest25m1] = useState('')
    const [test25m2, setTest25m2] = useState('')
    const [test40m1, setTest40m1] = useState('')
    const [test40m2, setTest40m2] = useState('')

    const [paseCorto, setPaseCorto] = useState('')
    const [paseMedio, setPaseMedio] = useState('')
    const [paseLargo, setPaseLargo] = useState('')

    const [tiroLibre, setTiroLibre] = useState('')
    const [penal, setPenal] = useState('')
    const [tiroPase, setTiroPase] = useState('')

    const [rendimiento, setRendimiento] = useState('')  

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

  const saveTestVelocidad = async () => {
    try {
      setLoading(true)
      await Axios.post(
        process.env.REACT_APP_API + "/performance/test",
        {
            userId: Number(alumnoId),
            testId: Number(testType),
            data: {
             'attempts' : [
              {'25m': Number(test25m1), '40m': Number(test40m1)},
              {'25m': Number(test25m2), '40m': Number(test40m2)},
             ] 
            }
        },
        {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
      );
      setLoading(false)
    } catch(error) {
      setLoading(false)
      console.log(false)
    }
  }

  const saveTestPases = async () => {
    try {
      setLoading(true)
      await Axios.post(
        process.env.REACT_APP_API + "/performance/test",
        {
            userId: Number(alumnoId),
            testId: Number(testType),
            data: 
              {'corto': Number(paseCorto), 'medio': Number(paseMedio), 'largo': Number(paseLargo)}
        },
        {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
      );
      setLoading(false)
    } catch(error) {
      setLoading(false)
      console.log(false)
    }
  }

  const saveTestDisparo = async () => {
    try {
      setLoading(true)
      await Axios.post(
        process.env.REACT_APP_API + "/performance/test",
        {
            userId: Number(alumnoId),
            testId: Number(testType),
            data: 
              {'tiroLibre': Number(tiroLibre), 'penal': Number(penal), 'tiroPase': Number(tiroPase)}
        },
        {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
      );
      setLoading(false)
    } catch(error) {
      setLoading(false)
      console.log(false)
    }
  }

  const saveTestRendimiento = async () => {
    try {
      setLoading(true)
      await Axios.post(
        process.env.REACT_APP_API + "/performance/test",
        {
            userId: Number(alumnoId),
            testId: Number(testType),
            data: 
              {'rendimiento': Number(rendimiento)}
        },
        {
        headers: {
          'Authorization': `Bearer ${token}`
        }}
      );
      setLoading(false)
    } catch(error) {
      setLoading(false)
      console.log(false)
    }
  }

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
                    <option value={2} >Ate</option>
                  </TestSelectStyled>
                </TestInnerOptionsStyled>

                <TestInnerOptionsStyled>
                  <div>Seleccionar Test</div>
                  <TestSelectStyled name="select" onChange={(e) => setTestType(Number(e.target.value as any))}>
                      <option value={1}>Velocidad</option>
                      <option value={2}>Pases</option>
                      <option value={3}>Disparo</option>
                      <option value={4}>Resistencia</option>
                      <option value={5}>Dribling</option>
                      <option value={6}>Defensa</option>
                  </TestSelectStyled>
                </TestInnerOptionsStyled>
              </TestOptionsStyled>
              <br/>
              <TestInnerOptionsStyled>
                  <div>Seleccionar Alumno</div>
                  <TestSelectStyled name="select" onChange={(e) => setAlumno(Number(e.target.value as any))}>
                      { alumnoList.map((item: any, org) => (
                        <option key={item.id} value={item.id}>{item.fullName}</option>
                      ))}
                  </TestSelectStyled>
              </TestInnerOptionsStyled>

              {testType === 1 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE VELOCIDAD</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Intento 1</TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 25m" onChange={(e)=>setTest25m1(e.target.value)}/>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 40m" onChange={(e)=>setTest40m1(e.target.value)}/>
                    
                    <br/>

                    <TestCardInnerTitleStyled>Intento 2</TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 25m" onChange={(e)=>setTest25m2(e.target.value)}/>
                    <TestCardInputStyled type='number' placeholder="Ingresar tiempo de 40m" onChange={(e)=>setTest40m2(e.target.value)}/>

                    <TestCardButtonStyled onClick={()=> saveTestVelocidad()}>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}
              
              {testType === 2 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE PASES</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Pase Corto <span>(8 intentos / 4 por pie)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar pases correctos" onChange={(e)=>setPaseCorto(e.target.value)}/>

                    <br/>

                    <TestCardInnerTitleStyled>Pase Medio <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar pases correctos" onChange={(e)=>setPaseMedio(e.target.value)}/>

                    <br/>

                    <TestCardInnerTitleStyled>Pase Largo <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar pases correctos" onChange={(e)=>setPaseLargo(e.target.value)}/>

                    <TestCardButtonStyled onClick={()=> saveTestPases()}>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}

              {testType === 3 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE DISPARO</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Tiro Libre <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar aciertos" onChange={(e)=>setTiroLibre(e.target.value)}/>

                    <br/>

                    <TestCardInnerTitleStyled>Tiro Penal <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar aciertos" onChange={(e)=>setPenal(e.target.value)}/>

                    <br/>

                    <TestCardInnerTitleStyled>Tiro con Pase <span>(3 intentos)</span></TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar aciertos" onChange={(e)=>setTiroPase(e.target.value)}/>

                    <TestCardButtonStyled onClick={()=> saveTestDisparo()}>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}

              {testType === 4 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE RENDIMIENTO</TestCardTitleStyled>
                  <TestCardInnerStyled>
                    <TestCardInnerTitleStyled>Circuitos de potencia
                      <div>10: muy bueno</div>
                      <div>5: intermedio</div>
                      <div>1: muy malo</div>
                    </TestCardInnerTitleStyled>
                    <TestCardInputStyled type='number' placeholder="Ingresar valoracion del 1 al 10" onChange={(e)=>setRendimiento(e.target.value)}/>

                    <TestCardButtonStyled onClick={()=> saveTestRendimiento()}>GUARDAR</TestCardButtonStyled>
                  </TestCardInnerStyled>
                </TestCardStyled>
              )}

              {testType === 5 && (
                <TestCardStyled>
                  <TestCardTitleStyled>TEST DE HABILIDAD</TestCardTitleStyled>
                  <div>PENDIENTE</div>
                </TestCardStyled>
              )}

              {testType === 6 && (
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