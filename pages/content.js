import Head from "next/head";
import Navbar from "./navbar";

export default function Content({ title = "", children: text }) {
  return (
    <div className="border-b border-grey-500 p-10 bg-grey-500 border rounded-3xl">
      <h1 className="font-bold text-2xl text-decoration: underline">{title}</h1>
     {text}
    </div>
  );
}
