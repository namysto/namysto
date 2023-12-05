import "./styles/main.css";
import namystoTeam from "./namystoTeam.jpg";
import school from "./pics/school.jpeg";
import {
  aboutUs,
  projects,
  pastProjects,
  media,
} from "./infoForComponents./generalInfo";
import { useState, useEffect } from "react";
import Article from "./Article";

const Main = ({ menuRequest }) => {
  const [articles, setArticles] = useState(aboutUs);

  useEffect(() => {
    const menuNameAndArticles = {
      NAMYSTO: aboutUs,
      ["Support Us"]: undefined,
      ["Media"]: media,
      Contacts: undefined,
      ["Present Projects"]: projects,
      ["Past Projects"]: pastProjects,
    };
    menuRequest
      ? setArticles(menuNameAndArticles[menuRequest])
      : setArticles(aboutUs);
  }, [menuRequest]);

  return (
    <section className="main-container">
      <h1>Namysto</h1>
      {articles.map((articleMain, i) => {
        return (
          <section className="main-article-section" key={i}>
            <h2>{articleMain.name}</h2>
            {articleMain.photo !== "" ? (
              <div
                className="pic-container"
                style={{
                  backgroundImage: `url(${articleMain.photo})`,
                }}
              >
                {/* {console.log(articleMain, "ARTICLE MAIN")} */}
                <img src={articleMain.photo} alt={articleMain.name} />
              </div>
            ) : (
              ""
            )}
            <ul className="about">
              <Article key={i} article={articleMain.article} />
            </ul>
            {articleMain.link ? (
              <a href={articleMain.link} target="_blank">
                {articleMain.linkDescr}
              </a>
            ) : (
              ""
            )}
          </section>
        );
      })}
    </section>
  );
};

export default Main;
