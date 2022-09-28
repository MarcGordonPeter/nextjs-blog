import Head from "next/head";
import Navbar from "./navbar";

export default function Profile({
  name = "",
  picture_src = "",
  children: text,
}) {
  return (
    <div className="md:p-10  bg-gray-100 border rounded-3xl flex justify-center">
      <div className="flex flex-col text-center justify-start">
        <div className="flex flex-row justify-center">
          <img className="" src={picture_src} alt={name} />
        </div>
        <h1 className="font-semibold">{name}</h1>
        {text}
      </div>
    </div>
  );
}
