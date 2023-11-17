import "../Button/Button.css"
const Button = (props)=>{
    return (
        <>
        <button className="btn" onClick={props.cvPath} >
              <span className="black">{props.text}</span>
            </button>
        </>
    )
}
export default Button