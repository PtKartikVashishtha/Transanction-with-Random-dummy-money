export const InputBox = ({label , placeholder , onChange}) => {
    return (
    <>
        <div className="w-70 p-[1px] font-medium text-left pl-[5px] pb-2 pt-2">
            {label}
        </div>
        <input onChange={onChange} type="text" placeholder={placeholder} className="w-full rounded-md border border-gray-300 pl-3 p-[5px] focus:ring focus:ring-blue-300">
        </input>
    </>
    )
}