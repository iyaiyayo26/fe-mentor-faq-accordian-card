import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b-[2px] border-light-grayish-blue py-4">
      <article className="mb-2 flex align-middle justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h4 className={`${isOpen ? "clicked" : "font-kumbh-sans text-sm text-very-dark-grayish-blue"}`}>{question}</h4>
        {/* icon dropdown */}
        {isOpen ? <FaChevronUp className="text-soft-red" /> : <FaChevronDown className="text-soft-red" />}
      </article>
      {isOpen && <p className="font-kumbh-sans text-sm text-dark-grayish-blue">{answer}</p>}
    </div>
  );
}
