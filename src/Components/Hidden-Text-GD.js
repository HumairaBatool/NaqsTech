import React, { useState } from "react";

const HideShowText = () => {
  const [columnVisibility, setColumnVisibility] = useState([true, false, false, false]);
  const [openColumnIndex, setOpenColumnIndex] = useState(0);

  const handleTextToggle = (index) => {
    // If the clicked column is the same as the currently open column
    if (openColumnIndex === index) {
      return;
    }


   // Close the previously opened column (if any)
   if (openColumnIndex !== null) {
    setColumnVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[openColumnIndex] = false;
      return updatedVisibility;
    });
  }

  // Open the clicked column and update the openColumnIndex
  setColumnVisibility((prevVisibility) => {
    const updatedVisibility = [...prevVisibility];
    updatedVisibility[index] = true;
    return updatedVisibility;
  });
  setOpenColumnIndex(index);
};

  return (
    <div className="grid md:grid-cols-4 xs:grid-cols-1 md:gap-5 xs:gap-0 text-left ">



      <div>
        <button
          onClick={() => handleTextToggle(0)}
          className={`cursor-pointer ${openColumnIndex === 0 ? 'font-normal text-black' : 'text-[#B0AFAF]'}`}
        >
          <div className="text-[#B0AFAF] text-[20px]">Research</div>
        </button>
        {columnVisibility[0] && (
          <div className="xs:py-[20px]">
            <p className="xs:text-[14px] md:text-[20px]">
              We gather information about the project, including the client’s
              goals, and design requirements. We research to understand the
              industry, competitors, and trends, gaining insights that inform
              their design decisions.
            </p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => handleTextToggle(1)}
          className={`cursor-pointer ${openColumnIndex === 0 ? 'font-normal text-black' : 'text-[#B0AFAF]'}`}
        >
          <div className="text-[#B0AFAF] text-[20px]">Concept Development</div>
        </button>
        {columnVisibility[1] && (
          <div className="xs:py-[20px]">
            <p className="xs:text-[14px] md:text-[20px]">
              After gathering information, we explore various directions to
              create initial design concepts that align with the project’s goals
              and reflect the brand’s identity.
            </p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => handleTextToggle(2)}
          className={`cursor-pointer ${openColumnIndex === 0 ? 'font-normal text-black' : 'text-[#B0AFAF]'}`}
        >
          <div className="text-[#B0AFAF] text-[20px]">Design Creation</div>
        </button>
        {columnVisibility[2] && (
          <div className="xs:py-[20px]">
            <p className="xs:text-[14px] md:text-[20px] ">
              After research and concept development, we create the required
              design and send it to our client for feedback or approval.
            </p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => handleTextToggle(3)}
          className={`cursor-pointer ${openColumnIndex === 0 ? 'font-normal text-black' : 'text-[#B0AFAF]'}`}
        >
          <div className="text-[#B0AFAF] text-[20px]">Finalization and Delivery</div>
        </button>
        {columnVisibility[3] && (
          <div className={`${columnVisibility[3] ? 'md:col-span-4' : 'col-span-1'}`}>
          <p className="xs:text-[14px]  md:text-[20px] xs:py-[20px] ">
              Once the design is refined and approved, we prepare the design
              files in the required formats and deliver them to the client.
            </p>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default HideShowText;
