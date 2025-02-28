import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios" 

export const SendMoney = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate() ;
    const [amount , setAmount] = useState(0) ;
    const [Params] = useSearchParams() ;
    const id = Params.get("id") ;
    const name = Params.get("name") ;
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="rounded-md shadow-md h-90 w-100 bg-white border border-gray-300">
                <div className="flex justify-center font-bold text-4xl pt-6">Send Money</div>
                <div className="pt-20 pl-6 flex items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-400 text-2xl text-white">{name[0]}</div>
                    <div className="pl-6 font-bold text-2xl">{name}</div>
                </div>
                <div className="pt-1 text-md font-bold pl-6">Amount (in Rs)</div>
                <div className="pl-6 pt-2 pr-6">
                    <input onChange={(e) => {
                        const value = e.target.value ;
                        setAmount(value) ;
                    }} type="Number" className="p-2 w-full rounded-md border border-gray-300" placeholder="Enter Amount"></input>
                </div>
                <div className="pt-4 pl-6 pr-6">
                    <button onClick = {async () => {
                        const response = await axios.post("http://localhost:3000/api/v1/accounts/transfer",{
                            to : id ,
                            amount : amount
                        } , {
                            headers : {
                                authorization : `Bearer ${token}`
                            }
                        });
                        if(response.data.message != "transfer successful"){
                            alert(response.data.message) ;
                            return ;
                        }
                        if(response.data.message == "transfer successful"){
                            setTimeout(() => {
                                navigate("/paid") ;
                            }, 20);
                        }
                    }} 
                    className="cursor-pointer w-full pt-2 pb-2 rounded-md text-white bg-green-400 font-bold font-serif text-md">Initiate Transfer</button>
                </div>
            </div>
        </div>
    )
}