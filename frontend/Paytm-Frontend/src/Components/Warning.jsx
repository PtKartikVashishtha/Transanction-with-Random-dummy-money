import { Link } from "react-router-dom"

export const Waring = ({label , buttontText , to}) => {
    return (
        <div className="p-[5px] flex justify-center text-sm text-slate-700">
            <div>{label}</div>
            <Link className="cursor-pointer pl-[5px] underline" to = {to}>
                {buttontText}
            </Link>
        </div>
    )
}