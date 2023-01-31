import "./styles/app.scss";
import Header from "./components/Header";

import img1 from "./img/store/01.png";
import img2 from "./img/store/02.png";
import img3 from "./img/store/03.png";
import img4 from "./img/store/04.png";
import Footer from "./components/Footer";
import { useState } from "react";
import Card from "./components/Card";

export const pictures = [
  {
    id: 1,
    title: "«Рождение Венеры» Сандро Боттичелли",
    img: img1,
    oldPrice: "2 000 000 $",
    currPrice: "1 000 000 $",
    status: "active",
  },
  {
    id: 2,
    title: "«Тайная вечеря»  Леонардо да Винчи",
    img: img2,
    oldPrice: "",
    currPrice: "3 000 000 $",
    status: "active",
  },
  {
    id: 3,
    title: "«Сотворение Адама» Микеланджело",
    img: img3,
    oldPrice: "6 000 000 $",
    currPrice: "5 000 000 $",
    status: "active",
  },
  {
    id: 4,
    title: "«Урок анатомии»  Рембрандт",
    img: img4,
    oldPrice: "",
    currPrice: "",
    status: "sold",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="page">
          <section className="store">
            <div className="store__container">
              <h1 className="store__title">Картины эпохи Возрождения</h1>
              <div className="store__body">
                {pictures
                  .filter((picture) =>
                    picture.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((picture) => (
                    <Card
                      items={pictures}
                      item={picture}
                      key={picture.id}
                      title={picture.title}
                      img={picture.img}
                      id={picture.id}
                      status={picture.status}
                      oldPrice={picture.oldPrice}
                      currPrice={picture.currPrice}
                    />
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
