import { useState } from "react";
import MobileNav from "./NavMobile";
const Header = () => {

    const [navMobile, setNavMobile] = useState(false)

   
    return ( 
            <nav className="navbar px-16 pb-5 pt-10 flex justify-between text-sm">
                <div className="flex flex-row justify-center items-center" >
                    <img src="/assets/Logo.png" alt="" />
                    <h1 className="pl-3 font-bold">CRAPPO</h1>
                </div>
                <div className="hidden lg:flex">
                    <div className="flex items-center pr-10">
                        <ul className="flex text-lg">
                            <li className="px-4">Product</li>
                            <li className="px-4">Features</li>
                            <li className="px-4">About</li>
                            <li className="px-4">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <button>Login | </button>
                        <button className="rounded-full text-white px-5 py-2 bg-button ml-2">Register</button>
                    </div>
                </div>

                <div className="lg:hidden hover:scale-125 cursor-pointer" onClick={() => setNavMobile(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>

                <div className={`lg:hidden right-0 fixed top-0 bottom-0 z-30 w-full transition-all focus:ease-in duration-500 ${navMobile ? '' : 'hidden'}`}>
                    {navMobile && <MobileNav setNavMobile={setNavMobile} />}
                </div>

                
            </nav>
            
        
     );
}
 
export default Header;