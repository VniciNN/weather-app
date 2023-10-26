import { FaSearch } from "react-icons/fa";

export default function Search() {
    return (
        <>
        <div className="flex items-center rounded-lg h-10 w-96 roudend-lg bg-emerald-500 justify-center mr-3">
            <input type="text" className="w-72 border-none bg-transparent outline-none m-4 font-mono"/>
            <div className="h-10 w-10 rounded-lg flex items-center justify-center cursor-pointer"><FaSearch></FaSearch></div>
        </div>
        </>
    )
}