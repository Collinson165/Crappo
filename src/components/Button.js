const Button = (props) => {
    return ( 
        <button className={`${props.color ? props.color :'bg-button'} text-white px-5 py-2 rounded-full flex transition ease-in-out hover:scale-110`}>{props.text}{props.chevron ? props.chevron : ''}</button>
     );
}
 
export default Button;