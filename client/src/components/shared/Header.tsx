import { Link } from "react-router"
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
    return <header className="px-5">

        <div className="container mx-auto flex w-full justify-between py-5" >
            <Link to="/" className="font-bold text-3xl uppercase text-blue-600">Shop.</Link>

            <nav className="flex items-center gap-24">
                <ul className="flex items-center gap-4">
                    <li className="font-medium text-base hover:underline"><Link to="/">Home</Link></li>
                    <li className="font-medium text-base hover:underline"><Link to="/">Products</Link></li>
                    <li className="font-medium text-base hover:underline"><Link to="/">About</Link></li>
                    <li className="font-medium text-base hover:underline"><Link to="/">Contact</Link></li>
                </ul>

                <div className="flex items-center gap-5">
                    <Link className="text-2xl relative" to="/"><IoCartOutline />
                        <span className="text-xs absolute bottom-4 left-3 font-medium bg-red-600 text-white h-5 w-5  flex justify-center items-center rounded-full m-0">{0}</span>
                    </Link>
                    <button ><Link to="/" className="bg-blue-600 flex items-center gap-2 px-3 py-1 text-white font-medium rounded-md "><FaRegUser />Login</Link></button>
                </div>
            </nav>


        </div >

    </header >
}

export default Header