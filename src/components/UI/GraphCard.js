import { useEffect } from "react";

const GraphCard = (props) =>{
    useEffect(() =>{
        var ctx1 = document.getElementById(props.id).getContext("2d");
        var chart1 = new window.Chart(ctx1, {
            // The type of chart we want to create
            type: props.type, // also try bar or other graph types
    
            // The data for our dataset
            data: props.data,
    
            // Configuration options
            options: props.options,
          });
    })

    return (
        <div className="card-style mb-30">
            <div className="title d-flex flex-wrap justify-content-between">
                <div className="left">
                <h6 className="text-medium mb-10">{props.heading}</h6>
                <h3 className="text-bold">{props.subHeading}</h3>
                </div>
                <div className="right">
                <div className="select-style-1">
                    <div className="select-position select-sm">
                    <select className="light-bg">
                        {props.dropdown.map( (item, index) => {
                            return <option key={`graphOptionKey${index}`} value="">{item}</option>
                        })}
                    </select>
                    </div>
                </div>
                {/* <!-- end select --> */}
                </div>
            </div>
            {/* <!-- End Title --> */}
            <div className="chart">
                {props.legend && <div id={props.legendId}>
                <ul className="legend3 d-flex flex-wrap align-items-center mb-30">
                        {props.legend.map( (item, index) => <li key={`graphKey${index}`}>
                            <div className="d-flex">
                                <span className={`bg-color ${item.dotColor}`}> </span>
                                <div className="text">
                                    <p className={`text-sm ${item.textColor}`}>
                                    <span className="text-dark">{item.text}</span> {item.textNum}
                                    <i className={`lni ${item.arrow}`}></i>
                                    </p>
                                    {item.textCount && <h2>{item.textCount}</h2>}
                                </div>
                            </div>
                        </li> )}
                </ul>
                </div>}
                <canvas
                id={props.id}
                style={props.style}
                ></canvas>
            </div>
            {/* <!-- End Chart --> */}
        </div>
    )
}

export default GraphCard;