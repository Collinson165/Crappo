const MobileNav = ( {setNavMobile }) => {
    return (
       
            <nav className='lg:hidden flex backdrop-blur-sm bg-main/50 h-full top-0 w-full justify-center items-center text-white'>
                
                <div onClick={()=> setNavMobile(false)} className='text-3xl absolute right-6 top-6 cursor-pointer ' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
        
                <ul className='flex flex-col justify-center space-y-8 h-full items-center capitalize'>
            
                            <li className='text-white text-2xl'> 
                                <a href="/">Products</a>
                            </li>

                            <li className='text-white text-2xl'> 
                                <a href="/">Features</a>
                            </li>

                            <li className='text-white text-2xl'> 
                                <a href="/">About</a>
                            </li>

                            <li className='text-white text-2xl'> 
                                <a href="/">Contact</a>
                            </li>
        
                <div className='flex items-center justify-center'>
        
                <a href="/" className='text-white text-2xl capitalize cursor-pointer'>login</a>
        
                <span className='mx-6 text-white/20'> | </span>
        
                <button className='text-white text-2xl bg-blue-500 rounded-3xl px-4 py-1 capitalize'>register</button>
        
                </div>
        
        
                </ul>
        
        
        
            </nav>
     

    )
  }
  
  export default MobileNav
