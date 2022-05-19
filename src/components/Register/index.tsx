/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { ButtonStyled, CardContainerStyled, CardPlantStyled, CardtStyled, ContainerStyled, ErrorStyled, InputStyled, PlanCardInfotStyled, PlanCardItemStyled, PlanCardListStyled, PlanCardPricetStyled, PlanCardStyled, TitleStyled } from "./Styled.button";
import Axios from "axios";
import CustomHeader from "../CustomHeader";
import CustomFooter from "../CustomFooter";
import { ContentWhatsappStyled, WhatsappContentStyled } from "../CustomFooter/Styled.CustomFooter";;

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
  
  const handleNextStepRegister = () => {
    setSelectedForm(true)
    if(isValidName() && isValidLastName() && isValidDni() && isValidPhone() && isValidEmail() && isValidPassword()) {
      setError(false)
      setSecondSectionVisible(true)
      // handleLogin()
    } else {
      setError(true)
      setSecondSectionVisible(false)
    }

  }

  const handleLogin = () => {
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

  const fetchData = async () => {
    try {
      const { data } = await Axios.post(
        process.env.REACT_APP_API + "users/register",
        {
            user : String(dni),
            name,
            lastName: lastname,
            profile: 'alumno',
            phone: String(phone),
            password,
            email,
            branchId: 1,
            promo: {
              description: 'Descuento nuevo alumno',
              value: 80,
              unit: 'S/.'
            }
        }
      );
      console.log(data);
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  };
  
  const planList = [
    {name: 'PROMO PENSA', suscription: '12 meses', free: [{value: 'Uniforme'},{value: '1 MES GRATIS'}], price:'219', decimalPrice: '90' },
    {name: 'PROMO LAPADULA', suscription: '5 meses', free: [{value: 'Uniforme'}], price:'249', decimalPrice: '90' },
    {name: 'PROMO CUEVITA', suscription: '3 meses', free: [{value: 'Uniforme'}], price:'269', decimalPrice: '90' },
  ];

  const [selectedPlan, setSelectedPlan] = useState('PROMO PENSA')

  const handleItemSelection = (item: string) => {
    setSelectedPlan(item)
  }

  const handleSetCard = () => {
    //call pasarela de pagos service
  }

  return (
    <ContainerStyled>
        <CustomHeader/>

        <CardContainerStyled>
          { !isSecondSectionVisible ? 
          <CardtStyled>
            <TitleStyled>Registrar datos</TitleStyled>
            <InputStyled type='text' className={isSelectedForm && !isValidName() ? 'error' : '' } placeholder='Ingresar nombre' onChange={(e) => setName(e.target.value)}/>
            <InputStyled type='text' className={isSelectedForm && !isValidLastName() ? 'error' : '' } placeholder='Ingresar apellidos' onChange={(e) => setLastname(e.target.value)}/>
            <InputStyled type='number' pattern="\d*" maxLength={8} className={isSelectedForm && !isValidDni() ? 'error' : '' } placeholder='Ingresar dni' onChange={(e) => setDni(Number(e.target.value))}/>
            <InputStyled type='password' className={isSelectedForm && !isValidPassword ? 'error' : '' } placeholder='Crear constrasena' onChange={(e) => setPassword(e.target.value)}/>
            <InputStyled type='number' pattern="\d*" maxLength={9} className={isSelectedForm && !isValidPhone() ? 'error' : '' } placeholder='Ingresar celular' onChange={(e) => setPhone(Number(e.target.value))}/>
            <InputStyled type='text' className={isSelectedForm && !isValidEmail() ? 'error' : '' } placeholder='Ingresar email' onChange={(e) => setEmail(e.target.value)}/>
            { isError && <ErrorStyled>Actualizar datos</ErrorStyled> }
            <ButtonStyled onClick={() => handleNextStepRegister()}>CONTINUAR</ButtonStyled>
          </CardtStyled>
          : (
          <CardPlantStyled>
            <TitleStyled>Elige tu promo</TitleStyled>
            <PlanCardInfotStyled>!Aprovecha nuestras ofertas! que incluyen <span>acceso a la APP, plan nutricional, test de evaluacion semanal y mensual</span></PlanCardInfotStyled>
            <PlanCardInfotStyled>Recuerda que <span className="type1">SOLO PAGARAS EL MONTO DE LA PROMO INDICADO</span> al inicio de cada mes, <span className="type2">NO PAGARAS TODO DE UNA!!</span> </PlanCardInfotStyled>
            { planList.map((item: any) => (
              <PlanCardStyled className={item.name === selectedPlan ? 'selected' : ''} onClick={()=>handleItemSelection(item.name)}>
                <PlanCardItemStyled >{item.name}</PlanCardItemStyled>
                <PlanCardListStyled>
                  <div className="item">Suscripcion</div>
                  <div>{item.suscription}</div>
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
            <ButtonStyled onClick={() => handleSetCard()}>CONTINUAR</ButtonStyled>
        </CardPlantStyled>)
        }
            
        </CardContainerStyled>

        <ContentWhatsappStyled>
            <a href="https://api.whatsapp.com/send?phone=51983475754&lang=es&text=informacion"> <WhatsappContentStyled/></a>
        </ContentWhatsappStyled>

        <CustomFooter/>
    </ContainerStyled>
  );
}

export default Login;