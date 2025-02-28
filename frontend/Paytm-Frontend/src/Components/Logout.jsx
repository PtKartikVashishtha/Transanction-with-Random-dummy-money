import { useNavigate } from "react-router-dom";

export const Logout = () => {
    const navigate = useNavigate() ;
    return (
        <div className="pr-6 pt-6">
            <button onClick={() => {
                localStorage.removeItem("token");
                setTimeout(() => {
                    navigate("/signin") ;
                } , 100) ;
            }}
            className="font-serif cursor-pointer text-white bg-gray-500 rounded-md text-sm flex justify-center items-center p-2">Log Out</button>
        </div>
    )
}