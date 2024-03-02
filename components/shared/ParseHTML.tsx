"use client";
import parse from "html-react-parser";

const ParseHTML = ({ data }: { data: string }) => {
  return <div className="w-full max-w-full">{parse(data)}</div>;
};

export default ParseHTML;
