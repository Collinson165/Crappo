import Button from "./Button";

const Main = () => {

    const chevron = (
        <div className="pt-0.5 pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
        </div>
    )
  
   
    return ( 
        <main className="px-16">
            <div className="grid grid-cols-2 py-10">
                <div className="col-span-1 pr-16 py- flex justify-center flex-col">
                    <p className="bg-[#252541] p-1 w-96 rounded-full"><span className="rounded-full bg-white h-full text-main font-bold py-1 px-2"  data-aos="zoom-in" data-aos-offset="50" data-aos-duration="2500" data-aos-delay="400">75% SAVE</span> For the Black Friday weekend </p>
                    <p className="text-5xl font-bold py-6 font-rubik"  data-aos="fade-up" data-aos-offset="80" data-aos-duration="2500" data-aos-delay="400">Fastest  & secure platform to invest in crypto</p>
                    <p className="text-sm py-6"  data-aos="fade-up" data-aos-offset="100" data-aos-duration="2500" data-aos-delay="400">Buy and sell cryptocurrencies. Trusted by 10M wallets with over $30 Billion in transactions.</p>
                    <div  data-aos="fade-up" data-aos-offset="100" data-aos-duration="2500" data-aos-delay="400">
                        <Button text={"Try for free"} chevron={chevron} />
                    </div>
                    

                </div>
                <div className="col-span-1">
                    <img className="" src="/assets/Illustration.png" alt=""  data-aos="zoom-in"  data-aos-duration="2500" data-aos-offset="100" data-aos-delay="400" />
                </div>
            </div>

            <div className="grid grid-cols-3 mx-auto py-10">
                <div className="col-span-1 flex justify-center items-center" data-aos="fade-up" data-aos-offset="120" data-aos-duration="2500" data-aos-delay="400">
                    <img src="/assets/Icon.png" alt="" />
                    <div className="pl-4">
                        <p className="font-bold text-3xl font-rubik">$30B</p>
                        <p className="text-sm">Digital Currency Exchanged</p>
                    </div>
                    
                </div>
                <div className="col-span-1 flex justify-center items-center" data-aos="fade-up" data-aos-offset="130" data-aos-duration="2500" data-aos-delay="400">
                    <img src="/assets/Icon-1.png" alt="" />
                    <div className="pl-4">
                        <p className="font-bold text-3xl font-rubik">10M+</p>
                        <p className="text-sm">Trusted Wallet Investors</p>
                    </div>
                    
                </div>
                <div className="col-span-1 flex justify-center items-center" data-aos="fade-up" data-aos-offset="150" data-aos-duration="2500" data-aos-delay="400" data-aos-easing="ease">
                    <img src="/assets/Icon-2.png" alt="" />
                    <div className="pl-4">
                        <p className="font-bold text-3xl font-rubik">195</p>
                        <p className="text-sm">Countries Supported</p>
                    </div>
                    
                </div>
            </div>

            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <img src="/assets/Illustrations.png" alt="" data-aos="zoom-in"  data-aos-duration="2500" data-aos-offset="200" data-aos-delay="400" data-aos-easing="ease" />
                </div>
                <div className="col-span-1 px-16 flex justify-center flex-col"  data-aos="fade-up" data-aos-offset="130" data-aos-duration="2500" data-aos-delay="400">
                    <h2 className="font-bold text-3xl py-5">Why you should choose CRAPPO</h2>
                    <p className="py-5 text-sm">Experience the next generation cryptocurrency platform. No financial borders, extra fees and fake reviews.</p>
                    <div className="py-5">
                        <Button color={"bg-blue-900"} text={"Learn More"} />
                    </div>
                    

                </div>
            </div>
            <div className="py-24 flex justify-center flex-col text-center"  data-aos="fade-up" data-aos-offset="220" data-aos-duration="2500" data-aos-delay="400">
                <h2 className="font-bold text-3xl">Check how much you can earn</h2>
                <p>Let's check your hash rate to see how much you will earn today</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quo modi? Optio?</p>
            </div>
        </main>
     );
}
 
export default Main;