import React from "react";
import PropTypes from "prop-types";

function FaqsItem({ question, icon }) {
  return (
    <div className="xs:my-4">
      <div className=" grid grid-cols-6 bg-gray-100 py-5 px-4 rounded font-bold">
        <div className="col-span-5 ">{question}</div>
        <div>{icon}</div>
      </div>
    </div>
  );
}

FaqsItem.propTypes = {
  question: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

function FaqsGetInTouch() {
  const faqsItems = [
    {
      question: "What are digital marketing services?",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="pl-4"
        >
          <path
            d="M17 30.9211C9.99697 30.8288 4.34231 25.1741 4.25001 18.1711C4.34231 11.168 9.99697 5.51339 17 5.42108C24.003 5.51339 29.6577 11.168 29.75 18.1711C29.6577 25.1741 24.003 30.8288 17 30.9211ZM17 8.25442C11.5532 8.32613 7.15505 12.7242 7.08334 18.1711C7.15505 23.6179 11.5532 28.016 17 28.0878C22.4469 28.016 26.845 23.6179 26.9167 18.1711C26.845 12.7242 22.4469 8.32613 17 8.25442ZM18.4167 25.2544H15.5833V19.5877H9.91668V16.7544H15.5833V11.0878H18.4167V16.7544H24.0833V19.5877H18.4167V25.2544ZM28.747 9.25742L24.4843 5.00742L26.4803 3L30.7445 7.25L28.747 9.256V9.25742ZM5.25443 9.25742L3.24701 7.25L7.48426 3L9.48884 5.006L5.25443 9.256V9.25742Z"
            fill="#363636"
          />
        </svg>
      ),
    },
    {
      question: "What is a digital marketing agency?",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="pl-4"
        >
          <path
            d="M17 30.9211C9.99697 30.8288 4.34231 25.1741 4.25001 18.1711C4.34231 11.168 9.99697 5.51339 17 5.42108C24.003 5.51339 29.6577 11.168 29.75 18.1711C29.6577 25.1741 24.003 30.8288 17 30.9211ZM17 8.25442C11.5532 8.32613 7.15505 12.7242 7.08334 18.1711C7.15505 23.6179 11.5532 28.016 17 28.0878C22.4469 28.016 26.845 23.6179 26.9167 18.1711C26.845 12.7242 22.4469 8.32613 17 8.25442ZM18.4167 25.2544H15.5833V19.5877H9.91668V16.7544H15.5833V11.0878H18.4167V16.7544H24.0833V19.5877H18.4167V25.2544ZM28.747 9.25742L24.4843 5.00742L26.4803 3L30.7445 7.25L28.747 9.256V9.25742ZM5.25443 9.25742L3.24701 7.25L7.48426 3L9.48884 5.006L5.25443 9.256V9.25742Z"
            fill="#363636"
          />
        </svg>
      ),
    },
    {
      question: "How do I start a digital marketing business?",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="pl-4"
        >
          <path
            d="M17 30.9211C9.99697 30.8288 4.34231 25.1741 4.25001 18.1711C4.34231 11.168 9.99697 5.51339 17 5.42108C24.003 5.51339 29.6577 11.168 29.75 18.1711C29.6577 25.1741 24.003 30.8288 17 30.9211ZM17 8.25442C11.5532 8.32613 7.15505 12.7242 7.08334 18.1711C7.15505 23.6179 11.5532 28.016 17 28.0878C22.4469 28.016 26.845 23.6179 26.9167 18.1711C26.845 12.7242 22.4469 8.32613 17 8.25442ZM18.4167 25.2544H15.5833V19.5877H9.91668V16.7544H15.5833V11.0878H18.4167V16.7544H24.0833V19.5877H18.4167V25.2544ZM28.747 9.25742L24.4843 5.00742L26.4803 3L30.7445 7.25L28.747 9.256V9.25742ZM5.25443 9.25742L3.24701 7.25L7.48426 3L9.48884 5.006L5.25443 9.256V9.25742Z"
            fill="#363636"
          />
        </svg>
      ),
    },
    {
      question: "Which agency is best for digital marketing?",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="pl-4"
        >
          <path
            d="M17 30.9211C9.99697 30.8288 4.34231 25.1741 4.25001 18.1711C4.34231 11.168 9.99697 5.51339 17 5.42108C24.003 5.51339 29.6577 11.168 29.75 18.1711C29.6577 25.1741 24.003 30.8288 17 30.9211ZM17 8.25442C11.5532 8.32613 7.15505 12.7242 7.08334 18.1711C7.15505 23.6179 11.5532 28.016 17 28.0878C22.4469 28.016 26.845 23.6179 26.9167 18.1711C26.845 12.7242 22.4469 8.32613 17 8.25442ZM18.4167 25.2544H15.5833V19.5877H9.91668V16.7544H15.5833V11.0878H18.4167V16.7544H24.0833V19.5877H18.4167V25.2544ZM28.747 9.25742L24.4843 5.00742L26.4803 3L30.7445 7.25L28.747 9.256V9.25742ZM5.25443 9.25742L3.24701 7.25L7.48426 3L9.48884 5.006L5.25443 9.256V9.25742Z"
            fill="#363636"
          />
        </svg>
      ),
    },
    {
      question: "How can I get digital marketing services?",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          className="pl-4"
        >
          <path
            d="M17 30.9211C9.99697 30.8288 4.34231 25.1741 4.25001 18.1711C4.34231 11.168 9.99697 5.51339 17 5.42108C24.003 5.51339 29.6577 11.168 29.75 18.1711C29.6577 25.1741 24.003 30.8288 17 30.9211ZM17 8.25442C11.5532 8.32613 7.15505 12.7242 7.08334 18.1711C7.15505 23.6179 11.5532 28.016 17 28.0878C22.4469 28.016 26.845 23.6179 26.9167 18.1711C26.845 12.7242 22.4469 8.32613 17 8.25442ZM18.4167 25.2544H15.5833V19.5877H9.91668V16.7544H15.5833V11.0878H18.4167V16.7544H24.0833V19.5877H18.4167V25.2544ZM28.747 9.25742L24.4843 5.00742L26.4803 3L30.7445 7.25L28.747 9.256V9.25742ZM5.25443 9.25742L3.24701 7.25L7.48426 3L9.48884 5.006L5.25443 9.256V9.25742Z"
            fill="#363636"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="lg:px-20 py-6 md:px-10">
      <div className="grid lg:grid-cols-2 sx:grid-cols-1">
        <div>
          <div className="flex items-center pt-5 mr-40 pl-5">
            <div className="md:w-24 xs:w-14 h-[1px] bg-black my-5 "></div>
            <div className="text-3xl font-extrabold pl-5 pt-1 text-[#363636]">FAQ'S</div>
          </div>
          <div className="md:my-8 lg:ml-24 md:ml-0 xss:ml-6 xs:ml-2 lg:mr-10 md:mr-0  xss:mr-6 xs:mr-2">
            {faqsItems.map((item, index) => (
              <FaqsItem key={index} question={item.question} icon={item.icon} />
            ))}
          </div>
        </div>
        <div className="lg:pl-20 xs:px-2 xss:px-6 md:px-0">
          <div className="flex items-center pt-5 ">
            <div className="xs:text-[25px] md:text-[30px] text-[#363636] font-[700] md:pl-5 xs:pl-0 md:pr-2 ">
              GET IN TOUCH
            </div>
            <div className="md:w-24 xs:w-12 h-[1px] bg-[#363636] my-5 "></div>
          </div>
          <div>
            <form className="py-1">
              <div className="grid md:grid-cols-2 xs:grid-cols-1 xs:pl-0">
                <div class="flex flex-col md:pr-4 md:py-5 xs:py-1">
                  <label for="name" class="hidden">
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    class="w-100 mt-2 py-3 px-3  bg-gray-100 text-black  rounded"
                  />
                </div>
                <div class="flex flex-col md:py-5 xs:py-1">
                  <label for="name" class="hidden">
                    Email
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Email"
                    class="w-100 mt-2 py-3 px-3  bg-gray-100 text-black  rounded"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 xs:grid-cols-1 md:pl-5 xs:pl-0  md:py-5 xs:py-1">
                <div class="flex flex-col md:pr-4">
                  <label for="name" class="hidden">
                    Phone Number
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Phone Number"
                    class="w-100 mt-2 py-3 px-3  bg-gray-100 text-black  rounded"
                  />
                </div>
                <div class="flex flex-col xs:py-1 md:py-0">
                  <label for="name" class="hidden">
                    Select Service
                  </label>
                  <select
                    id="category"
                    className="w-100 mt-2 py-3 px-3  bg-gray-100 text-black rounded"
                  >
                    <option value="General Inquiry">Select Service</option>
                    <option value="Feedback">SEO</option>
                    <option value="Support">Web Development</option>
                    <option value="Feedback">Graphic Design</option>

                    <option value="Feedback">E-Commerce</option>
                  </select>
                </div>{" "}
              </div>

              <div class="flex flex-col md:py-5 xs:py-1 md:pl-5 xs:pl-0">
                <label for="name" class="hidden">
                  Your Comment
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your Comment"
                  class="w-100 mt-2 pt-5 px-3 pb-40 h bg-gray-100 text-black  rounded"
                />
              </div>
              <div className="pt-5 md:pl-5 xs:pl-0">
                <button
                  type="submit"
                  className="py-4 px-8 rounded bg-[#F48029] p-1 text-white"
                >
                  Get a Qoute
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FaqsGetInTouch;
