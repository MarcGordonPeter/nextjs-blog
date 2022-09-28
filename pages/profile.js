import Head from "next/head";
import Navbar from "./navbar";

export default function Profile({ name = "", picture_src="", children:text}) {
  return (
    <div className="p-20 bg-gray-100 border rounded-3xl">
            <h1 className="font-semibold">{name}</h1>
            <div className="">
              <img
                className="object-right object-cover"
                src={picture_src}
                alt={name}
              />
            </div>
            {text}
          </div>
  );
}