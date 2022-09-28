import Head from "next/head";
import Navbar from "./navbar";
import Content from "./content";

export default function Home() {
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
      <Content title="Hello World" />
      <div className="p-20 bg-grey-500">
        <h1 className="font-bold text-2xl">Unsere Vision</h1>
        <p>
          Wir entwickeln als Team Softwareprodukte, sodass Sie mit der besten
          und aktuellsten Software ausgestattet werden. Unsere Entwicklung
          arbeitet zielstrebig auf Exzellenz ihrer Wünsche hin und wird Ihnen
          eine einfache und trotzdem zuverlässige Lösung bieten. Hier wird die
          Software Ihrer Vorstellung Realität.
        </p>
      </div>
      <div className="p-20 bg-grey-500">
        <h1 className="font-bold text-2xl">Unser Team</h1>
        <p>
          Wir sind ein motiviertes Team von sechs Studierenden der Universität
          zu Köln.
        </p>
        <div className="grid gap-10 grid- md:grid-cols-2 2xl:grid-cols-3 p-10">
          <div className="p-20 bg-gray-100 border rounded-3xl flex flex-col justify-evenly">
            <div className="">
              <h1 className="font-semibold">Marc</h1>
            </div>
            <div className="">
              <img
                className="object-right object-cover"
                src="imoji4.jpeg"
                alt="This is a dummy picture"
              />
            </div>
            <div>
              <p>
                Ich bin 20 Jahre alt, studiere im 5. Semester und freue mich auf
                die kommende Zusammenarbeit
              </p>
            </div>
          </div>
          <div className="p-20 bg-gray-100 border rounded-3xl">
            <h1 className="font-semibold">Jonas</h1>
            <div className="">
              <img
                className="object-right object-cover"
                src="imoji4.jpeg"
                alt="This is a dummy picture"
              />
            </div>
            <p>
              Ich bin 22 Jahre alt, studiere im 5. Semester und warte gespannt
              auf Ihre Anfrage!
            </p>
          </div>
          <div className="p-20 bg-gray-100 border rounded-3xl">
            <h1 className="font-semibold">Lukas</h1>
            <div className="">
              <img
                className="object-right object-cover"
                src="imoji4.jpeg"
                alt="This is a dummy picture"
              />
            </div>
            <p>
              Ich bin 22 Jahre alt, studiere im 7. Semester und freue mich auf
              neue Kontakte.
            </p>
          </div>
          <div className="p-20 bg-gray-100 border rounded-3xl">
            <h1 className="font-semibold">Jingwen</h1>
            <div className="">
              <img
                className="object-right object-cover"
                src="imoji4.jpeg"
                alt="This is a dummy picture"
              />
            </div>
            <p>ich bin 22 Jahre alt, im 7. Semester.</p>
          </div>
          <div className="p-20 bg-gray-100 border rounded-3xl">
            <h1 className="font-semibold">Felicia</h1>
            <div className="">
              <img
                className="object-right object-cover"
                src="imoji4.jpeg"
                alt="This is a dummy picture"
              />
            </div>
            <p>Beschreibung</p>
          </div>
          <div className="p-20 bg-gray-100 border rounded-3xl">
            <h1 className="font-semibold">Michelle</h1>
            <div className="">
              <img
                className="object-right object-cover"
                src="imoji4.jpeg"
                alt="This is a dummy picture"
              />
            </div>
            <p>
              Ich bin 23 Jahre alt, im 7. Semester und hoffe auf eine gute
              Zusammenarbeit!
            </p>
          </div>
        </div>
        <div className="p-20">
          <h1 className="font-bold text-2xl">Kontakt</h1>
          <p>
            Wir bei onPoint sind immer und überall und auch an Weihnachten
            erreichbar! Wir kennen keine Freizeit!
          </p>
        </div>
      </div>
    </div>
  );
}
