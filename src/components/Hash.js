// import { useState } from "react";
// import { useEffect } from "react";

const Hash = () => {
    // const [data, setData] = useState(null);
    

    // useEffect(() => {
    //     fetch("https://api.minerstat.com/v2/coins?list=BTC,BCH,BSV,ETH")
    //         .then(res => {
    //             if(res.ok){
    //                 return res.json()
    //             }
    //             throw res
    //         })
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    return ( 
        <section className="bg-white text-main text-sm md:text-md rounded-lg max-w-2xl p-5 md:p-10 transition hover:scale-110">
            <div >
                <form action="" className="flex flex-col md:block">
                    <input className="p-2 appearance-none bg-transparent border-b " type="text" placeholder="Enter your hashrate" />
                    <select className="p-2 m-2" name="" id="">
                        <option value="TH/s">KH/s</option>
                        <option value="MH/s">MH/s</option>
                        <option value="GH/s">GH/s</option>
                        <option value="PH/s">PH/s</option>
                        <option value="EH/s">EH/s</option>
                    </select>
                    <button className="bg-button lg:ml-16 text-white px-4 py-2 rounded-full">Calculate</button>
                </form>
            </div>
            <div className="pt-10">
                <h3 className="text-button text-sm font-bold">ESTIMATED 24 HOUR REVENUE: </h3>
                <p className="text-main font-bold">0.0055 130 59 ETH<span className="text-button">($1275)</span></p>
                <p className="text-gray-500 text-sm">Revenue will change based on mining difficulty and Ethereum price</p>
            </div>
        </section>
     );
}
 
export default Hash;