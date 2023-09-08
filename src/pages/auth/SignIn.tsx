import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SignInUser } from "../../utils/AuthApi";


const SignIn = ()=>{
        const navigate = useNavigate()
        const schema = yup.object({
            email: yup.string().required(),
            password: yup.string().required()
        })

        const {formState: {errors},
        register,
        handleSubmit,
        reset
    } = useForm({
            resolver: yupResolver(schema)
        })

        const onSubmit = handleSubmit(async(data:any)=>{
            const {email, password} = data
            const formData = new FormData()

            formData.append("email", email)
            formData.append("password", password)

            SignInUser(formData).then(()=>{
                navigate('/')
            })
        })
    return(
        <div>
        <Container>
        <Main onSubmit={onSubmit}>
    
       
        <InputHolder>
        <Input placeholder="Email" type="email" {...register("email")} />
        </InputHolder>
        { errors.email && <Errors>error</Errors>}
        <InputHolder>
        <Input placeholder="Password" type="password" {...register("password")} />
        </InputHolder>
        <Errors>error</Errors>
    
     
        <ButtonHolder>
        <Button
        >SignIn</Button>

       <Link style={{textDecoration:"none" , color:"var(--appText)"}}
       to="/">
       <Button>SignUp</Button>
       </Link>
        </ButtonHolder>
      

        </Main>
        </Container>
        </div>
    )
}

export default SignIn


const Errors = styled.div`
color:var(--appText);
font-size:15px;
position: absolute;
// right:0;
`;

const Button = styled.div`
background-color: lightgrey;
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius:var(--appRadiusSmall)
margin-left: 30px;
margin-top: 30px;
transition: all 350ms;
cursor: pointer;
`;
const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;
const Input = styled.input`
width: 400px;
height:40px;
border:none;
outline: none;

::placeholder{
    padding: 20px;
    font-size: 15px;
    color: var(--appText);
}
`;
const InputHolder = styled.div`
width: 400px;
height:40px;
border: 1px solid var(--appBorder);
margin-top: 20px;
`;


// const Text = styled.div`
// // display: flex;
// // justify-content: center;
// // color:(--appText);
// // width: 100%;
// `;
const Main = styled.div`
width: 500px;
padding: 20px;
border-radius:var(--appRadiusSmall);
border: 1px solid var(--appBorder);
// display: flex;
positon: relative;
// flex-direction
`;
const Container = styled.div`
width: 100%;
height: 100vh;
background-color:var(--appBG);
color:var(--appText);
display: flex;
justify-content: center;
align-items: center;
`;