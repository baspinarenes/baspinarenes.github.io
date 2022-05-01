import React from "react";

const CodeResult = (props: CodeResultProps) => {
  const { children } = props;

  return (
    <pre className="
      bg-[#2E3440] text-[rgb(97,110,136)]
      -mx-4 -mt-11 mb-8 px-3 pt-6 pb-5
      rounded-none sm:rounded-b-md
      flex flex-col gap-2
      overflow-x-auto
      text-sm
    ">
      === Output:
      {children}
    </pre>
  );
};

interface CodeResultProps {
  children: React.ReactNode;
}

export default CodeResult;
