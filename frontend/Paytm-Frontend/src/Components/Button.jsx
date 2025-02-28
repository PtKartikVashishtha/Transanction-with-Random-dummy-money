import { useNavigate } from "react-router-dom";

export const Button = ({label , onClick}) => {
    
        // message = response.data.message ;
    return (
        <div className="pt-3 pb-[2px]">
            <button onClick={onClick} className="w-full cursor-pointer text-white bg-black rounded-sm p-[5px] text-md font-serif font-mono shadow-md  pt-2">{label}</button>
        </div>
    )
}