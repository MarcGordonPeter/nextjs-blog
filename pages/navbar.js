import Head from "next/head";

export default function Navbar() {
  return (
    <nav
      className="font-mono text-2xl bg-gray-300 py-4 md:py-16 w-screen flex md:flex-row flex-col text-center justify-around"
      id="navigation"
    >
      <div className="flex flex-row justify-center">
        <img className="w-32 h-14" src="onPointLogo.png" alt="Emoji 1" />
      </div>

      <a href="#">UNSERE VISION</a>
      <a href="#">UNSER TEAM</a>
      <a href="#">KONTAKT</a>
    </nav>
  );
}
