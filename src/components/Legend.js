import Button from "./Button";

const Legend = () => {
    return ( 
        <section className="legend">
            <h2 className="font-bold font-rubik text-3xl py-20 md:px-32 text-center"  data-aos="zoom-in" data-aos-offset="280" data-aos-duration="2500" data-aos-delay="400">Market sentiments, portfolio and run <br /> the infrastructure of your choice</h2>
            <div className="grid grid-cols-2 py-10">
                <div className="col-span-2 md:col-span-1  flex justify-center  flex-col px-5 md:pl-20 md:pr-36"  data-aos="zoom-in" data-aos-offset="300" data-aos-duration="2500" data-aos-delay="400">
                    <h2 className="font-bold font-rubik text-3xl">Invest Smart</h2>
                    <p className="text-sm py-6">Get full statistic information about the behaviour of buyers and sellers which will help you to make descisions</p>
                    <div>
                        <Button  text={"Learn More"} />
                    </div>
                    
                </div>
                <div className="col-span-2 md:col-span-1 px-5">
                    <img src="/assets/Chart.png" alt="" className="scale-90"  data-aos="zoom-in" data-aos-offset="330"  data-aos-duration="2500" />
                </div>
                <div className="col-span-2 md:col-span-1 py-14 flex">
                    <img src="/assets/Statistic.png" alt=""  className="scale-y-90"  data-aos="zoom-in" data-aos-offset="320"  data-aos-duration="2500" />
                </div>
                <div className="col-span-2 md:col-span-1  flex justify-start md:justify-center  flex-col px-6 md:pl-20 md:pr-36"  data-aos="fade-up" data-aos-offset="305" data-aos-duration="2500" data-aos-delay="400">
                    <h2 className="font-bold font-rubik text-3xl">Detailed Statistics</h2>
                    <p className="text-sm py-6">View all mining related information in real at any point and at any location and decide which poll you want to mine.</p>
                    <div>
                        <Button text={"Learn More"} />
                    </div>
                    
                </div>
                <div className="col-span-2 md:col-span-1  flex justify-end items-end md:items-start md:justify-center text-end md:text-start  flex-col px-6 md:pl-20 md:pr-36"  data-aos="fade-up" data-aos-offset="316" data-aos-duration="2500" data-aos-delay="400">
                    <h2 className="font-bold font-rubik text-3xl">Grow your profit and track your investments</h2>
                    <p className="text-sm py-6">Use advanced analytical tools. Clear tradingview charts let you track current and historical profit investments.</p>
                    <div>
                        <Button text={"Learn More"} />
                    </div>
                    
                </div>
                <div className="col-span-2 md:col-span-1 pr-16">
                    <img src="/assets/Table.png" alt=""  className=""  data-aos="zoom-in"  data-aos-offset="325"  data-aos-duration="2500" />
                </div>
            </div>
            <div className="flex justify-center py-20 bg-gradient-to-t from-main to-card">
                <div className="rounded-xl bg-button container max-w-6xl p-10 md:flex justify-between relative" data-aos="zoom-in" data-aos-offset="330" data-aos-duration="2500">
                    <div className="">
                        <svg className="absolute top-0 left-0" width="160" height="160" viewBox="0 0 160 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M79.4099 155.686L0 108.823L79.3614 220.698L158.812 108.823L79.3614 155.686H79.4099ZM80.5901 -38L1.21261 93.7462L80.5901 140.69L160 93.7946L80.5901 -38Z" fill="url(#paint0_linear_1_453)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1_453" x1="80" y1="-38" x2="80" y2="186.414" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.16"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <h2 className="font-bold text-2xl font-rubik">Start mining now</h2>
                        <p className="text-sm">Join now with CRAPPO to get the latest news <br /> and start mining now</p>
                        
        
                    </div>
                    <form action="" className="flex items-center">
                        
                        <input type="email" placeholder="Enter your email" className="bg-button border-b md:ml-20 mr-10 border-white" />
                        <button className="bg-white text-main rounded-full mx-5 px-5 py-2">Subcribe</button>
                        <svg className="absolute bottom-0 right-0" width="135" height="135" viewBox="0 0 140 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M139.645 74.3938C142.502 54.9668 127.761 44.4534 107.42 37.4826L114.048 11.0848L98.0489 7.08512L91.6495 32.7972C87.4213 31.7688 83.0788 30.7403 78.7363 29.8261L85.1357 3.99966L69.1371 0L62.6233 26.2835C59.0808 25.4836 55.6525 24.6836 52.3385 23.8837V23.7694L30.1689 18.2842L25.9407 35.4256C25.9407 35.4256 37.8254 38.1682 37.5968 38.2825C44.1106 39.8824 45.2534 44.2249 45.0248 47.6531L37.4826 77.7078C37.9397 77.822 38.5111 77.9363 39.1967 78.2791C38.6253 78.1649 38.054 78.0506 37.4826 77.822L26.9692 119.876C26.1692 121.818 24.1123 124.79 19.6555 123.647C19.7698 123.875 7.99933 120.79 7.99933 120.79L0 139.188L20.9125 144.445C24.7979 145.474 28.569 146.388 32.3401 147.416L25.7121 174.043L41.7108 178.042L48.3388 151.644C52.6813 152.787 57.0238 153.93 61.1377 154.958L54.624 181.242L70.6227 185.242L77.2507 158.615C104.677 163.758 125.247 161.701 133.817 136.903C140.788 117.019 133.475 105.477 119.076 97.9346C129.703 95.5348 137.589 88.564 139.645 74.3938ZM102.963 125.818C98.0489 145.702 64.4517 134.96 53.5955 132.217L62.3948 96.9062C73.251 99.6488 108.22 105.02 102.963 125.818ZM107.991 74.0509C103.42 92.2208 75.5365 82.9645 66.5087 80.6789L74.5081 48.6816C83.5359 50.9672 112.676 55.1954 107.991 74.0509Z" fill="url(#paint0_linear_1_452)"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_452" x1="70" y1="0" x2="70" y2="185.242" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" stopOpacity="0.16"/>
                            <stop offset="1" stopColor="white" stopOpacity="0"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </form>
                </div>
            </div>
            
        </section>
     );
}
 
export default Legend;