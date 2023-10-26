import Search from "./search";
import {FaMoon} from "react-icons/fa"


export default function Header() {
    return (
        <div className='w-screen h-20 bg-emerald-400 flex items-center justify-between'>
            <div className="text-white m-4 font-mono font-bold text-2xl">Weather App</div>
            <Search></Search>
            <div className="mr-6">
            <FaMoon></FaMoon>
            </div>
        </div>
    )
}