import Carousel from "./Carousel";
import cloneProjects from "../../datas/cloneProjects";
import personalProjects from "../../datas/personalProjects";
import { useTranslation } from "next-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="  h-[100%] bg-projects">
      <div className=" mx-auto mr-0  pb-2">
        <h1 className="text-center pt-10">{t("common:projects_t1")}</h1>

        <div className="pl-3">
          <div>
            <h2>{t("common:projects_t2")}</h2>
            <Carousel projects={cloneProjects} />
          </div>

          <div>
            <h2>{t("common:projects_t3")}</h2>
            <Carousel projects={personalProjects} />
          </div>

          <div>
            <h2>{t("common:projects_t4")}</h2>
            <Carousel projects={cloneProjects} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
