const Card = (props) =>{
    return (
        <div className="icon-card mb-30">
            <div className={`icon ${props.iconColor}`}>
                <i className={`lni ${props.icon}`}></i>
            </div>
            <div className="content">
                <h6 className="mb-10">{props.text}</h6>
                <h3 className="text-bold mb-10">{props.numbers}</h3>
                <p className={`text-sm ${props.textClass}`}>
                <i className={`lni ${props.arrow}`}></i> {props.changePercentage}
                <span className={"text-gray"}>({props.changeText})</span>
                </p>
            </div>
        </div>
    )
}

export default Card;