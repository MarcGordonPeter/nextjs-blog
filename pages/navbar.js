import Head from "next/head";

export default function Navbar() {
  return (
    <nav
      className="font-mono bg-gray-200 flex flex-col lg:flex-row pb-16 justify-around p-5 outline-neutral-100 "
      id="navigation"
    >
      <a href="#">UNSERE VISION</a>
      <a href="#">UNSER TEAM</a>
      <a href="#">KONTAKT</a>
    </nav>
  );
}
