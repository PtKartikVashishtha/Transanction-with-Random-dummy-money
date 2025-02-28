export const Appbar = ({Name}) => {
    return (
        <div className="w-full h-15 flex items-center justify-between border border-gray-300">
            <div className="font-bold text-3xl pl-6">Payments App</div>
            <div className="flex">
                <div className="text-2xl text-gray-800 pr-4">Hello!! {Name}</div>
                <div className=" pr-5">
                    <div className="flex justify-center rounded-full text-2xl bg-gray-200 text-black h-9 w-9">{Name[0]}</div>
                </div>
            </div>
        </div>
    )
}