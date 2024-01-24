import { pastProjects } from "./infoForComponents./generalInfo";
import easter from "./pics/Easter.gif";
import vyshyvanka from "./pics/vyshyvanka.jpg";
import openGarden from "./pics/openGarden.jpg";
import EuropeDay from "./pics/EuropeDay.jpg";
import UnbreakableWomen from "./pics/UnbreakableWomen.jpg";
import RockForUkraine from "./pics/RockForUkraine.jpg";
import fundraiser from "./pics/fundraiser.jpg";

const PastProjects = () => {
  const proj_pics = {
    Easter: easter,
    vyshyvanka: vyshyvanka,
    openGarden: openGarden,
    EuropeDay: EuropeDay,
    UnbreakableWomen: UnbreakableWomen,
    RockForUkraine: RockForUkraine,
    fundraiser: fundraiser,
  };

  return (
    <section className="main-container">
      <h1>Past Projects</h1>
      <p>
        At the heart of our organization lie several impactful projects aimed at
        enriching the lives of the Ukrainian community in Cambridge. The
        'Cambridge Ukrainian School' stands as a beacon of educational
        excellence, providing a nurturing space for children to learn and
        connect with their cultural roots. Our 'AidHub' initiative extends a
        helping hand, offering essential support to those in need within the
        community. Engaging 'Ukrainian Meetups' foster social connections, while
        English lessons contribute to the integration process. Additionally, our
        events cater to both Ukrainian children and adults, creating spaces for
        cultural celebration, learning, and community building. These projects
        collectively reflect our commitment to holistic support and empowerment
        within the Ukrainian community in Cambridge.
      </p>
      <ul>
        {pastProjects.map((project, i) => {
          return (
            <li key={i}>
              <h2>{project.name}</h2>
              <div className="project_descr">{project.article}</div>
              <div className="pic-container">
                <img src={`${proj_pics[project.photo]}`} alt={project.name} />
              </div>
              {project.link ? (
                <a href={project.link}>{project.linkDescr}</a>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PastProjects;
