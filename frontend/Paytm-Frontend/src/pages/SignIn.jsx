import { useNavigate , } from "react-router-dom"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InputBox"
import { SubHeading } from "../Components/SubHeading"
import { Waring } from "../Components/Warning"
import { useState } from "react" 
import axios from "axios"

export const SignIn = () => {
    const navigate = useNavigate() ;
    const [userName , setUserName] = useState ("") ;
    const [password , setPassword] = useState("") ;
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="rounded-md shadow-md flex justify-center h-100 w-100 bg-white border border-gray-300 ">
                <div>
                    <Heading label={"Sign in"}></Heading>
                    <SubHeading subHeading={"Enter Your Credentials To Access Your Account"}></SubHeading>
                    <InputBox onChange={(e) => {
                        const inputValue = e.target.value ;
                        setUserName(inputValue) ;
                    }} label={"User Name"} placeholder={"Enter Your User Name"}></InputBox>
                    <InputBox onChange={(e) => {
                        const inputValue = e.target.value ;
                        setPassword(inputValue) ;
                    }} label={"Password"} placeholder={"Enter Your Password"}></InputBox>
                    <Button label = "Sign in" onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin" , {
                            userName ,
                            password
                        }) ;
                        if(response.data.message != "Signed in successfully"){
                            alert("Error 411: " + response.data.message) ;
                            return ;
                        }
                        const token = response.data.jwt ;
                        localStorage.setItem("token" , token) ;
                        setTimeout(() => {
                            navigate("/dashboard" , {state : {value : response.data.message}}) ;
                        }, 100);
                    }}></Button>
                    <Waring label = {"Don't Have An Account ?"} buttontText={"SignUp"} to = {"/signup"}></Waring>
                </div>
            </div>
        </div>
    )
}  