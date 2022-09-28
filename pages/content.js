import Head from "next/head";
import Navbar from "./navbar";

export default function Content({ title = "", children }) {
  return (
    <div className="p-20 bg-grey-500">
      <h1 className="font-bold text-2xl">{title}</h1>
      <p>
        Wir entwickeln als Team Softwareprodukte, sodass Sie mit der besten und
        aktuellsten Software ausgestattet werden. Unsere Entwicklung arbeitet
        zielstrebig auf Exzellenz ihrer Wünsche hin und wird Ihnen eine einfache
        und trotzdem zuverlässige Lösung bieten. Hier wird die Software Ihrer
        Vorstellung Realität.
      </p>
    </div>
  );
}
