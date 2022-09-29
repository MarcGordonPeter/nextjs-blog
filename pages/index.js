import Head from "next/head";
import Navbar from "../components/navbar";
import Content from "../components/content";
import Profile from "../components/profile";
import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  const namen = ["Marc", "Michelle", "Jonas", "Felicia", "Lukas", "Jingwen"];
  const beschreibung = {
    Marc: "Ich bin 20 Jahre alt und bin im 5.Semester.",
    Michelle: "Ich bin 23 Jahre alt und im 7. Semester.",
    Jonas:
      "Ich bin 22 Jahre alt und im 5. Semester. Ich freu mich auf Ihr Projekt!",
    Felicia: "Ich bin in Spanien und im 5. Semester",
    Lukas:
      "Ich bin 22 Jahre alt und zur Zeit im 7. Semester. Ich bin gespannt auf neue Herausforderungen!",
    Jingwen: "Ich bin 23 Jahre alt und bin im 7. Semester",
  };
  const picture_src = {
    Marc: "emoji1.jpeg",
    Michelle: "emoji2.jpeg",
    Jonas: "emoji3.jpeg",
    Felicia: "emoji4.jpeg",
    Lukas: "emoji5.jpeg",
    Jingwen: "emoji6.jpeg",
  };
  return (
    <div>
      <Head>
        <title>.onPoint</title>
        <meta charset="utf-8" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div>
        <div id="start" className="fixed">
          <Navbar />
        </div>
        <div
          id="vision"
          className="font-mono md:pl-20 md:pr-20 pt-56 grid grid-cols-1 gap-10 p-5"
        >
          <Content title="Unsere Vision">
            <p>
              Wir entwickeln als Team Softwareprodukte, sodass Sie mit der
              besten und aktuellsten Software ausgestattet werden. Unsere
              Entwicklung arbeitet zielstrebig auf Exzellenz ihrer Wünsche hin
              und wird Ihnen eine einfache und trotzdem zuverlässige Lösung
              bieten. Hier wird die Software Ihrer Vorstellung Realität.
            </p>
          </Content>
          <Content title="Unser Team">
            <div className="grid justify-self-stretch xl:grid-flow-row 3xl:grid-cols-6 xl:grid-cols-2 2xl:grid-cols-3 gap-4 ">
              {namen.map((name) => {
                return (
                  <Profile name={name} picture_src={picture_src[name]}>
                    {beschreibung[name]}
                  </Profile>
                );
              })}
            </div>
          </Content>
          <Content title="Kontakt">
            <p id="contact">
              Wir bei onPoint sind immer und überall und auch an Weihnachten
              erreichbar! Wir kennen keine Freizeit!
            </p>
          </Content>
        </div>
      </div>
    </div>
  );
}
