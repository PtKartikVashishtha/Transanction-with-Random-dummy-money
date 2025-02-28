import { useLocation } from "react-router-dom";
import { Waring } from "../Components/Warning";
import { SignUp } from "./SignUp";
import { Dashboard } from "./DashBoard";

export const Message = () => {
    const location = useLocation();
    const value = location.state?.value
    let label = "Go To" ;
    let buttonText = "DashBoard" ;
    let to = "/dashboard"
    console.log(value)
        if(value == "User Already Exists"){
            label = "" ;
            buttonText = "SingUp"
            to = "/signup" ;
        }
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="rounded-md shadow-md flex justify-center h-65 w-80 bg-white border border-gray-300">
                <div className="font-bold text-xl mt-22">
                    <div>{value}</div>
                    <div className="mt-5">
                        <Waring label = {label} buttontText={buttonText} to={to}></Waring>
                    </div>
                </div>
            </div>
        </div>
    )
}