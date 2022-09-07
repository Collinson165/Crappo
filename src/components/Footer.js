const Footer = () => {
    return ( 
        <footer className="pt-2 lg:pt-16 px-5 lg:px-16 pb-8">
            <div className="grid grid-cols-4">
                <div className="col-span-4 md:col-span-2 lg:col-span-1 flex py-4 md:py-0 justify-center md:justify-start md:items-start">
                    <img src="/assets/Logo.png" alt="" />
                    <p className="font-bold px-4 pt-2">CRAPPO</p>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1 py-4 flex justify-center items-center flex-col md:block text-center md:text-start">
                    <h3 className="font-bold text-xl">Quick Link</h3>
                    <ul className="text-sm leading-10">
                        <a href="/"><li>Home</li></a> 
                        <a href="/"><li>Products</li></a> 
                        <a href="/"><li>About</li></a> 
                        <a href="/"><li>Features</li></a> 
                        <a href="/"><li>Contact</li></a> 
                    </ul>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1 py-4 flex justify-center items-center flex-col md:block text-center md:text-start">
                    <h3 className="font-bold text-xl">Resources</h3>
                    <ul className="text-sm  leading-10">
                        <a href="/"><li>Download Whitepaper</li></a> 
                        <a href="/"><li>Smart Token</li></a> 
                        <a href="/"><li>Blockchain Explorer</li></a> 
                        <a href="/"><li>Crypto API</li></a> 
                        <a href="/"><li>Interests</li></a> 
                    </ul>
                </div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1 text-center md:text-start">
                    <h3 className="font-bold text-2xl">We accept following payment systems</h3>
                    <div className="flex justify-center py-10">
                        <img className="scale-75" src="/assets/Visa.png" alt="" />
                        <img className="scale-75" src="/assets/Mastercard.png" alt="" />
                        <img className="scale-75" src="/assets/Bitcoin.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row md:justify-between lg:pt-20">
                <div className="text-xs text-center py-4 md:py-0"><p>&copy;2021CRAPPO.All Rights Reserved</p></div>
                <div>
                    <ul className="flex justify-center md:justify-between">
                        <li className="px-3 hover:scale-110">
                            <a href="/"><img src="/assets/facebook.png" alt="" /></a>
                        </li>
                        <li className="px-3 hover:scale-110">
                            <a href="/"><img src="/assets/instagram.png" alt="" /></a>
                        </li>
                        <li className="px-3 hover:scale-110">
                            <a href="/"><img src="/assets/youtube.png" alt="" /></a>
                        </li>
                        <li className="px-3 hover:scale-110">
                            <a href="/"><img src="/assets/twitter.png" alt="" /></a>
                        </li>
                        <li className="px-3 hover:scale-110">
                            <a href="/"><img src="/assets/linkedin.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;