import React from "react";

const CodeResult = (props: CodeResultProps) => {
  const { children } = props;

  return (
    <pre className="bg-[#2E3440] text-white -mx-4 -mt-11 px-3 py-3 mb-8 sm:rounded-b-md flex flex-col gap-2 overflow-x-auto  text-sm">
      === Output:
      {children}
    </pre>
  );
};

interface CodeResultProps {
  children: React.ReactNode;
}

export default CodeResult;
