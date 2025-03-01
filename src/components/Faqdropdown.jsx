import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faqdropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:container mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 bg-red-700 text-white font-semibold rounded-lg focus:outline-none"
      >
        {title}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="p-4 bg-gray-200 text-gray-800">{content}</div>}
    </div>
  );
};

const FaqList = ({ data }) => {
  return (
    <div className="w-full md:container mx-auto space-y-4 p-4">
      {data.map((item, index) => (
        <Faqdropdown key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default FaqList;
