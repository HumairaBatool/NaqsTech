import React, {Component} from "react";

class InnerCard extends Component {

    render(){
        return(
            <div className="rounded-md bg-white shadow-lg  text-center justify-self-center shadow-orange-300 ">
                <span className="flex items-center justify-center content-center "><img src={this.props.image} alt="icon" /></span>
                <h3>{this.props.heading}</h3>
            </div>
        );
    }
}
export default InnerCard;