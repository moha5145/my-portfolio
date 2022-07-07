import Carousel from "./Carousel";
import cloneProjects from "../../datas/cloneProjects";
import personalProjects from "../../datas/personalProjects";

const Projects = () => {
  return (
    <section id="projects" className="  h-[100%] bg-projects">
      <div className=" mx-auto mr-0  pb-2">
        <h1 className="text-center pt-10">Projects</h1>

        <div className="pl-3">
          <div>
            <h2>Les répliques</h2>
            <Carousel projects={cloneProjects} />
          </div>

          <div>
            <h2>Projets personnel</h2>
            <Carousel projects={personalProjects} />
          </div>

          <div>
            <h2> Projet en group</h2>
            <Carousel projects={cloneProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
