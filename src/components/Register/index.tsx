/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { ButtonStyled, CardContainerStyled, CardPlantStyled, CardtStyled, ContainerStyled, ErrorStyled, InputStyled, PlanCardInfotStyled, PlanCardItemStyled, PlanCardListStyled, PlanCardPricetStyled, PlanCardStyled, TitleStyled } from "./Styled.button";
import Axios from "axios";
import CustomHeader from "../CustomHeader";
import { ContentWhatsappStyled, WhatsappContentStyled } from "../CustomFooter/Styled.CustomFooter";
import Spinner from "../Spinner/index";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [isError, setError] = useState(false)
  const [isSecondSectionVisible, setSecondSectionVisible] = useState(false)
  const [isSelectedForm, setSelectedForm] = useState(false)
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [dni, setDni] = useState(0);
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [codigoReferido, setCodigoReferido] = useState('');
  const planBase = 300
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleNextStepRegister = () => {
    setSelectedForm(true)
    if(isValidName() && isValidLastName() && isValidDni() && isValidPhone() && isValidEmail() && isValidPassword()) {
      setError(false)
      setSecondSectionVisible(true)
    } else {
      setError(true)
      setSecondSectionVisible(false)
    }

  }

  const handleRegister = () => {
    fetchData()
  }

  const isValidName = () => {
    return name.trim() !== ''
  }

  const isValidLastName = () => {
    return lastname.trim() !== ''
  }

  const isValidDni = () => {
    return dni <= 99999999 && dni > 11111111
  }

  const isValidPhone = () => {
    return phone <= 999999999 && phone > 111111111
  }

  const isValidEmail = () => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const isValidPassword = () => {
    return password.trim() !== ''
  }

  const getInfoPlan = () => {
    const info = { id: 1, description: '', value: 0, unit: 'S/.', months: 0 }
    const planList3 = planList.find((item:any) => item.name === selectedPlan)
    return {
      ...info,
      id:planList3?.id,
      description: planList3?.name,
      value: 200,
      months: planList3?.suscription,
    }
  }

  const fetchData = async () => {
    setLoading(true)
    const getInfoSelectedPlan = getInfoPlan()
    try {
      const { data } = await Axios.post(
        process.env.REACT_APP_API + "/users/register",
        {
            user : String(dni),
            name,
            lastName: lastname,
            profile: 'alumno',
            phone: String(phone),
            password,
            email,
            branchId: getInfoSelectedPlan.id,
            promo: {
              description: getInfoSelectedPlan.description,
              value: '0',
              unit: 'S/.',
              months: 1
            },
            referralCode: codigoReferido
        }
      );
      console.log(data);
      setError(false)
      setLoading(false)
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  };
  
  // const planList = [
  //   {id:1, name: 'PROMO PENSÁ', suscription: 12, free: [{value: 'Uniforme'},{value: '1 MES GRATIS'}], price:'219', decimalPrice: '90' },
  //   {id:2, name: 'PROMO LAPADULA', suscription: 5, free: [{value: 'Uniforme'}], price:'249', decimalPrice: '90' },
  //   {id:3, name: 'PROMO CUEVITA', suscription: 3, free: [{value: 'Uniforme'}], price:'269', decimalPrice: '90' },
  // ];
  const planList = [
    {id:1, name: 'PROMO PENSÁ', suscription: 6, free: [{value: 'Uniforme'},{value: '1 SEMANA GRATIS'}], price:'199', decimalPrice: '90' },
    {id:2, name: 'PROMO LAPADULA', suscription: 3, free: [{value: 'Uniforme'}], price:'224', decimalPrice: '90' },
    {id:3, name: 'PROMO CUEVITA', suscription: 1, free: [{value: 'Uniforme 20 Primeros'}], price:'249', decimalPrice: '90' },
  ];

  const [selectedPlan, setSelectedPlan] = useState('PROMO PENSÁ')

  const handleItemSelection = (item: string) => {
    setSelectedPlan(item)
  }

  const handleSetCard = () => {
    //call pasarela de pagos service
    handleRegister()
  }

  return (
    <ContainerStyled>
        <CustomHeader/>
        { isLoading && <Spinner /> }
        <CardContainerStyled>
          { !isSecondSectionVisible ? 
          <CardtStyled>
            <TitleStyled>Registrar datos</TitleStyled>
            <InputStyled type='text' className={isSelectedForm && !isValidName() ? 'error' : '' } placeholder='Ingresar nombre' onChange={(e) => setName(e.target.value)}/>
            <InputStyled type='text' className={isSelectedForm && !isValidLastName() ? 'error' : '' } placeholder='Ingresar apellidos' onChange={(e) => setLastname(e.target.value)}/>
            <InputStyled type='number' pattern="\d*" maxLength={8} className={isSelectedForm && !isValidDni() ? 'error' : '' } placeholder='Ingresar dni' onChange={(e) => setDni(Number(e.target.value))}/>
            <InputStyled type='password' className={isSelectedForm && !isValidPassword() ? 'error' : '' } placeholder='Crear contrasena' onChange={(e) => setPassword(e.target.value)}/>
            <InputStyled type='number' pattern="\d*" maxLength={9} className={isSelectedForm && !isValidPhone() ? 'error' : '' } placeholder='Ingresar celular' onChange={(e) => setPhone(Number(e.target.value))}/>
            <InputStyled type='text' className={isSelectedForm && !isValidEmail() ? 'error' : '' } placeholder='Ingresar email' onChange={(e) => setEmail(e.target.value)}/>
            <InputStyled type='number' pattern="\d*" max={8} placeholder="Codigo de referido" onChange={(e)=> setCodigoReferido(e.target.value)}/>
            { isError && <ErrorStyled>Actualizar datos</ErrorStyled> }
            <ButtonStyled onClick={() => handleNextStepRegister()}>CONTINUAR</ButtonStyled>
          </CardtStyled>
          : (
          <CardPlantStyled>
            <TitleStyled>Elige tu promo</TitleStyled>
            <PlanCardInfotStyled>!Aprovecha nuestras ofertas! que incluyen <span>acceso a la APP, plan nutricional, 2 clases recuperables al mes, test de evaluación semanal y mensual, participacion en torneos, CUPOS LIMITADOS!!</span></PlanCardInfotStyled>
            {/* <PlanCardInfotStyled>Recuerda que <span className="type1">SOLO PAGARÁS EL MONTO DE LA PROMO INDICADO</span> al inicio de cada mes, <span className="type2">NO PAGARÁS TODO DE UNA!!</span> </PlanCardInfotStyled>
            <br/>
            { planList.map((item: any) => (
              <PlanCardStyled className={item.name === selectedPlan ? 'selected' : ''} onClick={()=>handleItemSelection(item.name)}>
                <PlanCardItemStyled >{item.name}</PlanCardItemStyled>
                <PlanCardListStyled>
                  <div className="item">Suscripción</div>
                  <div>{item.suscription} meses</div>
                </PlanCardListStyled>
                <PlanCardListStyled>
                  <div className="item">Incluye</div>
                  {item.free.map((detail: any) => (
                    <div>{detail.value}</div>
                  ))}
                </PlanCardListStyled>
                <PlanCardPricetStyled>
                  <div>S/</div>
                  <div className="principal">{item.price},</div>
                  <div>{item.decimalPrice}</div>
                </PlanCardPricetStyled>
              </PlanCardStyled>
            ))} */}
            <PlanCardInfotStyled>Aprovecha nuestros <span className="type1">PLANES DE PRE VENTA</span> por tiempo limitado. <span className="type2">PAGARÁS MUCHO MENOS POR TU CUOTA MENSUAL!!</span> </PlanCardInfotStyled>
            <br/>
            { planList.map((item: any) => (
            <PlanCardStyled className={item.name === selectedPlan ? 'selected' : ''}>
                <PlanCardItemStyled >{item.name}</PlanCardItemStyled>
                <PlanCardListStyled>
                <div className="item">Suscripción</div>
                <div>{item.suscription} meses</div>
                </PlanCardListStyled>
                <PlanCardListStyled>
                <div className="item">Incluye</div>
                {item.free.map((detail: any) => (
                    <div>{detail.value}</div>
                ))}
                </PlanCardListStyled>
                <PlanCardPricetStyled>
                <div>S/</div>
                <div className="principal">{item.price},</div>
                <div>{item.decimalPrice}</div>
                </PlanCardPricetStyled>
            </PlanCardStyled>
            ))}
            <ButtonStyled onClick={() => handleSetCard()}>REGISTRAR</ButtonStyled>
        </CardPlantStyled>)
        }
            
        </CardContainerStyled>

        <ContentWhatsappStyled>
            <a href="https://api.whatsapp.com/send?phone=51902514688&lang=es&text=informacion"> <WhatsappContentStyled/></a>
        </ContentWhatsappStyled>
    </ContainerStyled>
  );
}

export default Login;