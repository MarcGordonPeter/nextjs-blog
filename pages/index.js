import Head from "next/head";
import Navbar from "./navbar";
import Content from "./content";
import React from "react";

export default function Home() {
  const namen = ["Marc", "Michelle", "Jonas", "Felicia", "Lukas"];
  const beschreibung = {
    Marc: "Hey",
    Michelle: "Hallo",
    Jonas: "Teststs",
    Felicia: "Spanien",
    Lukas: "looool",
  };
  const picture_src = {
    Marc: "Hey",
    Michelle: "Hallo",
    Jonas: "Teststs",
    Felicia: "Spanien",
    Lukas: "looool",
  };
  return (
    <div className="container">
      <head>
        <title>.onPoint</title>
        <meta charset="utf-8" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      <Content title="Unsere Vision">
        <p>
          Wir entwickeln als Team Softwareprodukte, sodass Sie mit der besten
          und aktuellsten Software ausgestattet werden. Unsere Entwicklung
          arbeitet zielstrebig auf Exzellenz ihrer Wünsche hin und wird Ihnen
          eine einfache und trotzdem zuverlässige Lösung bieten. Hier wird die
          Software Ihrer Vorstellung Realität.
        </p>
      </Content>
      <Content title="Unser Team">
        {namen.map((name) => {
          return (
            <Profile name={name} picture_src={picture_src[name]}>
              {beschreibung[name]}
            </Profile>
          );
        })}
      </Content>
      <Content title="Kontakt">
        <p>
          Wir bei onPoint sind immer und überall und auch an Weihnachten
          erreichbar! Wir kennen keine Freizeit!
        </p>
      </Content>
    </div>
  );
}
