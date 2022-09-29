import Head from "next/head";

export default function Navbar() {
  return (
    <nav
      className="font-mono text-2xl bg-gray-300 py-4 md:py-16 w-screen flex md:flex-row flex-col text-center justify-around"
      id="navigation"
    >
      <a className="flex flex-row justify-center" href="#vision">
        <img className="w-32 h-14" src="onPointLogo.png" alt="Emoji 1" />
      </a>
      <a className="hover:underline" href="#vision">
        UNSERE VISION
      </a>

      <a className="hover:underline" href="#team">
        UNSER TEAM
      </a>
      <a className="hover:underline" href="#contact">
        KONTAKT
      </a>
    </nav>
  );
}
