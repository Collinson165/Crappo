
import Card from "./Card";

const Section = () => {
    return ( 
        
        <section className="bg-gray-100 pt-64 pb-10 px-6 md:px-16">
            <h2 className="text-main font-bold text-xl md:text-5xl py-5 text-center font-rubik"  data-aos="zoom-in" data-aos-offset="260" data-aos-duration="1000" data-aos-delay="400">Trade securely and manage the high growth cryptocurrencies.</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center py-5">
            <Card title={"Bitcoin"} 
            subtitle={"BTC"} 
            text={"Digital Currency in which a record of transaction in maintained."}
            src={"/assets/biticon.png"}
            />

            <Card title={"Ethereum"} 
            subtitle={" ETH "} 
            text={"Digital Currency in which a record of transaction in maintained."}
            src={"/assets/ethicon.png"}
            />

            <Card title={"Litecoin"} 
            subtitle={" LTC "} 
            text={"Digital Currency in which a record of transaction in maintained."}
            src={"/assets/liticon.png"}
            />
            </div>
        </section>
     );
}
 
export default Section;