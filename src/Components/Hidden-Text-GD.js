import React, { useState } from "react";

const HideShowText = () => {
  const [columnVisibility, setColumnVisibility] = useState([true, false, false, false]);
  const [openColumnIndex, setOpenColumnIndex] = useState(0);

  const handleTextToggle = (index) => {
    // If the clicked column is the same as the currently open column, do nothing
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
    <div className="grid grid-cols-4 gap-5 mx-20 text-center mb-20 ">
      <div>
        <button
          onClick={() => handleTextToggle(0)}
          className={`text-black cursor-pointer ${openColumnIndex === 0 ? 'font-black' : ''}`}
        >
          <div className="text-gray-500 text-2xl">Research</div>
        </button>
        {columnVisibility[0] && (
          <div className="mt-10">
            <p className="text-2xl">
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
          className={`text-black cursor-pointer ${openColumnIndex === 1 ? 'font-black' : ''}`}
        >
          <div className="text-gray-500 text-2xl">Concept Development</div>
        </button>
        {columnVisibility[1] && (
          <div className="mt-10">
            <p className="text-2xl ">
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
          className={`text-black cursor-pointer ${openColumnIndex === 2 ? 'font-black' : ''}`}
        >
          <div className="text-gray-500 text-2xl">Design Creation</div>
        </button>
        {columnVisibility[2] && (
          <div className="mt-10">
            <p className="text-2xl ">
              After research and concept development, we create the required
              design and send it to our client for feedback or approval.
            </p>
          </div>
        )}
      </div>

      <div>
        <button
          onClick={() => handleTextToggle(3)}
          className={`text-black cursor-pointer ${openColumnIndex === 3 ? 'font-normal' : ''}`}
        >
          <div className="text-gray-500 text-2xl">Finalization and Delivery</div>
        </button>
        {columnVisibility[3] && (
          <div className="mt-10">
            <p className="text-2xl">
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
