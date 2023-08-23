import React, {Component} from "react";

class InnerCard extends Component {
    render() {
      return (
        <div className="xs:mx-[10px] xs:mb-[10px] rounded-md bg-white shadow-lg  text-center flex content-center items-center justify-center shadow-orange-300 ">
          <div className="xs:px-[15px] xs:py-[22px] md:py-[50px]">
            <span className="flex items-center justify-center content-center xs:mb-[15px] ">
              <img src={this.props.image} alt="icon" />
            </span>
            <h3 className="xs:mt-[8px] xs:text-[14px] md:text-[18px] text-[#363636] ">{this.props.heading}</h3>
          </div>
        </div>
      );
    }
  }
export default InnerCard;