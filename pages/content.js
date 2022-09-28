import Head from "next/head";
import Navbar from "./navbar";

export default function Content({ title = "", children: text }) {
  return (
    <div className="border-b border-grey-500 p-5 md:p-10 bg-grey-500 border rounded-3xl text-lg md:text-2xl text-left md:text-justify">
      <h1 id="team" className="font-mono font-bold text-4xl text-center pb-20">
        {title}
      </h1>
      {text}
    </div>
  );
}
