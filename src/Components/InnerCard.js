import React, {Component} from "react";

class InnerCard extends Component {

    render(){
        return(
            <div className="rounded-md bg-white shadow-lg w-11/12 h-48 text-center justify-self-center shadow-orange-300 mb-10 p-3">
                <span className="flex items-center justify-center mt-12 pb-2"><img src={this.props.image} alt="icon" /></span>
                <h3>{this.props.heading}</h3>
            </div>
        );
    }
}
export default InnerCard;