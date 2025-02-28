import { useNavigate } from "react-router-dom"

export const Usersrender = ({username , firstName , lastName , id}) => {
    const navigate = useNavigate() ;
    return <div className="pl-6 pb-6 flex justify-between pr-5">
        <div className="flex justify-start">
            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-200 text-2xl">{firstName[0]+lastName[0]}</div>
            <div className="pl-4 pt-1 font-bold text-xl ">{username}</div>
            <div className="pl-4 pt-1 font-bold text-xl ">({firstName + " " + lastName})</div>
        </div>
        <button onClick={() => {
            navigate("/send?id="+id +"&name="+firstName) ;
        }} className="rounded-md cursor-pointer text-sm pl-5 pr-5 font-serif text-white bg-black justify-center">
        Send Money</button>
    </div>
}