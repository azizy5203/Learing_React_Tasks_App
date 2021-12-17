const Button = ({text,color,onClicked}) => {
    return (
        <button onClick={onClicked} className='btn btn-add' style={{background:color}}>
            {text}
        </button>
    )
}

export default Button
