const TableCard = (props) =>{
    return (
        <div className="card-style mb-30">
            <div className="title d-flex flex-wrap align-items-center justify-content-between">
                <div className="left">
                <h6 className="text-medium mb-30">{props.heading}</h6>
                </div>
                <div className="right">
                <div className="select-style-1">
                    <div className="select-position select-sm">
                    <select className="light-bg">
                        {props.dropdown.map( (item,index) => {
                            return <option key={Math.random()} value="">{item}</option>
                        })}
                    </select>
                    </div>
                </div>
                {/* <!-- end select --> */}
                </div>
            </div>
            {/* <!-- End Title --> */}
            <div className="table-responsive">
                <table className="table top-selling-table">
                    <thead>
                        <tr key={Math.random()}>
                            { props.checkbox && <td key={Math.random()}> </td> }
                            {props.thead.map( (item,index) => {
                                return <th key={Math.random()} className={index === 0 ? "min-width":''}>
                                            <h6 className="text-sm text-medium">
                                            {item} <i className="lni lni-arrows-vertical"></i>
                                            </h6>
                                        </th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {props.body.map( (item,index) => {
                            return <tr key={Math.random()}>
                                {props.checkbox && <td key={Math.random()}>
                                                    <div className="check-input-primary">
                                                        <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id=""
                                                        />
                                                    </div>
                                                </td>
                                }
                                {item.map( (column,index) =>{
                                    if(index > 0){
                                        if(index === 1){
                                            return <td key={Math.random()}>
                                                        <div className="product">
                                                            <div className="image">
                                                                <img
                                                                    src={`/images/products/${item[0]}`}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <p className="text-sm">{column}</p>
                                                        </div>
                                                    </td>
                                        }
                                        return  <td key={Math.random()}>
                                                    <p className="text-sm">{column}</p>
                                                </td>
                                        
                                    }
                                })}
                                
                            </tr>
                        })}
                    </tbody>
                </table>
                {/* <!-- End Table --> */}
            </div>
        </div>
    )
}

export default TableCard;