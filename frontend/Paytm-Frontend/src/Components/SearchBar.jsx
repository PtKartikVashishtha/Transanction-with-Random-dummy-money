export const SearchBar = ({onChange}) => {
    return <div className="pl-6 pt-5 pr-5 pb-8">
        <input onChange={onChange} className="w-full shadow-sm pt-1 pb-1 pl-2 rounded-md border border-gray-300" placeholder="Search Users..."></input>
    </div>
}