import Button from "./Button";

const chevron = (
    <div className="pt-0.5 pl-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
        </svg>
    </div>
)

export default function Card(props){
    return (
        <div className="hover:bg-card bg-white my-2 mx-4 rounded-xl w-64 text-black hover:text-white text-center p-4 transition ease-in-out hover:scale-110">
            <div className="flex justify-center py-4">
                <img className="scale-75" src={props.src} alt="bitcoin" />
            </div>
            <h2 className="font-bold py-2 text-lg">{props.title}<span className="text-gray-500 text-xs"> {props.subtitle}</span></h2>
            <p className="leading-4 text-sm">{props.text}</p>
            <div className="flex justify-center px-auto py-5">
                <Button text={"start mining"} color={"bg-button"} chevron={chevron} />
            </div>
            
            
        </div>
    )
}