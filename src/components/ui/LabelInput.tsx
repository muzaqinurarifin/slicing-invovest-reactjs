import type React from "react";

interface LabelInputProps {
  text: string;
  title: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ text, title }) => {
  return (
    <label htmlFor={text} className="text-semibold font-sm ">
      {title}
    </label>
  );
};

export default LabelInput;
