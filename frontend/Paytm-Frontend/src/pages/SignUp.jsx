import { useNavigate } from "react-router-dom"
import { Button } from "../Components/Button"
import { Heading } from "../Components/Heading"
import { InputBox } from "../Components/InputBox"
import { SubHeading } from "../Components/SubHeading"
import { Waring } from "../Components/Warning"
import { useState } from "react"
import axios from "axios"

export const SignUp = () => {
    const navigate = useNavigate() ;
    const [userName , setUserName] =useState("") ;
    const [firstName , setFirstName] =useState("") ;
    const [lastName , setLastName] =useState("") ;
    const [password , setPassword] =useState("") ;

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="rounded-md shadow-md flex justify-center h-140 w-100 bg-white border border-gray-300">
                <div>
                    <Heading label={"Sign up"}></Heading>
                    <SubHeading subHeading={"Enter Your Information to Create an Account"}></SubHeading>
                    <InputBox onChange = {e => {
                        setFirstName(e.target.value);
                    }} label={"First Name"} placeholder={"Enter Your First Name"}></InputBox>
                    <InputBox onChange = {e => {
                        setLastName(e.target.value);
                    }} label={"Last Name"} placeholder={"Enter Your Last Name"}></InputBox>
                    <InputBox onChange = {e => {
                        setUserName(e.target.value);
                    }} label={"User Name"} placeholder={"Enter Your User Name"}></InputBox>
                    <InputBox onChange = {e => {
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"Enter Your Password"}></InputBox>
                    <Button onClick={async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                            userName , 
                            firstName , 
                            lastName , 
                            password
                        });
                        if(response.data.message != "Signed Up SucessFully"){
                            alert("Error 411: " + response.data.message) ;
                            return ;
                        }
                        setTimeout(() => {
                            navigate("/dashboard" , {state : {value : response.data.message}}) ;
                        }, 100);
                        localStorage.setItem("token" , response.data.jwt)
                    }} label = "Sign up"></Button>
                    <Waring label = {"Already Have An Account ?"} buttontText={"SignIn"} to = {"/signin"}></Waring>
                </div>
            </div>
        </div>
    )
}