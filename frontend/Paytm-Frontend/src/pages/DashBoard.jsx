import { useEffect, useState } from "react"
import { Appbar } from "../Components/Appbar"
import { Balance } from "../Components/Balance"
import { SearchBar } from "../Components/SearchBar"
import { Usersrender } from "../Components/Usersrender"
import axios from "axios" ;
import { NoUsers } from "../Components/NOUSers"
import { Logout } from "../Components/Logout"

export const Dashboard = () => {
    const [user , setUser] = useState("")
    const [users , setUsers] = useState([]) ;
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const token  = localStorage.getItem("token") ;
        const fun = async () => {
            const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+user , {
                headers : {
                    authorization : `Bearer ${token}`
                }
            });
            setUsers(response.data.users) ;
        }
        fun() ;
    } , [user]) ;
    useEffect(() => {
        const token  = localStorage.getItem("token") ;
        axios.get("http://localhost:3000/api/v1/user/name" , {
            headers : {
                authorization : `Bearer ${token}`
            }
            }).
                then((e) => {
                    setName(e.data.name) ;
            });
    } , [name]) ;
    useEffect(() => {
        const token  = localStorage.getItem("token") ;
        axios.get("http://localhost:3000/api/v1/accounts/balance" , {
            headers : {
                authorization : `Bearer ${token}`
            }
            }).
                then((e) => {
                setBalance(e.data.balance) ;
            });
    } , [balance])
    return (
        <div>
            <Appbar Name={name}/>
            <div className="flex justify-between">
                <Balance balance={balance}/>
                <Logout/>
            </div>
            <div className="text-2xl font-bold pt-2 pl-6">Users</div>
            <SearchBar onChange = {async (e) => {
                const inputValue = e.target.value ;
                setUser(inputValue) ; 
            }} />
            {
                users.length > 0 ? (
                    users.map((U) => {
                        return <Usersrender id = {U._id} username={U.userName} firstName={U.firstName} lastName={U.lastName} />
                })) : (<NoUsers/>)
            }
        </div>
    )
}