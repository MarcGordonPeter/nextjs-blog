import Head from "next/head";
import Navbar from "./navbar";

export default function Profile({
  name = "",
  picture_src = "",
  children: text,
  email = "",
}) {
  return (
    <div className="md:p-10  bg-gray-100 border rounded-3xl flex justify-center hover:shadow-2xl">
      <div className="flex flex-col text-center justify-between">
        <div>
          <div className="flex flex-row justify-center">
            <img className="" src={picture_src} alt={name} />
          </div>
          <h1 className="font-semibold">{name}</h1>
          {text}
        </div>
        <div className="flex flex-col pt-10">
          <span>&#9993;</span>
          <a className="hover:text-blue-600" href={"mailto:" + email}>
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
