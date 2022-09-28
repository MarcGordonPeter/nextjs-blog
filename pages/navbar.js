import Head from "next/head";

export default function Navbar() {
  return (
    <nav
      className="flex flex-col lg:flex-row justify-center font-bold pb-16 :text-4xl justify-around p-20"
      id="navigation"
    >
      <a href="#">Unsere Vision</a>
      <a href="#">Unser Team</a>
      <a href="#">Kontakt</a>
    </nav>
  );
}
